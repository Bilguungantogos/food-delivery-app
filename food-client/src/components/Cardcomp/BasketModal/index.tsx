import * as React from "react";
import Box from "@mui/material/Box";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Button } from "@/components";
import { Input, Button as MuiButton } from "@mui/material";

import { Grid, Typography, Modal, Fade } from "@mui/material";
import { MdOutlineCancel } from "react-icons/md";

interface BasketModalProps {
  handleClose: () => void;
  open: boolean;
}

export default function BasketModal({ open, handleClose }: BasketModalProps) {
  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "981px",
    bgcolor: "#FFF",
    border: "1px solid #DADCE0",
    boxShadow: "0px 0px 9px 0px",
    padding: "32px",
    borderRadius: "15px",
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={modalStyle}>
          <Grid padding={"32px"} display={"flex"} gap={"33px"}>
            <img
              src="dishpic.jpg"
              width={"500px"}
              height={"500px"}
              style={{ objectFit: "cover" }}
            />

            <Grid width={"384px"}>
              <MdOutlineCancel style={{ width: "24px", height: "24px" }} />
              <Grid display={"flex"} flexDirection={"column"} gap={"32px"}>
                <Grid>
                  <Typography
                    variant="h5"
                    fontSize={28}
                    fontStyle={"normal"}
                    fontWeight={700}
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
                <Grid>
                  <Typography
                    fontSize={"18px"}
                    fontWeight={"600"}
                    marginBottom={"12px"}
                  >
                    Орц
                  </Typography>
                  <Box
                    sx={{
                      color: "#767676",
                      fontFamily: "SF Pro",
                      fontSize: "16px",
                      fontWeight: "400",
                      padding: "8px",
                      backgroundColor: "#F6F6F6",
                    }}
                  >
                    Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
                  </Box>
                </Grid>
                <Typography fontSize={"18px"} fontWeight={"600"}>
                  Тоо
                </Typography>
                <Grid
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <MuiButton>
                    <FaMinus
                      style={{
                        backgroundColor: "#18BA51",
                        padding: "30px",
                        borderRadius: "20px",
                        color: "white",
                      }}
                    />
                  </MuiButton>
                  <Typography fontSize={"16px"}>1</Typography>
                  <MuiButton>
                    <FaPlus
                      style={{
                        backgroundColor: "#18BA51",
                        padding: "30px",
                        borderRadius: "20px",
                        color: "white",
                      }}
                    />
                  </MuiButton>
                </Grid>
                <Button label="Сагслах"></Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
}
