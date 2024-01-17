"use client";
import React from "react";

import InputBase from "@mui/material/InputBase";
import { styled, withTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { Grid, Stack, Typography, Link } from "@mui/material";

const Header = () => {
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em)`,
    },
  }));

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
    >
      <Grid item display={"flex"} gap={"24px"} alignItems={"center"}>
        <Grid padding={"7.178px 4.865px 7.055px 4.867px"}>
          <img src="./Logo.svg" width={"41px"} height={"41px"} />
        </Grid>
        <Stack
          direction="row"
          display="flex"
          gap={"8"}
          alignItems={"center"}
          fontSize="14px"
          fontStyle="normal"
          fontWeight={700}
          lineHeight="20px"
        >
          <Link href={"./"} padding={"8px 16px 8px 16px"} color={"#18ba51"}>
            НҮҮР
          </Link>
          <Link
            href={"./"}
            padding={"8px 16px 8px 16px"}
            sx={{ color: "black" }}
          >
            ХООЛНЫ ЦЭС
          </Link>
          <Link
            href={"./"}
            padding={"8px 16px 8px 16px"}
            sx={{ color: "black" }}
          >
            ХҮРГЭЛТИЙН БҮС
          </Link>
        </Stack>
      </Grid>
      <Grid
        item
        display="flex"
        gap={"8px"}
        alignItems={"center"}
        fontSize="14px"
        fontStyle="normal"
        fontWeight={700}
        lineHeight="20px"
      >
        <Grid
          display={"flex"}
          alignItems={"center"}
          border={"1px solid black"}
          borderRadius={"10px"}
          width={"260px"}
          height={"40px"}
          padding={"8px 16px 8px 16px"}
        >
          <SearchIcon />
          <StyledInputBase
            placeholder="Хайх"
            inputProps={{ "aria-label": "search" }}
          />
        </Grid>
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
        <Grid display="flex" gap={"10px"} padding={"8px 16px 8px 16px"}>
          <img src="profile.svg" />
          <Typography
            variant="h4"
            fontSize="14px"
            fontStyle="normal"
            fontWeight={700}
            lineHeight="20px"
            alignItems={"center"}
          >
            Нэвтрэх
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
