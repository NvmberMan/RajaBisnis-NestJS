import { useState, useEffect } from "react";
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
import { Route, Link, Routes, useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import "./Style/Detail.css";
import Tablemenu from "../layout/Tablemenu";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SideBar from "../layout/Sidebar";
import { GetShopId, Getmenuid, URL } from "../Api";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DelIcon from "@mui/icons-material/DeleteForever";
import AlertDelete from "../layout/AlertDelete";
import axios from "axios";

export default function Details() {
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const [detailShop, setDetailshop] = useState<any>({
    name: "",
    description: "",
    price: 0,
  });

  const [shopmenu, setshopmenu] = useState<any[]>([]);

  const handleClick = (event: { currentTarget: { id: any; }; }) => {
    const idpages = (event.currentTarget.id);
    navigate(`/Detailm/${params.id}/${idpages}`, { replace: true });
  }

  const [open, setOpen] = React.useState(false);


  const handleClose = () => {
    setOpen(false);
  };


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
  const {id} = useParams()
  console.log("ini shop id",params.id);

  const [name, setName] = useState(``)
  const [desc, setDesc] = useState(``)

  function senddata(event:any)
  {

    console.log(name)
    console.log(desc)
    event.preventDefault()
    axios.put(`${URL}/Shop/${params.id}`, {
      "name":name,
      "description":desc
    })
    .then((response) => {
      console.log(response)
      navigate(`/Details/${response.data.id}`, { replace: true })
      setOpen(true);
    })
    .catch(err => console.log(err))
    
  }

  useEffect(() => {
    if (params.id) {
      // Check if params.id is defined
      let hit = GetShopId(params.id);
      let htm = Getmenuid(params.id);

      htm
        .then((data) => {
          console.log(data);
          setshopmenu(data);
        })
        .catch((err) => {
          console.log(err);
        });

      hit
        .then((data) => {
          console.log(data);
          setDetailshop(data);
          setName(data.name)
          setDesc(data.description)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [params.id]); // Include params.id as a dependency to trigger the effect when it changes



  const [imageSrc, setImageSrc] = useState("");
  function handleimage(e: any) {
    const file = e.target.files[0];
    if (file) {
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
            <form onSubmit={senddata}>
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
                          required
                          multiline
                          label="name"
                          sx={{ width: "46%" }}
                          onChange={(e) => setName(e.target.value)}
                          defaultValue={`${detailShop.name}`}
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
                          id="outlined-multiline-static"
                          label="Description"
                          required
                          multiline
                          rows={5}
                          sx={{ width: "100%" }}
                          onChange={(e) => setDesc(e.target.value)}
                          defaultValue={`${detailShop.description}`}
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
                          id="expreq"
                          label="Level Require"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                        <TextField
                          id="prc"
                          label="Price"
                          defaultValue={`${detailShop.price}`}
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
                        image={
                          imageSrc ||
                          `${URL}/gamedata/image/${detailShop.shop_display}`
                        }
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
                      sx={{ width: "100%", mx: 5, mb: 2 }}
                      endIcon={<SendIcon />}
                      type="submit"
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
                  navigate(`/Details/${params.id}/Addmenu`);
                }}
                aria-label="edit"
              >
                <AddIcon />
              </Fab>
            </Box>

            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Data Changed"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your Data already Saved
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Done
          </Button>
        </DialogActions>
      </Dialog>

            </form>

            <TableContainer>
              <Table
                sx={{ width: 1000, m: 5, borderRadius: "10px", boxShadow: 8 }}
                component={Paper}
                aria-label="customized table"
              >
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell align="center">
                      Description
                    </StyledTableCell>
                    <StyledTableCell align="center">image</StyledTableCell>
                    <StyledTableCell align="center">Edit</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {shopmenu.map((row:any) => (
                    <StyledTableRow key={row.id}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.description}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <img
                          src={`${URL}/gamedata/image/${row.menu_display}`}
                          style={{ width: 100, height: 100 }}
                        ></img>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Fab
                          className="edit"
                          id={row.id}
                          color="secondary"
                          sx={{ width: 50, height: 50 }}
                          onClick={handleClick}
                          aria-label="edit"
                        >
                          <EditIcon />
                        </Fab>
                        <AlertDelete />
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
}

const Category = [{ label: "Fashion" }, { label: "Food" }, { label: "Drink" }];
