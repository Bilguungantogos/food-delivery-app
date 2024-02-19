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
    <>
      <Card
        sx={{ maxWidth: 282, margin: 5, border: "none", boxShadow: "none" }}
        onClick={handleOpen}
      >
        <CardActionArea>
          <CardMedia
            sx={{ p: 0, height: 186 }}
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
            <Typography color="primary" fontSize={18} fontWeight={600}>
              {data.price}₮
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <CardModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </>
  );
};

export const FoodCardItem = () => {
  return <Box display="flex" flexWrap="wrap"></Box>;
};
