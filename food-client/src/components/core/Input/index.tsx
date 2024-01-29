"use client";

import React, { ChangeEvent, useState } from "react";
import {
  FormControl,
  FormLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface IInputProps {
  name?: string;
  label: string;
  showPassword?: boolean;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  name,
  label,
  showPassword = false,
  placeholder,
  onChange,
}: IInputProps) => {
  const [isShowPassword, setIsShowPassword] = useState(showPassword);
  return (
    <>
      <FormControl sx={{ my: "1rem" }} variant="outlined" fullWidth>
        <FormLabel
          sx={{
            my: "4px",
            color: "black",
            fontSize: "14px",
            fontWeight: "400",
            fontFamily: "SF Pro",
          }}
        >
          {label}
        </FormLabel>
        <OutlinedInput
          name={name}
          onChange={onChange}
          sx={{ backgroundColor: "#F7F7F8", height: "48px" }}
          placeholder={placeholder}
          type={isShowPassword ? "password" : "text"}
          endAdornment={
            showPassword && (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setIsShowPassword(!isShowPassword);
                  }}
                >
                  {isShowPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }
        />
      </FormControl>
    </>
  );
};
