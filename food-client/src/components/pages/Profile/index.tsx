"use client";

import DeliveryOp from "@/components/DeliveryOp";
import { Box, Button, Grid, Typography, capitalize } from "@mui/material";
import React, { useContext } from "react";
import FoodList from "../../FoodList";
import { FoodContext } from "@/context/FoodProvider";
import { UserContext } from "@/context/UserProvider";
import { MdModeEdit } from "react-icons/md";
import { relative } from "path";

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  const fontStyle = { fontSize: "18px" };
  return (
    <Box
      height={"60vh"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mx={"auto"}
      maxWidth={"432px"}
      my={"100px"}
    >
      <Grid width={"120px"} height={"120px"} position={"relative"}>
        <img
          src={user.avatarUrl}
          width={"100%"}
          height={"100%"}
          style={{ objectFit: "cover", borderRadius: "100%" }}
        />
        <MdModeEdit
          style={{
            color: "#18BA51",
            width: 30,
            height: 30,
            position: "absolute",
            bottom: 2,
            right: 3,
            backgroundColor: "white",
            borderRadius: "100%",
            border: "1px solid gray",
            padding: 3,
          }}
        />
      </Grid>
      <Typography
        fontSize={"34px"}
        fontWeight={"bold"}
        my={"20px"}
        textTransform={"capitalize"}
      >
        {user.name}
      </Typography>
      <Box display={"flex"} flexDirection={"column"} gap={6} width={"100%"}>
        <Grid
          display={"flex"}
          alignItems={"center"}
          width={"100%"}
          justifyContent={"space-between"}
          sx={{ backgroundColor: "#EEEFF2" }}
          py={2}
          px={6}
          borderRadius={4}
        >
          <Grid display={"flex"} alignItems={"center"} gap={6}>
            <img
              src="/profile1.svg"
              style={{
                backgroundColor: "white",
                width: 40,
                height: 40,

                borderRadius: "100%",
              }}
            />
            <Grid>
              <Typography color={"#888A99"}>Таны нэр</Typography>
              <Typography sx={fontStyle} textTransform={"capitalize"}>
                {user.name}
              </Typography>
            </Grid>
          </Grid>
          <MdModeEdit style={{ color: "#18BA51", width: 20, height: 20 }} />
        </Grid>
        <Grid
          display={"flex"}
          alignItems={"center"}
          width={"100%"}
          justifyContent={"space-between"}
          sx={{ backgroundColor: "#EEEFF2" }}
          py={2}
          px={6}
          borderRadius={4}
        >
          <Grid display={"flex"} alignItems={"center"} gap={6}>
            <img
              src="/phone.svg"
              style={{
                backgroundColor: "white",
                width: 40,
                height: 40,
                borderRadius: "100%",
              }}
            />
            <Grid>
              <Typography color={"#888A99"}>Утасны дугаар</Typography>
              <Typography sx={fontStyle}>99111111</Typography>
            </Grid>
          </Grid>
          <MdModeEdit style={{ color: "#18BA51", width: 20, height: 20 }} />
        </Grid>
        <Grid
          display={"flex"}
          alignItems={"center"}
          width={"100%"}
          justifyContent={"space-between"}
          sx={{ backgroundColor: "#EEEFF2" }}
          py={2}
          px={6}
          borderRadius={4}
        >
          <Grid display={"flex"} alignItems={"center"} gap={6}>
            <img
              src="/email.svg"
              style={{
                backgroundColor: "white",
                width: 40,
                height: 40,
                borderRadius: "100%",
              }}
            />
            <Grid>
              <Typography color={"#888A99"}>Имэйл хаяг</Typography>
              <Typography sx={fontStyle}>{user.email}</Typography>
            </Grid>
          </Grid>
          <MdModeEdit style={{ color: "#18BA51", width: 20, height: 20 }} />
        </Grid>
        <Grid
          display={"flex"}
          alignItems={"center"}
          width={"100%"}
          justifyContent={"space-between"}
          py={2}
          px={6}
          borderRadius={4}
        >
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "black",
            }}
          >
            <img
              src="/orderhistory.svg"
              style={{
                backgroundColor: "white",
                width: 40,
                height: 40,
                borderRadius: "100%",
              }}
            />
            <Typography>Захиалгын түүх</Typography>
          </Button>
        </Grid>
        <Grid
          display={"flex"}
          alignItems={"center"}
          width={"100%"}
          justifyContent={"space-between"}
          py={2}
          px={6}
          borderRadius={4}
        >
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "black",
            }}
            onClick={() => {}}
          >
            <img
              src="/logout.svg"
              style={{
                backgroundColor: "white",
                width: 40,
                height: 40,
                borderRadius: "100%",
              }}
            />
            <Typography>Гарах</Typography>
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProfilePage;
