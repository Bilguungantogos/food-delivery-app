"use client";

import { Input, Button } from "@/components";
import React from "react";
import { Grid, Box, Typography, Stack } from "@mui/material";

const LoginPage = () => {
  return (
    <Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto ",
          px: "2.1rem",
          maxWidth: "450px",
          height: "calc(100vh - 90px)",
        }}
      >
        <Typography
          align="center"
          gutterBottom
          sx={{ fontSize: "28px", fontWeight: "700" }}
        >
          Нэвтрэх
        </Typography>
        <Stack width="100%" sx={{ mb: "2rem" }}>
          {/* <Input label="Имэйл" />
          <Input label="Нууц үг" showPassword /> */}
          {/* <Button label="Нууц үг сэргээх" btnType="text" /> */}
          <Typography variant="button" align="right">
            Нууц үг сэргээх
          </Typography>
        </Stack>

        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Нэвтрэх" />
        </Stack>
        <Stack sx={{ my: "2rem" }}>
          <Typography>Эсвэл</Typography>
        </Stack>
        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Бүртгүүлэх" btnType="outlined" />
        </Stack>
      </Box>
    </Grid>
  );
};

export default LoginPage;
