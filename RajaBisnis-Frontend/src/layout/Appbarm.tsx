import React from 'react'
import Box from '@mui/material/Box'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBack from "@mui/icons-material/ArrowBackIos";
import {useNavigate } from "react-router-dom";

export default function Appbarm() {
    let navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
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
                    <strong>Menu Details</strong>
                  </Typography>
                </Toolbar>
              </AppBar>
            </Box>
  )
}