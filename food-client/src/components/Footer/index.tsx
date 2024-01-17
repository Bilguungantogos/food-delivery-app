"use client";

import React from "react";
import { Box, Grid, Typography, Link, Stack } from "@mui/material";
import Image from "next/image";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";

const Footer = () => {
  return (
    <Grid
      sx={{
        backgroundColor: "#18BA51",
        backgroundImage: `url("backgroundfoodimg.svg")`,
      }}
      width={"100%"}
      height={"545px"}
      color={"#FFF"}
    >
      <Grid
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        padding={"114px 120px 109px 120px"}
        gap={"40px"}
        width={"100%"}
      >
        <Box display={"flex"} alignItems={"center"} gap={"8px"}>
          <img src="logowhite.svg" width={"41px"} height={"41px"} />
          <Typography
            variant="h4"
            width={"163px"}
            fontSize="20px"
            fontStyle="normal"
            fontWeight={700}
            lineHeight="normal"
            color={"#FFF"}
          >
            Food Delivery
          </Typography>
        </Box>
        <Stack
          display="flex"
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          fontSize="14px"
          fontStyle="normal"
          fontWeight={700}
          lineHeight="20px"
          width={"100%"}
        >
          <Link href={"./"}>Нүүр</Link>

          <Link href={"./"} sx={{ color: "white" }}>
            Холбоо барих
          </Link>
          <Link href={"./"} sx={{ color: "white" }}>
            Хоолны цэс
          </Link>
          <Link href={"./"} sx={{ color: "white" }}>
            Үйлчилгээний нөхцөл
          </Link>
          <Link href={"./"} sx={{ color: "white" }}>
            Хүргэлтийн бүс
          </Link>
          <Link href={"./"} sx={{ color: "white" }}>
            Нууцлалын бодлого
          </Link>
        </Stack>
        <Box display={"flex"} gap={"18px"}>
          <IoLogoFacebook style={{ height: "40px", width: "40px" }} />
          <IoLogoInstagram style={{ height: "40px", width: "40px" }} />
          <IoLogoTwitter style={{ height: "40px", width: "40px" }} />
        </Box>
        <Box
          width={"100%"}
          height={"1px"}
          sx={{ backgroundColor: "white" }}
        ></Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" marginBottom={"5px"}>
            © 2024 Pinecone Foods LLC{" "}
          </Typography>
          <Typography variant="body2">
            Зохиогчийн эрх хуулиар хамгаалагдсан.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
