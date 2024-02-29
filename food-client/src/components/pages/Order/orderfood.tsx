import {
  Button,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

interface IData {
  [key: string]: any;
}

const Orderfood: React.FC<IData> = ({ data }) => {
  return (
    <CardActionArea sx={{ width: "full" }}>
      <CardMedia
        sx={{ p: 0, height: 186, objectFit: "cover" }}
        image={"/dishpic.jpg"}
      />
      <CardContent
        sx={{
          pt: 1,
        }}
      >
        <Typography fontSize={18} fontWeight={600}>
          {data?.food?.name}
        </Typography>

        <Typography color="#18BA51" fontSize={18} fontWeight={600}>
          {data?.food?.price}
        </Typography>
      </CardContent>
    </CardActionArea>
  );
};

export default Orderfood;
