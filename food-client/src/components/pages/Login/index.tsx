"use client";

import { Input, Button } from "@/components";
import React from "react";
import { Grid, Box, Typography, Stack } from "@mui/material";

const LoginPage = () => {
  return (
    <Grid mt="111px" mb="75px">
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
          Нэвтрэх
        </Typography>
        <Stack width="100%" sx={{ mb: "48px" }}>
          <Input label="Имэйл" />
          <Input label="Нууц үг" showPassword />
          <Button label="Нууц үг сэргээх" btnType="text" href="/passrecover" />
        </Stack>

        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Нэвтрэх" btnType="contained" />
        </Stack>
        <Stack sx={{ my: "2rem" }}>
          <Typography>Эсвэл</Typography>
        </Stack>
        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Бүртгүүлэх" btnType="outlined" href="/signup" />
        </Stack>
      </Box>
    </Grid>
  );
};

export default LoginPage;
