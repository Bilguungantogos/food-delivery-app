"use client";

import React, { useContext, useState } from "react";
import { Input, Button } from "@/components";
import { Grid, Box, Typography, Stack, FormControlLabel } from "@mui/material";
import { UserContext } from "@/context/UserProvider";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";
import { CheckBox } from "@mui/icons-material";

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
  rePassword: yup
    .string()
    .oneOf([yup.ref("password")], "нууц үг хоорондоо таарахгүй байна.")
    .required("Нууц үгээ заавал бөглөнө үү.")
    .min(6, "Хамгийн багадаа 6 тэмдэгт байх ёстой."),
});

const SignupPage = () => {
  const { user } = useContext(UserContext);

  const formik = useFormik({
    onSubmit: async (
      { name, email, password, rePassword, address },
      { setSubmitting }
    ) => {
      const router = useRouter();
      try {
        setSubmitting(true);
        const { data } = await axios.post("http://localhost:8080/auth/signup", {
          email: email,
          password: password,
          name: name,
          address: address,
        });
        router.push("/");
        console.log("success");
        setSubmitting(false);
      } catch (error) {
        console.log(error);
      }
    },
    initialValues: {
      name: "",
      email: "",
      password: "",
      address: "",
      rePassword: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: validationSchema,
  });

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
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            label="Нэр"
          />
          <Input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            errorText={formik.errors.email}
            label="И-мэйл"
          />
          <Input
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            label="Хаяг"
          />
          <Input
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            errorText={formik.errors.password}
            label="Нууц үг"
            showPassword
          />
          <Input
            name="rePassword"
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            errorText={formik.errors.rePassword}
            label="Нууц үг давтах"
            showPassword
          />
        </Stack>

        <Grid width="100%" mb="32px" ml={"15px"}>
          <FormControlLabel
            label="Үйлчилгээний нөхцөл зөвшөөрөх"
            control={<CheckBox />}
          />
          {/* <img src="cloud.svg" height={"24px"} width={"24px"} />
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
            Үйлчилгээний нөхцөл зөвшөөрөх
          </Typography> */}
        </Grid>

        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Бүртгүүлэх" onClick={formik.handleSubmit} />
        </Stack>
      </Box>
    </Grid>
  );
};

export default SignupPage;
