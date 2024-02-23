import { Grid } from "@mui/material";
import React, { useContext } from "react";
import { FoodCard } from "./Card";
import { FoodContext } from "@/context/FoodProvider";

const FoodList = () => {
  const { foods } = useContext(FoodContext);
  return (
    <Grid item xs={12} md={12}>
      {foods?.map((e, i) => {
        return <FoodCard data={e} key={i} />;
      })}
      <FoodCard
        data={{ name: "Cool Food", price: 1000, img: "/dishpic.jpg" }}
      />
    </Grid>
  );
};

export default FoodList;
