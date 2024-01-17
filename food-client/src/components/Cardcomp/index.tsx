import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";

const Cardcomp = () => {
  return (
    <Grid sx={{ maxWidth: "282px", border: "none", position: "relative" }}>
      <CardMedia component="img" image="unsplash_fdlZBWIP0aM.png" alt="" />
      <Grid
        position={"absolute"}
        top={"16px"}
        right={"16px"}
        color={"white"}
        sx={{ backgroundColor: "#18BA51" }}
        border={"1px solid white"}
        borderRadius={"20px"}
        padding={"4px 16px 4px 16px"}
        fontSize={"18px"}
        fontWeight={"600"}
      >
        20%
      </Grid>
      <Grid marginTop={"14px"}>
        <Typography
          gutterBottom
          variant="h5"
          fontSize={"20px"}
          fontWeight={590}
        >
          Өглөөний хоол
        </Typography>
        <Grid display={"flex"} gap={"16px"}>
          <Typography variant="h5" color={"#18BA51"}>
            4800₮
          </Typography>
          <Typography
            variant="h5"
            sx={{ textDecoration: "line-through", color: "#171717" }}
          >
            6800₮
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cardcomp;
