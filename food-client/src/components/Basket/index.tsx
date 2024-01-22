import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { FaMinus, FaPlus } from "react-icons/fa";

import { Grid, Typography } from "@mui/material";
import { MdOutlineCancel } from "react-icons/md";

type Anchor = "top" | "left" | "bottom" | "right";

export default function Basket() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: "right", open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === "keydown") {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: "right") => (
    <Box
      sx={{ width: "586px" }}
      role="presentation"
      onClick={toggleDrawer("right", false)}
      onKeyDown={toggleDrawer("right", false)}
    >
      <Grid
        padding={"26px 24px 49px 24px"}
        display={"flex"}
        justifyItems={"center"}
        alignItems={"center"}
        gap={"171px"}
      >
        <Grid
          height={"48px"}
          width={"48px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <img src="leftarrow.svg"></img>
        </Grid>
        <Typography
          fontSize={20}
          fontStyle={"normal"}
          fontWeight={900}
          textAlign={"center"}
        >
          Таны сагс
        </Typography>
      </Grid>
      <Divider />
      <List sx={{ padding: "24px 24px 0 24px" }}>
        <ListItem disablePadding sx={{ flexGrow: 1 }}>
          <Grid container padding={"16px"} spacing={"16px"}>
            <Grid item xs={6}>
              <img src="dishpic.jpg" width={"245px"} height={"150px"} />
            </Grid>
            <Grid item xs={6}>
              <Grid
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Grid>
                  <Typography
                    variant="h5"
                    fontSize={18}
                    fontStyle={"normal"}
                    fontWeight={600}
                  >
                    Main Pizza
                  </Typography>
                  <Typography
                    variant="h5"
                    fontSize={18}
                    fontStyle={"normal"}
                    fontWeight={600}
                    color={"#18BA51"}
                  >
                    34,800₮
                  </Typography>
                </Grid>
                <Button sx={{ height: "48px", width: "48px" }}>
                  <MdOutlineCancel height={"48px"} width={"48px"} />
                </Button>
              </Grid>
              <Grid>
                <Typography variant="subtitle1">
                  Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
                </Typography>
                <Grid display={"flex"} gap={"5px"} alignItems={"center"}>
                  <Button>
                    <FaMinus
                      style={{
                        backgroundColor: "#18BA51",
                        padding: "30px",
                        borderRadius: "20px",
                        color: "white",
                      }}
                    />
                  </Button>
                  <Typography variant="h4" fontSize={"16px"}>
                    1
                  </Typography>
                  <Button>
                    <FaPlus
                      style={{
                        backgroundColor: "#18BA51",
                        padding: "30px",
                        borderRadius: "20px",
                        color: "white",
                      }}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Grid>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button variant="text" onClick={toggleDrawer(anchor, true)}>
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
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Grid>
  );
}
