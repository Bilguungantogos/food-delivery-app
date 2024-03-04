"use client";

import DeliveryOp from "@/components/DeliveryOp";
import {
  Box,
  Button as MuiButton,
  Grid,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import React, { useContext } from "react";
import FoodList from "../../FoodList";
import { FoodContext } from "@/context/FoodProvider";
import { FoodCard } from "@/components/FoodList/Card";

const MenuPage = () => {
  const buttonStyle = {
    color: "white",
    backgroundColor: "#18BA51",
    fontWeight: "900",
    fontSize: "150px",
    borderRadius: "20px",
  };
  const { foods } = useContext(FoodContext);
  const slicedFood = foods.slice(0, 4);
  const [value, setValue] = React.useState(0);
  return (
    <Grid height={"full"}>
      <Box my={10}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          <BottomNavigationAction label="Үндсэн хоол" sx={buttonStyle} />
          <BottomNavigationAction label="Амттан" sx={buttonStyle} />
          <BottomNavigationAction label="Ундаа" sx={buttonStyle} />
          <BottomNavigationAction label="Хямдралтай" sx={buttonStyle} />
        </BottomNavigation>
      </Box>

      <Grid>
        <Grid
          container
          xs={12}
          md={12}
          alignItems="center"
          justifyContent="center"
          width={"100%"}
        >
          {slicedFood?.map((e: any, key: any) => {
            return <FoodCard data={e} key={slicedFood._id} />;
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MenuPage;
