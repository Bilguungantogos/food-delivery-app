import React from "react";
import { ReactNode } from "react";
import { Button as MuiButton, Stack } from "@mui/material";

interface IButtonProps {
  label: ReactNode;
  disabled?: boolean;
  btnType?: "contained" | "outlined" | "text";
  onClick?: () => void;
}

export const Button = ({
  label,
  onClick,
  disabled = false,
  btnType = "contained",
}: IButtonProps) => {
  return (
    <Stack gap={1}>
      <MuiButton
        onClick={onClick}
        color="primary"
        variant={btnType}
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
        disabled={disabled}
        size="medium"
      >
        {label}
      </MuiButton>
    </Stack>
  );
};
