import  {useState} from "react";
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
import SendIcon from "@mui/icons-material/Send"
import "./Style/Detail.css";
import Tablemenu from "../layout/Tablemenu";

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

  const [getimage,setimage] = useState('');
  function handleimage(e:any) {
    console.log(e.target.file)
    setimage(e.target.files[0])
  }

  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Box sx={{ bgcolor: "#cfe8fc", height: "1050px", margin: 5 }}>
            <Appbar />
            <Box
              sx={{
                m: 2,
                width: "162vh",
                height: "400px",
                display: "flex",
                backgroundColor: "whitesmoke",
                boxShadow: "inherit",
              }}
            >
              <Box>
                <Box sx={{ m: 5, display: "flex", gap: "20px" }}>
                  <TextField id="Name" label="name" sx={{ width: "400px" }} />

                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={Category}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Category" />
                    )}
                  />
                </Box>
                <Box sx={{ m: 5, display: "flex", gap: "20px" }}>
                  <TextField
                    id="Desc"
                    label="Description"
                    multiline
                    rows={5}
                    sx={{ width: "720px" }}
                  />
                </Box>
                <Box sx={{ m: 5, display: "flex", gap: "20px" }}>
                  <TextField
                    id="EXP"
                    label="Experiance"
                    sx={{ width: "720px" }}
                  />
                </Box>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column"}}>
                <Box
                  sx={{
                    bgcolor: "#004788",
                    width: "210px",
                    height: "245px",
                    mt: 5,
                    mr: 5,
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
                    image="/src/assets/money.jpg"
                  />
                  <Button
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                    href="#file-upload"
                    onChange={handleimage}
                  >
                    Upload a file
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </Box>
                
                <Button variant="contained" sx={{width: "170px",ml: 3,height: "55px", display: "flex",mt: 5}} endIcon={<SendIcon />}>
                  Update
                </Button>

              </Box>
            </Box>

            <Tablemenu />
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
}

const Category = [{ label: "Fashion" }, { label: "Food" }, { label: "Drink" }];
