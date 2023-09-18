import { useState, useEffect } from "react";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Appbarm from "../layout/Appbarm";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CardMedia from "@mui/material/CardMedia";
import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Grid";
import { URL } from "../Api";
import "./Style/Detail.css";
import { GetShop, Getmenudetail } from "../Api";
import Tablemenu from "../layout/Tablemenu";
import { useParams } from "react-router-dom";

export default function Detailm() {
  const [menu, setMenu] = useState<any>([]);
  const params = useParams<any>();

  useEffect(() => {
    if (params.shopId && params.id) {
      let hit = Getmenudetail(params.shopId, params.id);

      hit
        .then((data) => {
          console.log(data);
          setMenu(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [params.shopId, params.id]);

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
    }
  }

  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Box sx={{ bgcolor: "#cfe8fc", margin: 5, pb: 3 }}>
            <Appbarm />
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
                      multiline
                      sx={{ width: "46%" }}
                      value={menu.name}
                      onChange={(e) => setMenu({ name: e.target.value })}
                      InputLabelProps={{
                        shrink: true,
                      }}
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
                      defaultValue={menu.description}
                      InputLabelProps={{
                        shrink: true,
                      }}
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
                      id="prcreq"
                      label="price Require"
                      value={menu.price_unlock}
                      onChange={(e) => setMenu({ price_unlock: e.target.value })}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      id="prc"
                      label="Price"
                      value={menu.price}
                      onChange={(e) => setMenu({ price: e.target.value })}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      id="prcm"
                      label="Price Multiplier"
                      value={menu.price_multiplier}
                      onChange={(e) => setMenu({ price_multiplier: e.target.value })}
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
                    sx={{ width: "200px", height: "150px", m: 2 , objectFit:"cover"}}
                    image={imageSrc || `${URL}/gamedata/image/${menu.menu_display}`}
                  />
                  <Button
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload Image
                    <VisuallyHiddenInput type="file" onChange={handleimage} />
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
