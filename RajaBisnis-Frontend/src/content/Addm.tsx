import  {useState, useRef} from "react";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { CONFIG } from "../Api";
import Appbarm from "../layout/Appbarm";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid"
import SendIcon from "@mui/icons-material/Send"
import "./Style/Detail.css";
import SideBar from "../layout/Sidebar";
import axios from "axios";

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
  const params = useParams();
  const prevInputRef = useRef('');  

  const [imageSrc, setImageSrc] = useState('');
  function handleimage(e:any) {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageSrc(imageURL);
    }
  }
  const [name, setName] = useState(``)
  const [desc, setdesc] = useState(``)
  const [strprice, setStrprc] = useState(``)
  const [price, setprc] = useState<number>()
  let numbering = parseInt(strprice)
  
  
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  function senddata(event:any)
  {
    
    console.log(name)
    console.log(desc)
    console.log(numbering)
    console.log(params.shopId)
    event.preventDefault()
    axios.post(`${URL}/menu/${params.shopId}`, {
      "name":name,
      "description":desc,
      "price":numbering,
    })
    .then((response) => {
      console.log(response)
      navigate(`/Details/${response.data.id}`, { replace: true })
    })
    .catch(err => console.log(err))
    
  }
  
  

  const navigate = useNavigate()

  return (
    <>
    <React.Fragment>
      <SideBar/>
      <CssBaseline />
      <Container fixed>
          
      <Box sx={{ bgcolor: "#cfe8fc", mx: 5 ,pb:3}}>
            <form onSubmit={senddata}>
          <Box sx={{ flexGrow: 1 }}>
              <Appbarm />
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
                      id="name"
                      required
                      name="name"
                      label="name"
                      onChange={(e) => setName(e.target.value)}
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
                      id="desc"
                      required
                      name="desc"
                      label="Description"
                      onChange={(e) => setdesc(e.target.value)}
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
                      required
                      
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        
                        if (/^\d*$/.test(inputValue) ) {
                          setStrprc(inputValue);
                        }else{
                          alert("The price need to be number!");
                          e.target.value = prevInputRef.current;
                        }
                        prevInputRef.current = e.target.value;
                        console.log(numbering)
                      }}
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
                  type="submit"
                >
                  Add
                </Button>
              </Grid>
            </Grid>
            </form>
          </Box>
      </Container>
    </React.Fragment>
  </>
  );
}

const Category = [{ label: "Fashion" }, { label: "Food" }, { label: "Drink" }];
