import React, { ChangeEvent } from "react";
import { Input, Button } from "@/components";
import axios from "axios";
import { toast } from "react-toastify";
import { Grid, Box, Typography, Stack, colors } from "@mui/material";

interface IStepProps {
  email: string;
  otp: string;
  handleNext: () => void;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RecoveryCode = ({
  email,
  handleNext,
  otp,
  handleChangeInput,
}: IStepProps) => {
  const handleSendOtp = async () => {
    try {
      const data = await axios.post("http://localhost:8080/verify/otp", {
        email,
        otp,
      });
      handleNext();
    } catch (error) {
      console.log(error);
      toast.error("OTP илгэээхэд алдаа гарлаа.");
    }
  };

  return (
    <Grid mt="132px" mb="87px">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto ",
          padding: "32px",
          maxWidth: "448px",
        }}
      >
        <Typography
          align="center"
          gutterBottom
          sx={{ fontSize: "28px", fontWeight: "700" }}
        >
          Нууц үг сэргээх
        </Typography>
        <Stack width="100%" sx={{ mb: "48px" }}>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "500", color: "#695C08" }}
          >
            Таны <span style={{ color: "#18BA51" }}>example@pinecone.mn</span>{" "}
            хаяг руу сэргээх код илгээх болно.
          </Typography>
          <Input
            label="Имэйл"
            name="otp"
            placeholder="Код оруулна уу"
            onChange={handleChangeInput}
          />
        </Stack>
        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button
            label="Үргэлжлүүлэх"
            btnType="contained"
            onClick={handleSendOtp}
          />
        </Stack>
      </Box>
    </Grid>
  );
};

export default RecoveryCode;
