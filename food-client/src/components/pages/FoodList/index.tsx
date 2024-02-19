import { Grid } from "@mui/material";
import React from "react";
import { FoodCard } from "./Card";

const FoodList = () => {
  return (
    <Grid item xs={12} md={12}>
      <FoodCard
        data={{ name: "Cool Food", price: 1000, img: "/dishpic.jpg" }}
      />
    </Grid>
  );
};

export default FoodList;
