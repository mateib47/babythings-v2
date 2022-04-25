import * as React from 'react';
import useStyles from "./styles";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useEffect } from 'react';
import { Container, Typography, Grid, Box } from "@material-ui/core";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  

const Contact = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        handleClickOpen();
      });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
        <div className={classes.toolbar} />
        <Typography>Contact us</Typography>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Are you interested in buying or collaborating with us"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let us know if you would like to get notified when our boxes are in stock or if you are a business and you want to collaborate.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Customer</Button>
          <Button onClick={handleClose}>Business</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Contact