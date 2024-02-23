"use client";
import { Button } from "@/components";
import { CardModal } from "@/components/Modal";
import StarIcon from "@/components/StarIcon";
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
import { useState } from "react";

interface IFoodProps {
  data: {
    name: string;
    price: number;
    img: string;
  };
}

export const FoodCard = ({ data }: IFoodProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid
      sx={{ width: 282, margin: 5, border: "none", boxShadow: "none" }}
      onClick={handleOpen}
    >
      <CardActionArea>
        <CardMedia
          sx={{ p: 0, height: 186, objectFit: "cover" }}
          image={data.img || "/dishpic.jpg"}
        />
        <CardContent
          sx={{
            pt: 1,
          }}
        >
          <Typography fontSize={18} fontWeight={600}>
            {data.name}
          </Typography>
          <Typography color="#18BA51" fontSize={18} fontWeight={600}>
            {data.price}₮
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </Grid>
  );
};
