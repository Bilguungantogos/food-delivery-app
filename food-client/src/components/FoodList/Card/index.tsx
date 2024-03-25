"use client";
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  Box,
  Container,
  Stack,
  Grid,
} from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { CardModal } from "./CardModal";
import axios from "axios";
import myAxios from "@/utils/axios";

interface IFoodProps {
  data: {
    name: string;
    price: number;
    image: string;
    _id: string;
  };
}
interface IBasket {
  foodId: string;
  quantity: any;
  totalPrice: number;
}

export const FoodCard = ({ data }: IFoodProps) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true), console.log(token, "asdasd");
  };
  const handleClose = () => setOpen(false);

  const [count, setCount] = useState(1);

  const [newBasket, setNewBasket] = useState<IBasket>({
    foodId: data._id,
    quantity: 1,
    totalPrice: 1000,
  });

  const handleCount = (operation: string) => {
    if (operation === "add") {
      setCount(count + 1);
      setNewBasket({ ...newBasket, quantity: count + 1 });
    } else if (operation === "min" && count > 1) {
      setCount(count - 1);
      setNewBasket({ ...newBasket, quantity: count + 1 });
    }
  };

  const getIntoBasket = async () => {
    try {
      const { data } = await myAxios.post("/basket", newBasket, config);
      handleClose();
      console.log("aaaaa", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {" "}
      <Grid
        sx={{ width: 282, margin: 5, border: "none", boxShadow: "none" }}
        onClick={handleOpen}
      >
        <CardActionArea>
          <CardMedia
            sx={{ p: 0, height: 186, objectFit: "cover" }}
            image={data.image || "/dishpic.jpg"}
          />
          <CardContent
            sx={{
              pt: 1,
            }}
          >
            <Typography fontSize={18} fontWeight={600} noWrap>
              {data.name}
            </Typography>
            <Typography color="#18BA51" fontSize={18} fontWeight={600}>
              {data.price}₮
            </Typography>
          </CardContent>
        </CardActionArea>
      </Grid>
      <CardModal
        data={data}
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        handleCount={handleCount}
        getIntoBasket={getIntoBasket}
        count={count}
      />
    </>
  );
};
