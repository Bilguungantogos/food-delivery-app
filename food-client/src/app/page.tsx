"use client";
import Cardcomp from "@/components/Cardcomp";
import DeliveryOp from "@/components/DeliveryOp";
import { Grid } from "@mui/material";
import Basket from "@/components/Basket";

export default function Home() {
  const deliveryOpportunities = [
    {
      svgurl: "jornal.svg",
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
      svgurl: "jornal.svg",
      title: "Хоолны өргөн сонголт",
      desc: "Захиалга бэлтгэлийн явцыг хянах",
    },
  ];
  return (
    <Grid
      height={"80vh"}
      padding={"120px"}
      display={"flex"}
      justifyContent={"space-between"}
    >
      <Cardcomp />
      <Cardcomp />
      <Cardcomp />
      <Cardcomp />
      {/* <DeliveryOp /> */}
    </Grid>
  );
}
