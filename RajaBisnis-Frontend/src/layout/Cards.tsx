import Card from "@mui/material/Card";
import React from "react";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import {  useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetShop, URL } from "../Api";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Cards() {
  const [shop, setShop] = useState<any[]>([]);

  useEffect(() => {
    let hit = GetShop();

    hit
      .then((data) => {
        console.log(data);
        setShop(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { id } = useParams();
  let navigate = useNavigate();

  const handleClick = (event: { currentTarget: { id: any } }) => {
    const idpages = event.currentTarget.id;
    navigate(`/Details/${idpages}`, { replace: true });
  };

  const [targetid, settargetid] = useState<string>();
  function deleteclick(event: any) {
    event.preventDefault();
    settargetid(event.target.id)
    setOpen(true);

  }

  const [open, setOpen] = React.useState(false);


  const handleClose = () => {
    setOpen(false);
  };

  const handledelete = () => {
    console.log(targetid);

    axios.delete(`${URL}/shop/${targetid}`).then((message:any) =>{
      window.location.reload(); 
    });
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          width: "85vw",
          display: "flex",
          flexWrap: "wrap-reverse",
          gap: "20px",
        }}
      >
        {shop.map((post) => (
          <div key={post.id}>
            <Card sx={{ width: 275, boxShadow: 10 }} id="1">
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ display: "flex", justifyContent: "center" }}
                  color="text.primary"
                  gutterBottom
                >
                  <strong>{post.name}</strong>
                </Typography>
                <CardMedia
                  component="img"
                  height="194"
                  image={`${URL}/gamedata/image/${post.shop_display}`}
                />
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Price: {post.price}
                </Typography>
                <Typography variant="body2">{post.description}</Typography>
              </CardContent>
              <CardActions
                sx={{ justifyContent: "center", textDecoration: "none" }}
              >
                <Button color="primary" id={`${post.id}`} onClick={handleClick}>
                  Detail
                </Button>
                <Button color="warning" id={`${post.id}`} onClick={deleteclick}>
                  Delete
                </Button>
              </CardActions>
            </Card>

            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Request for delete a message"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Delete This data Are You sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
          <Button onClick={handledelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
          </div>
        ))}
      </Box>
    </>
  );
}
