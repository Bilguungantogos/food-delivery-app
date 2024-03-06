"use client";

import DeliveryOp from "@/components/DeliveryOp";
import { Box, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import FoodList from "../../FoodList";
import { FoodContext } from "@/context/FoodProvider";

const Homepage = () => {
  return (
    <Grid height={"full"}>
      <Box
        sx={{
          backgroundColor: "#18BA51",
          backgroundImage: `url("backgroundfoodimg.svg")`,
        }}
        width={"100%"}
        height={"788px"}
        color={"#FFF"}
        padding={"100px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"150px"}
        fontStyle={"poppins"}
      >
        <Grid
          maxWidth={"360px"}
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
        >
          <Typography fontSize={"55px"}>Pinecone Food delivery</Typography>
          <Grid width={"100%"} border={"1px solid white"}></Grid>
          <Typography fontSize={"22px"}>
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Grid>
        <Grid maxHeight={"438px"} maxWidth={"588px"}>
          <img src="/homepagepic.svg" width={"full"} height={"full"} />
        </Grid>
      </Box>
      <Grid
        display={"flex"}
        justifyContent={"center"}
        gap={"40px"}
        marginY={"100px"}
      >
        {deliveryOpportunities.map((el, i) => {
          return (
            <DeliveryOp
              svgurl={el.svgurl}
              title={el.title}
              desc={el.desc}
              key={i}
            />
          );
        })}
      </Grid>
      <Grid>
        <FoodList />
      </Grid>
    </Grid>
  );
};

export default Homepage;

const deliveryOpportunities = [
  {
    svgurl: "journal.svg",
    title: "Хүргэлтийн төлөв хянах",
    desc: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    svgurl: "clock.svg",
    title: "Шуурхай хүргэлт",
    desc: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    svgurl: "healthy.svg",
    title: "Эрүүл, баталгаат орц",
    desc: " Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    svgurl: "journal.svg",
    title: "Хоолны өргөн сонголт",
    desc: "Захиалга бэлтгэлийн явцыг хянах",
  },
];
