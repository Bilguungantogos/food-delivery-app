"use client";

import { ChangeEvent, useEffect, useState } from "react";

import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import FoodCard from "./food-card";
import FoodSort from "./food-sort";

import { Button } from "@mui/material";
import Iconify from "@/components/iconify";
import axios from "axios";
import { AddFood } from "./addfood-modal";

interface IFood {
  [key: string]: any;
}
export default function FoodView() {
  const [open, setOpen] = useState(false);

  const [foods, setFoods] = useState([]);
  const [file, setFile] = useState<File | null>(null);
  const [newFood, setNewFood] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.currentTarget.files![0]);
    console.log(file, "aaaa");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewFood({ ...newFood, [name]: value });
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(() => false);
  };
  useEffect(() => {
    getFoodinfo();
  }, []);
  const [selectedValue, setSelectedValue] = useState<string>("");
  const createFood = async () => {
    try {
      const formData = new FormData();
      formData.set("image", file!);
      formData.set("name", newFood.name);
      formData.set("category", selectedValue);
      formData.set("description", newFood.description);
      formData.set("price", newFood.price);
      const token = localStorage.getItem("token");
      const { data } = await axios.post(
        "http://localhost:8080/foods",
        formData
      );
      console.log("Success Add Food");
    } catch (error: any) {
      alert("Add Error - " + error.message);
    }
  };
  const getFoodinfo = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/foods");
      setFoods(data.allFood);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4" sx={{ mb: 5 }}>
          Хоолны жагсаалт
        </Typography>
        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={handleOpen}
        >
          Шинэ хоол
        </Button>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 2 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          {/* <ProductFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          /> */}

          <FoodSort />
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {foods.map((food: any) => (
          <Grid key={food.id} xs={12} sm={6} md={3}>
            <FoodCard food={food} />
          </Grid>
        ))}
      </Grid>

      <AddFood
        open={open}
        handleClose={handleClose}
        newFood={newFood}
        handleChange={handleChange}
        handleFileChange={handleFileChange}
        handleSave={createFood}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
    </Container>
  );
}
