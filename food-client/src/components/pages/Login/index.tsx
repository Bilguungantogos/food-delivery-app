"use client";

import { Input, Button } from "@/components";
import React, { useContext, useState } from "react";
import { Grid, Box, Typography, Stack } from "@mui/material";
import { UserContext } from "@/context/UserProvider";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";

const validationSchema = yup.object({
  email: yup
    .string()
    .max(100, "Имэйл хаяг тэмдэгт ихэдлээ")
    .required("Имэйл хаягыг заавал бөглөнө үү")
    .matches(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      "Хүчинтэй имэйл хаяг байх ёстой"
    ),
  password: yup
    .string()
    .required("Нууц үгээ заавал бөглөнө үү.")
    .min(6, "Хамгийн багадаа 6 тэмдэгт байх ёстой."),
});
const LoginPage = () => {
  const { login, loading } = useContext(UserContext);

  const formik = useFormik({
    onSubmit: ({ email, password }) => {
      login(email, password);
      
    },
    initialValues: { email: "", password: "" },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: validationSchema,
  });

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
          <Input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            errorText={formik.errors.email}
            label="Имэйл"
          />
          <Input
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            errorText={formik.errors.password}
            label="Нууц үг"
            showPassword
          />
          <Button label="Нууц үг сэргээх" btnType="text" href="/passrecover" />
        </Stack>
        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button
            label="Нэвтрэх"
            btnType="contained"
            disabled={loading}
            onClick={formik.handleSubmit}
          />
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
