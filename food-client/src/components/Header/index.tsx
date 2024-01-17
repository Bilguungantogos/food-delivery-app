"use client";
import React from "react";
import "./headerstyle.css";
import InputBase from "@mui/material/InputBase";
import { styled, withTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { colors } from "@mui/material";

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
    <div className="container">
      <div className="first-div">
        <img src="./Logo.svg" className="logo" />
        <div className="menus">
          <h4 className=" items-padding hovered-menu-itemcolor">НҮҮР</h4>
          <h4 className=" items-padding">ХООЛНЫ ЦЭС</h4>
          <h4 className=" items-padding">ХҮРГЭЛТИЙН БҮС</h4>
        </div>
      </div>
      <div className="with-search-second-div">
        <div className="search-div  items-padding">
          <SearchIcon />
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </div>

        <div className="header-with-svg-el items-padding">
          <img src="basket.svg" />
          <h4>Сагс</h4>
        </div>
        <div className="header-with-svg-el items-padding">
          <img src="profile.svg" />
          <h4>Сагс</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
