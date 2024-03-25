"use client";
import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import {
  Grid,
  Typography,
  Button as MuiButton,
  Badge,
  IconButton,
} from "@mui/material";
import axios from "axios";
import BasketFoods from "./BasketFoods";
import { Button } from "@/components/core/Button";
import { useRouter } from "next/navigation";
import { BasketContext } from "@/context/BasketProvider";
import myAxios from "@/utils/axios";

export default function Basket() {
  const { basket }: any = useContext(BasketContext);
  const [state, setState] = useState({
    right: false,
  });
  const toggleDrawer =
    (anchor: "right", open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === "keydown") {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const deleteFoodFromBasket = async (foodId: string) => {
    try {
      const token = localStorage?.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const deleteFood = await myAxios.delete(`/basket/${foodId}`, config);
    } catch (error) {
      console.log(error);
    }
  };

  const router = useRouter();
  const toOrder = () => {
    router.push("order");
    setState({
      right: false,
    });
  };

  return (
    <Grid>
      <React.Fragment key={"right"}>
        <MuiButton variant="text" onClick={toggleDrawer("right", true)}>
          <Box sx={{ px: 2 }}>
            <IconButton color="inherit">
              <Badge
                badgeContent={basket?.foods?.length}
                color="success"
                sx={{ marginLeft: 2 }}
              >
                <img src="basket.svg" />
                <span
                  style={{
                    display: "inline-block",
                    marginLeft: "8px",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  Сагс
                </span>
              </Badge>
            </IconButton>
          </Box>
          {/* <Grid
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
          </Grid>  */}
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
              <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
                {basket?.foods?.map((e: any, key: any) => (
                  <BasketFoods data={e} key={e._id} />
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
              <Typography fontWeight={"bold"}>
                {basket?.totalPrice?.toLocaleString()}₮
              </Typography>
            </Grid>
            <Button label="Захилах" onClick={toOrder}></Button>
          </Box>
        </Drawer>
      </React.Fragment>
    </Grid>
  );
}
