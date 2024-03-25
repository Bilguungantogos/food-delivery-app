import myAxios from "@/utils/axios";
import {
  Button,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

interface IData {
  [key: string]: any;
}

const Orderfood: React.FC<IData> = ({ data }) => {
  const [basketFood, setBasketFood] = useState<any>({});

  const getFoodinfo = async () => {
    try {
      const getFoodData = await myAxios.get(`/foods/${data.food}`);
      setBasketFood(getFoodData.data.findFood);
      console.log("dawdawdawdawaddaw", getFoodData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFoodinfo();
  }, []);
  return (
    <CardActionArea sx={{ width: "full" }}>
      <CardMedia
        sx={{ p: 0, height: 186, objectFit: "cover" }}
        image={basketFood?.image}
      />
      <CardContent
        sx={{
          pt: 1,
        }}
      >
        <Typography fontSize={18} fontWeight={600}>
          {basketFood?.name}
        </Typography>

        <Typography color="#18BA51" fontSize={18} fontWeight={600}>
          {basketFood?.price}
        </Typography>
      </CardContent>
    </CardActionArea>
  );
};

export default Orderfood;
