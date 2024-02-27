"use client";
import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";

import { Grid, Typography, Button as MuiButton } from "@mui/material";
import { MdOutlineCancel } from "react-icons/md";
import axios from "axios";
import { config } from "process";
import { Add, Remove } from "@mui/icons-material";

interface IData {
  [key: string]: any;
}

const BasketFoods: React.FC<{
  data: IData;
}> = ({ data }) => {
  const [foodQty, setFoodQty] = useState(data.quantity ? data.quantity : 1);
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const handleCount = async (operation: string) => {
    console.log(data, "sdaasdasdasdas");
    if (operation === "add") {
      const updatedQty = foodQty + 1;
      setFoodQty(updatedQty);
      try {
        const newQuantityPost = await axios.post(
          "http://localhost:8080/basket",
          { foodId: data.food, quantity: updatedQty },
          config
        );
      } catch (error) {
        console.log(error);
      }
    } else if (operation === "min" && foodQty > 1) {
      const updatedQty = foodQty - 1;
      setFoodQty(updatedQty);
      try {
        const newQuantityPost = await axios.post(
          "http://localhost:8080/basket",
          { foodId: data.food, quantity: updatedQty },
          config
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  const [basketFood, setBasketFood] = useState<any>({});

  const getFoodinfo = async () => {
    try {
      const getFoodData = await axios.get(
        `http://localhost:8080/foods/${data.food}`
      );
      setBasketFood(getFoodData.data.findFood);
      console.log("foodata", getFoodData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFoodinfo();
  }, []);

  const deleteFoodFromBasket = async () => {
    console.log(data, "dataaa");
    try {
      const deleteFood = await axios.delete(
        `http://localhost:8080/basket/${data.food}`,
        config
      );
      console.log("foodata", deleteFood);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFoodinfo();
  }, []);

  return (
    <Grid container padding={"16px"} spacing={"16px"}>
      <Grid item xs={6}>
        <img src="dishpic.jpg" width={"245px"} height={"150px"} />
      </Grid>
      <Grid item xs={6}>
        <Grid
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Grid>
            <Typography
              variant="h5"
              fontSize={18}
              fontStyle={"normal"}
              fontWeight={600}
            ></Typography>
            <Typography
              variant="h5"
              fontSize={18}
              fontStyle={"normal"}
              fontWeight={600}
              color={"#18BA51"}
            >
              {basketFood?.price}
            </Typography>
          </Grid>
          <Button sx={{ height: "48px", width: "48px" }}>
            <MdOutlineCancel
              height={"48px"}
              width={"48px"}
              onClick={() => {
                deleteFoodFromBasket();
              }}
            />
          </Button>
        </Grid>
        <Grid>
          <Typography variant="subtitle1">{basketFood.name}</Typography>
          <div>
            <MuiButton onClick={() => handleCount("min")}>
              <Remove
                sx={{
                  bgcolor: "#18BA51",
                  color: "white",
                  width: "70%",
                  height: "30px",
                  borderRadius: 2,
                }}
              />
            </MuiButton>
            <input
              type="text"
              value={foodQty}
              style={{
                width: "100px",
                border: "none",
                textAlign: "center",
                paddingTop: 4,
                paddingBottom: 4,
                fontWeight: 600,
                fontSize: 16,
              }}
            />
            <MuiButton onClick={() => handleCount("add")}>
              <Add
                sx={{
                  bgcolor: "#18BA51",
                  color: "white",
                  width: "70%",
                  height: "30px",
                  borderRadius: 2,
                }}
              />
            </MuiButton>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BasketFoods;
