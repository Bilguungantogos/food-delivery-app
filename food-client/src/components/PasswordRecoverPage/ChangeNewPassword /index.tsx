import React from "react";
import { Input, Button } from "@/components";
import { Grid, Box, Typography, Stack, colors } from "@mui/material";
import { FaCheck } from "react-icons/fa6";

const ChangeNewPassword = () => {
  return (
    <Grid mt="132px" mb="71px">
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, -120%)",
          height: "56px",
          maxWidth: "338px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          border: "1px solid #18BA51",
          borderRadius: "40px",
          color: "#18BA51",
          px: "24px",
        }}
      >
        <FaCheck width={"24px"} height={"24px"} />
        <Typography>Нууц үг амжилттай солигдлоо</Typography>
      </Box>
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
          Шинэ нууц үг зохиох
        </Typography>
        <Stack width="100%" sx={{ mb: "48px" }}>
          <Input label="Нууц үг" placeholder="Нууц үг" />
          <Input label="Нууц үг давтах" placeholder="Нууц үг давтах" />
        </Stack>
        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Үргэлжлүүлэх" btnType="contained" disabled />
        </Stack>
      </Box>
    </Grid>
  );
};

export default ChangeNewPassword;
