"use client";

import React, { ChangeEvent, useState } from "react";
import EmailInput from "./EmailInput";
import RecoveryCode from "./RecoveryCode";
import ChangeNewPassword from "./ChangeNewPassword ";
import { Container } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const PasswordRecoverPage = () => {
  const [activeStep, setActivestep] = useState(1);

  const [user, setUser] = useState({
    email: "",
    password: "",
    rePassword: "",
    otp: "",
  });

  const handleNext = async () => {
    try {
      const data = await axios.post("http://localhost:8080/verify/send-email", {
        email: user.email,
      });
      setActivestep((prev) => prev + 1);
    } catch (error) {
      toast.error("Email илгэээхэд алдаа гарлаа.");
      console.log(error);
    }
  };

  const savePassword = async () => {};

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Container>
      {activeStep === 1 && (
        <EmailInput
          email={user.email}
          handleNext={handleNext}
          handleChangeInput={handleChangeInput}
        />
      )}
      {activeStep === 2 && (
        <RecoveryCode
          email={user.email}
          otp={user.otp}
          handleNext={handleNext}
          handleChangeInput={handleChangeInput}
        />
      )}
      {activeStep === 3 && (
        <ChangeNewPassword
          email={user.email}
          handleChangeInput={handleChangeInput}
          savePassword={savePassword}
        />
      )}
    </Container>
  );
};

export default PasswordRecoverPage;
