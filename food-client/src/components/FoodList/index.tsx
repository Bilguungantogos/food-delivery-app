import {
  Box,
  Grid,
  TextField,
  Typography,
  Button as MuiButton,
} from "@mui/material";
import React, { useContext } from "react";

import { FoodContext } from "@/context/FoodProvider";
import { FaCentercode, FaStar } from "react-icons/fa";
import { FoodCard } from "./Card";

const FoodList = () => {
  const { foods } = useContext(FoodContext);

  const slicedFood = foods.slice(0, 4);
  const fontStyle = { fontWeight: "700", fontSize: "22px" };
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        maxWidth={"1300px"}
        m={"auto"}
      >
        <Grid
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Grid display={"flex"} alignItems="center" gap={2}>
            <FaStar color="#18BA51" />
            <Typography sx={fontStyle}>Хямдралтай</Typography>
          </Grid>
          <MuiButton variant="text" sx={{ color: "#18BA51" }}>
            Бүгдийг харах
          </MuiButton>
        </Grid>
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
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        maxWidth={"1300px"}
        m={"auto"}
      >
        <Grid
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Grid display={"flex"} alignItems="center" gap={2}>
            <FaStar color="#18BA51" />
            <Typography sx={fontStyle}>Үндсэн хоол</Typography>
          </Grid>
          <MuiButton variant="text" sx={{ color: "#18BA51" }}>
            Бүгдийг харах
          </MuiButton>
        </Grid>
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
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        maxWidth={"1300px"}
        m={"auto"}
      >
        <Grid
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Grid display={"flex"} alignItems="center" gap={2}>
            <FaStar color="#18BA51" />
            <Typography sx={fontStyle}>Салад ба зууш</Typography>
          </Grid>
          <MuiButton variant="text" sx={{ color: "#18BA51" }}>
            Бүгдийг харах
          </MuiButton>
        </Grid>
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
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        maxWidth={"1300px"}
        m={"auto"}
      >
        <Grid
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Grid display={"flex"} alignItems="center" gap={2}>
            <FaStar color="#18BA51" />
            <Typography sx={fontStyle}>Амттан</Typography>
          </Grid>
          <MuiButton variant="text" sx={{ color: "#18BA51" }}>
            Бүгдийг харах
          </MuiButton>
        </Grid>
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
      </Box>
    </>
  );
};

export default FoodList;
