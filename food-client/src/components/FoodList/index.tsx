import { Box, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { FoodCard } from "./Card";
import { FoodContext } from "@/context/FoodProvider";
import { FaStar } from "react-icons/fa";

const FoodList = () => {
  const { foods } = useContext(FoodContext);
  const slicedFood = foods.slice(0, 4);

  return (
    <>
      <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
        <Grid mx={30} display={"flex"} alignItems="center" gap={2}>
          <FaStar color="#18BA51" />
          <Typography fontWeight={"bold"}>Хямдралтай</Typography>
        </Grid>
        <Grid
          container
          xs={12}
          md={12}
          alignItems="center"
          justifyContent="center"
        >
          {slicedFood?.map((e: any, key: any) => {
            return <FoodCard data={e} key={slicedFood._id} />;
          })}
        </Grid>
      </Box>
      <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
        <Grid mx={30} display={"flex"} alignItems="center" gap={2}>
          <FaStar color="#18BA51" />
          <Typography fontWeight={"bold"}>Үндсэн хоол</Typography>
        </Grid>
        <Grid
          container
          xs={12}
          md={12}
          alignItems="center"
          justifyContent="center"
        >
          {slicedFood?.map((e: any, i: any) => {
            return <FoodCard data={e} key={i} />;
          })}
        </Grid>
      </Box>
      <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
        <Grid mx={30} display={"flex"} alignItems="center" gap={2}>
          <FaStar color="#18BA51" />
          <Typography fontWeight={"bold"}>Салад ба зууш</Typography>
        </Grid>
        <Grid
          container
          xs={12}
          md={12}
          alignItems="center"
          justifyContent="center"
        >
          {slicedFood?.map((e: any, i: any) => {
            return <FoodCard data={e} key={i} />;
          })}
        </Grid>
      </Box>
      <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
        <Grid mx={30} display={"flex"} alignItems="center" gap={2}>
          <FaStar color="#18BA51" />
          <Typography fontWeight={"bold"}>Амттан</Typography>
        </Grid>
        <Grid
          container
          xs={12}
          md={12}
          alignItems="center"
          justifyContent="center"
        >
          {slicedFood?.map((e: any, i: any) => {
            return <FoodCard data={e} key={i} />;
          })}
        </Grid>
      </Box>
    </>
  );
};

export default FoodList;
