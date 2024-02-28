"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Grid, Typography, Button as MuiButton } from "@mui/material";
import axios from "axios";
import BasketFoods from "./BasketFoods";
import { Button } from "@/components/core/Button";
import { Router } from "next/router";

export default function Basket() {
  const [state, setState] = useState({
    right: false,
  });
  const [userBasket, setUserBasket] = useState([]);
  const toggleDrawer =
    (anchor: "right", open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === "keydown") {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getAllBasketForUser = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/basket", config);
      setUserBasket(data.basket.foods);
      console.log(data.basket.foods);
    } catch (error) {
      console.log(error);
    }
  };

  const [foodQty, setFoodQty] = useState(1);

  const handleCount = (operation: string) => {
    if (operation === "add") {
      setFoodQty(foodQty + 1);
      // const getIntoBasket = async () => {
      //   try {
      //     const { data } = await axios.post(
      //       "http://localhost:8080/basket",
      //       { quantity: count + 1 },
      //       config
      //     );
      //     console.log(data);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // };
      // getIntoBasket();
    } else if (operation === "min" && foodQty > 1) {
      setFoodQty(foodQty - 1);
    }
  };

  const deleteFoodFromBasket = async (foodId: string) => {
    try {
      const deleteFood = await axios.delete(
        `http://localhost:8080/basket/${foodId}`,
        config
      );
      // const index = userBasket.findIndex((e) => {
      //   return e.food === foodId;
      // });
      // setUserBasket(userBasket.splice(index, 1));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBasketForUser();
  }, []);

  return (
    <Grid>
      <React.Fragment key={"right"}>
        <MuiButton variant="text" onClick={toggleDrawer("right", true)}>
          <Grid
            display="flex"
            gap={"10px"}
            alignItems={"center"}
            padding={"8px 16px 8px 16px"}
          >
            <img src="basket.svg" />
            <Typography
              variant="h4"
              fontSize="14px"
              fontStyle="normal"
              fontWeight={700}
              lineHeight="20px"
            >
              Сагс
            </Typography>
          </Grid>
        </MuiButton>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          <Box sx={{ width: "586px" }} role="presentation">
            <Grid
              padding={"26px 24px 49px 24px"}
              display={"flex"}
              justifyItems={"center"}
              alignItems={"center"}
              gap={"171px"}
            >
              <Grid
                height={"48px"}
                width={"48px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <img
                  src="leftarrow.svg"
                  onClick={toggleDrawer("right", false)}
                ></img>
              </Grid>
              <Typography
                fontSize={20}
                fontStyle={"normal"}
                fontWeight={900}
                textAlign={"center"}
              >
                Таны сагс
              </Typography>
            </Grid>
            <Divider />
            <List sx={{ padding: "24px 24px 0 24px" }}>
              <Box sx={{ flexGrow: 1 }}>
                {userBasket.map((e: any, key: any) => (
                  <BasketFoods
                    data={e}
                    key={e._id}
                    onDelete={(foodId: string) => deleteFoodFromBasket(foodId)}
                  />
                ))}
              </Box>
            </List>
          </Box>
          <Divider />
          <Box
            display={"flex"}
            width={"100%"}
            justifyContent={"space-between"}
            px={20}
            py={10}
            alignItems={"center"}
          >
            <Grid>
              <Typography>Нийт төлөх дүн</Typography>
              <Typography>150000₮</Typography>
            </Grid>
            <Button label="Захилах" onClick={() => {}}></Button>
          </Box>
        </Drawer>
      </React.Fragment>
    </Grid>
  );
}
