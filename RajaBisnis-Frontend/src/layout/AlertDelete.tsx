import * as React from 'react';
import {useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Fab from '@mui/material/Fab';
import DelIcon from "@mui/icons-material/DeleteForever"

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDelete() {
  const [open, setOpen] = React.useState(false);

  const [targetid, settargetid] = useState<string>();
  function handleClickOpen(event: any) {
    event.preventDefault();
    settargetid(event.target.id)
    setOpen(true);

  }

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
    <div>
      <Fab className="edit" color="secondary" onClick={handleClickOpen} sx={{width:50,mt:1 , height:50}} aria-label="edit">
        <DelIcon />
       </Fab>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Confrim Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are You sure to Delete this Selection
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}