import { useState } from "react";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Appbar from "../layout/Appbar";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CardMedia from "@mui/material/CardMedia";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import "./Style/Detail.css";
import Tablemenu from "../layout/Tablemenu";
import SideBar from "../layout/Sidebar";

export default function Details() {
  const VisuallyHiddenInput = styled("input")`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    white-space: nowrap;
    width: 1px;
  `;

  const [imageSrc, setImageSrc] = useState("");
  function handleimage(e: any) {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageSrc(imageURL);
    }
  }
  const navigate = useNavigate();

  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container>
          <SideBar />
          <Box sx={{ bgcolor: "#cfe8fc", margin: 5, boxShadow: 8 }}>
            <Appbar />
            <Box
              sx={{
                m: 2,
                display: "flex",
                backgroundColor: "whitesmoke",
                boxShadow: "inherit",
              }}
            >
              <Box>
              <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
              <Box>
                <Box
                  sx={{
                    m: 5,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                  }}
                >
                  <TextField
                    id="Name"
                    label="name"
                    sx={{ width: "46%" }}
                  />

                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={Category}
                    sx={{ width: "50%" }}
                    renderInput={(params) => (
                      <TextField {...params} label="Category" />
                    )}
                  />
                </Box>
                <Box
                  sx={{
                    m: 5,
                    display: "flex",
                    gap: "20px",
                  }}
                >
                  <TextField
                    id="Desc"
                    label="Description"
                    multiline
                    rows={5}
                    sx={{ width: "100%" }}
                  />
                </Box>
                <Box
                  sx={{
                    m: 5,
                    display: "flex",
                    gap: "20px",
                  }}
                >
                  <TextField
                    id="expreq"
                    label="Level Require"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    id="prc"
                    label="Price"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    id="prcm"
                    label="Price Multiplier"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
              </Box>
            </Grid>

            {/* Right Section */}
            <Grid item xs={8} sm={3}>
              <Box
                sx={{
                  bgcolor: "#004788",
                  width: "100%",
                  minHeight: "245px",
                  m: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  color: "white",
                  p: "2px",
                  borderRadius: "5px",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: "150px", height: "150px", m: 2 }}
                  image={imageSrc || '/src/assets/money.jpg'} 
                />
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                >
                  Upload Image
                  <VisuallyHiddenInput
                    type="file"
                    onChange={handleimage}
                  />
                </Button>
              </Box>

              <Button
                variant="contained"
                sx={{ width: "100%", mx: 5 , mb: 2}}
                endIcon={<SendIcon />}
              >
                Update
              </Button>
            </Grid>
          </Grid>
              </Box>
              </Box>

            <Box
              sx={{
                justifyContent: "flex-end",
                m: 4,
                mt: 5,
                mb: -3,
                display: "flex",
                gap: "20px",
              }}
            >
              <Fab
                className="edit"
                color="success"
                sx={{ width: 50, height: 50 }}
                onClick={() => {
                  navigate("/Addmenu");
                }}
                aria-label="edit"
              >
                <AddIcon />
              </Fab>
            </Box>

            <Tablemenu />
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
}

const Category = [{ label: "Fashion" }, { label: "Food" }, { label: "Drink" }];