"use client";

import {
  Box,
  Button as MuiButton,
  Grid,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
  Button,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { FoodContext } from "@/context/FoodProvider";
import { FoodCard } from "@/components/FoodList/Card";

const MenuPage = () => {
  const buttonStyle = {
    color: "white",
    backgroundColor: "#18BA51",
    fontWeight: "900",
    borderRadius: "20px",
  };
  const { foods } = useContext(FoodContext);

  const uniqueCategoryNames: string[] = Array.from(
    new Set(foods.map((food: any) => food.category.name))
  );
  const [value, setValue] = useState(0);
  const [filteredFood, setFilteredFood] = useState(foods);

  useEffect(() => {
    const filtered = foods.filter(
      (food: any) => food.category.name === uniqueCategoryNames[value]
    );
    setFilteredFood(filtered);
  }, [value, foods]);
  return (
    <Grid height={"full"} maxWidth={"1400px"} mx={"auto"}>
      <Box my={10}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          {uniqueCategoryNames.map((categoryName, index) => (
            <BottomNavigationAction
              key={index}
              label={categoryName}
              sx={buttonStyle}
            />
          ))}
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
          {filteredFood.map((e: any, key: any) => {
            return <FoodCard data={e} key={key} />;
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MenuPage;
