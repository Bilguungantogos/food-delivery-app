import * as React from "react";
import {
  Box,
  Button as MuiButton,
  Typography,
  Modal,
  Grid,
  Switch,
} from "@mui/material";
import { Remove, Add, Close, Fullscreen } from "@mui/icons-material";
import { Input } from "@/components/core/input";
import InputFileUpload from "@/components/core/inputfileupload";

import MySelect from "@/components/core/myselect";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 5,
  boxShadow: 22,
  p: 4,
};

interface IModalProps {
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
}

export const AddFood = ({
  handleClose,
  open,
  newFood,
  handleChange,
  handleFileChange,
  handleSave,
  selectedValue,
  setSelectedValue,
}: any) => {
  const [categories, setCategories] = React.useState<
    { _id: string; name: string }[]
  >([]);
  const getCategoryName = async () => {
    try {
      const {
        data: { categories },
      } = (await axios.get("http://localhost:8080/category")) as {
        data: { categories: [] };
      };
      setCategories(categories);
      console.log(categories);
    } catch (error: any) {
      alert("Get Error - " + error.message);
    }
  };

  React.useEffect(() => {
    getCategoryName();
  }, []);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Grid>
            <Grid display={"flex"} alignItems={"center"} width={"100%"}>
              <MuiButton onClick={handleClose} sx={{ color: "black" }}>
                <Close />
              </MuiButton>
              <Typography width={"100%"} textAlign={"center"} variant="h4">
                Create food - {selectedValue}
              </Typography>
            </Grid>
            <Grid>
              <Input
                name="name"
                label="Хоолны нэр"
                desc="Placeholder"
                onChange={handleChange}
              ></Input>

              <Grid>
                <MySelect
                  label="Choose a category"
                  options={categories}
                  selectedValue={selectedValue}
                  setSelectedValue={setSelectedValue}
                />
              </Grid>
              <Input
                name="description"
                label="Хоолны орц"
                desc="Placeholder"
                onChange={handleChange}
              ></Input>
              <Input
                name="price"
                label="Хоолны үнэ"
                desc="Placeholder"
                onChange={handleChange}
              ></Input>
              <Grid>
                <Typography>Хоолны зураг</Typography>
                <Grid
                  textAlign={"center"}
                  width={"400px"}
                  p={"40px"}
                  sx={{ backgroundColor: "#D3D3D3" }}
                >
                  <Typography mb={"10px"}>Add image for the food</Typography>
                  <InputFileUpload handleFileChange={handleFileChange} />
                </Grid>
              </Grid>
              <Grid>
                <Grid display={"flex"} alignItems={"center"}>
                  <Switch />
                  <Typography>Хямдралтай эсэх</Typography>
                </Grid>
                <Input name="foodname" label="" desc="Placeholder"></Input>
              </Grid>
            </Grid>
          </Grid>
          <Grid display={"flex"} justifyContent={"flex-end"} gap={"10px"}>
            <MuiButton>Clear</MuiButton>
            <MuiButton variant="contained" onClick={handleSave}>
              Continue
            </MuiButton>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};
