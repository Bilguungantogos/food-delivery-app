import { Grid, Typography } from "@mui/material";
import React from "react";

interface IdeliveryOpportunitiesType {
  svgurl: string;
  title: string;
  desc: string;
}

const DeliveryOp = ({ svgurl, title, desc }: IdeliveryOpportunitiesType) => {
  return (
    <Grid
      padding={"16px"}
      maxWidth={"265px"}
      border={"1px solid #D6D8DB"}
      borderRadius={"15px"}
    >
      <Grid padding={"15px"}>
        <img src={svgurl} width={"30px"} height={"30px"} />
      </Grid>
      <Typography
        variant="h5"
        fontSize={"18px"}
        fontStyle={"normal"}
        fontWeight={"700"}
        marginTop={"15px"}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        fontSize={"14px"}
        fontStyle={"normal"}
        fontWeight={"400"}
      >
        {desc}
      </Typography>
    </Grid>
  );
};

export default DeliveryOp;
