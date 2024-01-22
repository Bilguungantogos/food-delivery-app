import React from "react";
import { Input, Button } from "@/components";

import { Grid, Box, Typography, Stack, colors } from "@mui/material";

const RecoveryCode = () => {
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
          <Input label="Имэйл" placeholder="Имэйл хаягаа оруулна уу" />
        </Stack>
        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Үргэлжлүүлэх" btnType="contained" disabled />
        </Stack>
      </Box>
    </Grid>
  );
};

export default RecoveryCode;
