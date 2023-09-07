import  {useState} from "react";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBack from "@mui/icons-material/ArrowBackIos";
import Appbarm from "../layout/Appbarm";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid"
import SendIcon from "@mui/icons-material/Send"
import "./Style/Detail.css";
import SideBar from "../layout/Sidebar";

export default function Addm() {
    

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

  const [imageSrc, setImageSrc] = useState('');
  function handleimage(e:any) {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageSrc(imageURL);
    }
  }

  const navigate = useNavigate()

  return (
    <>
    <React.Fragment>
      <SideBar/>
      <CssBaseline />
      <Container fixed>
          
        <Box sx={{ bgcolor: "#cfe8fc", mx: 5 ,pb:3}}>
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static">
              <Toolbar variant="dense">
              <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={()=>{navigate("/Details/:id")}}
                  >
                    <ArrowBack />
                  </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                  <strong>Add Menu</strong>
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
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
                sx={{ width: "100%", mx: 5 }}
                endIcon={<SendIcon />}
              >
                Update
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  </>
  );
}

const Category = [{ label: "Fashion" }, { label: "Food" }, { label: "Drink" }];
