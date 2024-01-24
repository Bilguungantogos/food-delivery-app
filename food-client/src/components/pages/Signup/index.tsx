"use client";

import React, { useState } from "react";
import { Input, Button } from "@/components";
import { Grid, Box, Typography, Stack } from "@mui/material";

const SignupPage = () => {
  const [formUserData, setLoginUserData] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    rePassword: "",
  });

  const changeFormUserData = (key: string, value: string) => {
    setLoginUserData({ ...formUserData, [key]: value });
  };
  const handleSignupClick = () => {};
  return (
    <Grid mt="74px" mb="94px">
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
          Бүртгүүлэх
        </Typography>
        <Stack width="100%" sx={{ mb: "48px" }}>
          <Input
            label="Нэр"
            onChange={(e) => {
              console.log(e);
              changeFormUserData(e.target.name, e.target.value);
            }}
          />
          <Input
            label="И-мэйл"
            onChange={(e) => {
              console.log(e);
            }}
          />
          <Input label="Хаяг" />
          <Input label="Нууц үг" showPassword />
          <Input label="Нууц үг давтах" showPassword />
        </Stack>

        <Grid
          display={"flex"}
          width="100%"
          alignItems="center"
          gap="6px"
          mb="32px"
        >
          <img src="cloud.svg" height={"24px"} width={"24px"} />
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
            Үйлчилгээний нөхцөл зөвшөөрөх
          </Typography>
        </Grid>

        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Бүртгүүлэх" disabled />
        </Stack>
      </Box>
    </Grid>
  );
};

export default SignupPage;
