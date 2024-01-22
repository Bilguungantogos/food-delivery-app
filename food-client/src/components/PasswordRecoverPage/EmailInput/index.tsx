import React from "react";
import { Input, Button } from "@/components";

import { Grid, Box, Typography, Stack } from "@mui/material";

const EmailInput = () => {
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
          <Input label="Имэйл" placeholder="Имэйл хаягаа оруулна уу" />
        </Stack>
        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Үргэлжлүүлэх" btnType="contained" disabled />
        </Stack>
      </Box>
    </Grid>
  );
};

export default EmailInput;
