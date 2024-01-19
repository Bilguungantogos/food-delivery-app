import React from "react";
import { ReactNode } from "react";
import { Button as MuiButton, Stack } from "@mui/material";

interface IButtonProps {
  label: ReactNode;
  onClick?: () => {};
}

export default function Button({ label, onClick }: IButtonProps) {
  return (
    <Stack gap={1}>
      <MuiButton
        onClick={onClick}
        sx={{
          p: 3,
          color: "white",
          borderColor: "divider",
          backgroundColor: "green",
        }}
      >
        {label}
      </MuiButton>
    </Stack>
  );
}
