import React, { useState } from "react";
import { ReactNode } from "react";
import { Button as MuiButton, Stack } from "@mui/material";

interface IButtonProps {
  label: ReactNode;
  disabled?: boolean;
  href?: string;
  btnType?: "contained" | "outlined" | "text";
  onClick?: () => void;
}

export const Button = ({
  label,
  onClick,
  disabled = false,
  btnType = "contained",
  href,
}: IButtonProps) => {
  return (
    <Stack gap={1}>
      <MuiButton
        href={href}
        onClick={onClick}
        color="primary"
        variant={btnType}
        disabled={disabled}
        sx={{
          padding: "8px 16px 8px 16px",
          fontSize: "16px",
          fontWeight: "400",
          height: "48px",
          color:
            btnType === "outlined" || btnType === "text" ? "#18BA51" : "white",
          border: btnType === "outlined" ? 1 : 0,
          borderColor: btnType === "outlined" ? "#18ba51" : "",
        }}
        size="medium"
      >
        {label}
      </MuiButton>
    </Stack>
  );
};
