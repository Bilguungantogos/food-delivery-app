import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
  color: "black",
});

export default function InputFileUpload({ handleFileChange }: any) {
  return (
    <Button
      component="label"
      variant="contained"
      tabIndex={-1}
      sx={{ backgroundColor: "gray", color: "white" }}
    >
      Add Image
      <VisuallyHiddenInput type="file" onChange={handleFileChange} />
    </Button>
  );
}
