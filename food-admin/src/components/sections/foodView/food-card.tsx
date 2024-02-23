import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { fCurrency } from "@/utils/format-number";

import Label from "@/components/label";
import axios from "axios";
import { useState } from "react";
import { Button, Grid, Menu, MenuItem } from "@mui/material";

// ----------------------------------------------------------------------

export default function FoodCard({ food }: any) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const deleteFood = async () => {
    try {
      const data = await axios.delete(
        `http://localhost:8080/foods/${food._id}`,
        config
      );
      console.log(data);
    } catch (error: any) {
      alert("Get Error - " + error.message);
    }
  };
  const renderImg = (
    <Box
      component="img"
      alt={food?.name}
      src={food?.image}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: "cover",
        position: "absolute",
      }}
    />
  );
  return (
    <Card
      sx={{
        ":hover": {
          cursor: "pointer",
        },
      }}
    >
      <Box sx={{ pt: "100%", position: "relative" }}> {renderImg}</Box>
      <Grid position={"absolute"} right={0}>
        <Button
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Засах
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleClose}>Хадгалах</MenuItem>
          <MenuItem onClick={handleClose}>Өөрчлөх</MenuItem>
          <MenuItem
            onClick={() => {
              console.log(food);
              deleteFood();
              handleClose();
            }}
          >
            Устгах
          </MenuItem>
        </Menu>
      </Grid>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
          {food?.name}
        </Link>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {food?.price}
        </Stack>
      </Stack>
    </Card>
  );
}
