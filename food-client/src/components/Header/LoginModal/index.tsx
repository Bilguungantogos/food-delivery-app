"use client";

import { Input, Button } from "@/components";
import React from "react";
import { Grid, Modal, Box, Typography, Stack, Fade } from "@mui/material";

interface ILoginProps {
  handleClose: () => void;
  open: boolean;
}

const LoginModal = ({ handleClose, open }: ILoginProps) => {
  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "448px",
    bgcolor: "#FFF",
    border: "1px solid #DADCE0",
    boxShadow: "0px 0px 9px 0px",
    padding: "32px",
    borderRadius: "15px",
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={modalStyle}>
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
            <Typography
              align="right"
              sx={{ fontSize: "14px", fontWeight: "400" }}
            >
              Нууц үг сэргээх
            </Typography>
          </Stack>
          <Stack flex="row" width="100%" justifyContent="flex-end">
            <Button label="Нэвтрэх" btnType="contained" disabled />
          </Stack>
          <Stack sx={{ my: "2rem" }}>
            <Typography textAlign={"center"}>Эсвэл</Typography>
          </Stack>
          <Stack flex="row" width="100%" justifyContent="flex-end">
            <Button label="Бүртгүүлэх" btnType="outlined" />
          </Stack>
        </Box>
      </Fade>
    </Modal>
  );
};

export default LoginModal;
