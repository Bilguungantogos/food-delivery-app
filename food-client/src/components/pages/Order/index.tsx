"use client";
import { Input } from "@/components";
import MySelect from "@/components/core/myselect";
import {
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Input as MuiInput } from "@mui/material";
import { Button } from "@/components";
import Orderfood from "./orderfood";
import { BasketContext } from "@/context/BasketProvider";

const districtOptions = [
  { name: "Баянзүрх", _id: "bzd" },
  { name: "Чингэлтэй", _id: "chin" },
  { name: "Хан-Уул", _id: "han" },
  { name: "Сүхбаатар", _id: "suh" },
  { name: "Багануур", _id: "baga" },
  { name: "Баянгол", _id: "bay" },
  { name: "Багахангай", _id: "bagahan" },
  { name: "Налайх", _id: "nalaih" },
];
const khoroo = [
  { name: "1", _id: "1" },
  { name: "2", _id: "2" },
  { name: "3", _id: "3" },
  { name: "4", _id: "4" },
  { name: "5", _id: "5" },
  { name: "6", _id: "6" },
  { name: "7", _id: "7" },
  { name: "8", _id: "8" },
  { name: "9", _id: "9" },
  { name: "10", _id: "10" },
  { name: "11", _id: "11" },
  { name: "12", _id: "12" },
  { name: "13", _id: "13" },
  { name: "14", _id: "14" },
  { name: "15", _id: "15" },
  { name: "16", _id: "16" },
  { name: "17", _id: "17" },
  { name: "18", _id: "18" },
  { name: "19", _id: "19" },
  { name: "20", _id: "20" },
];
const apartment = [
  { name: "1th", _id: "1" },
  { name: "2th", _id: "2" },
  { name: "3th", _id: "3" },
  { name: "4th", _id: "4" },
  { name: "5th", _id: "5" },
  { name: "6th", _id: "6" },
  { name: "7th", _id: "7" },
  { name: "8th", _id: "8" },
  { name: "9th", _id: "9" },
  { name: "10th", _id: "10" },
];
const OrderPage = () => {
  const { basket } = useContext(BasketContext);
  const [selectedValues, setSelectedValues] = useState({
    district: "",
    khoroo: "",
    apartment: "",
  });

  const handleSelectChange = (name: string, value: string) => {
    setSelectedValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Grid
      display={"flex"}
      justifyContent={"space-evenly"}
      marginY={25}
      marginBottom={50}
    >
      <Grid maxWidth={"432px"}>
        <Box p={16} display={"flex"} gap={4}>
          <img src="step1.svg" />
          <Grid>
            <Typography>Алхам 1</Typography>
            <Typography fontWeight={"bold"}>Хаягын мэдээлэл оруулах</Typography>
            <Typography>Хүлээгдэж байна</Typography>
          </Grid>
        </Box>
        <Box p={6} display={"flex"} flexDirection={"column"} gap={4}>
          <MySelect
            label="Дүүрэг сонгоно уу"
            options={districtOptions}
            selectedValue={selectedValues.district}
            setSelectedValue={(value) =>
              handleSelectChange(
                "district",
                typeof value === "string" ? value : ""
              )
            }
          />
          <MySelect
            label="Хороо сонгоно уу"
            options={khoroo}
            selectedValue={selectedValues.khoroo}
            setSelectedValue={(value) =>
              handleSelectChange(
                "khoroo",
                typeof value === "string" ? value : ""
              )
            }
          />
          <MySelect
            label="Байр гудамж сонгоно уу"
            options={apartment}
            selectedValue={selectedValues.apartment}
            setSelectedValue={(value) =>
              handleSelectChange(
                "apartment",
                typeof value === "string" ? value : ""
              )
            }
          />
          <MuiInput
            sx={{
              height: "140px",
              border: "1px solid black",
              boxSizing: "border-box",
            }}
            name="address-detail"
            type="text"
            placeholder="Орц давхар орцны код"
          ></MuiInput>
          <Input
            name="phone"
            label="Утасны дугаар*"
            placeholder="Утасны дугаараа оруулна уу"
          ></Input>
          <Typography>Төлбөр төлөх</Typography>
          <Grid display={"flex"} justifyContent={"space-between"} px={4}>
            <FormControlLabel control={<Checkbox />} label="Бэлнээр" />
            <FormControlLabel control={<Checkbox />} label="Картаар" />
          </Grid>
        </Box>
      </Grid>
      <Grid maxWidth={"432px"}>
        <Box p={16} display={"flex"} gap={4}>
          <img src="step1.svg" />
          <Grid>
            <Typography>Алхам 2</Typography>
            <Typography fontWeight={"bold"}>Захиалга баталгаажуулах</Typography>
            <Typography>Хүлээгдэж байна</Typography>
          </Grid>
        </Box>
        <Box
          p={6}
          display={"flex"}
          flexDirection={"column"}
          justifyContent="space-between"
          height="600px"
          gap={4}
        >
          {basket?.foods?.map((e: any, key: any) => {
            return <Orderfood data={e} key={e._id} />;
          })}
          <Grid>
            <Divider />
            <Box
              display={"flex"}
              width={"100%"}
              justifyContent={"space-between"}
              alignItems={"center"}
              marginTop={6}
            >
              <Grid>
                <Typography>Нийт төлөх дүн</Typography>
                <Typography fontWeight={"bold"}>
                  {basket?.totalPrice?.toLocaleString()}₮
                </Typography>
              </Grid>
              <Button label="Захилах"></Button>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default OrderPage;
