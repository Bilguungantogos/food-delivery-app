import { Box, Grid } from "@mui/material";
import React from "react";

const OrderPage = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Box>
          <img src="step1.svg" />
        </Box>
        <Box></Box>
      </Grid>
      <Grid item xs={6}>
        <Box></Box>
        <Box></Box>
      </Grid>
    </Grid>
  );
};

export default OrderPage;
