"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { FaMinus, FaPlus } from "react-icons/fa";

import { Grid, Typography, Button as MuiButton } from "@mui/material";
import { MdOutlineCancel } from "react-icons/md";
import axios from "axios";
import { config } from "process";
import { Add, Remove } from "@mui/icons-material";
import BasketFoods from "./BasketFoods";

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
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBasketForUser();
  }, []);

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

  const deleteFoodFromBasket = () => {};
  return (
    <Grid>
      <React.Fragment key={"right"}>
        <Button variant="text" onClick={toggleDrawer("right", true)}>
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
        </Button>
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
                  <BasketFoods data={e} key={e._id} />
                ))}
              </Box>
            </List>
          </Box>
        </Drawer>
      </React.Fragment>
    </Grid>
  );
}
