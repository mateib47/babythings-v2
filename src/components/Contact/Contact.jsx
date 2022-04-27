import * as React from "react";
import useStyles from "./styles";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useEffect } from "react";
import { Container, Typography, Grid, Box } from "@material-ui/core";
import {
  ContactDefault,
  ContactCustomer,
  ContactBusiness,
} from "./ContactComponents";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Contact = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [user, setUser] = React.useState(false);
  let contactPage;

  switch (user) {
    case "customer":
      contactPage = <ContactCustomer />;
      break;
    case "business":
      contactPage = <ContactBusiness />;
      break;
    default:
      contactPage = <ContactDefault />;
  }

  // useEffect(() => {
  //   handleClose();
  // }, [user])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e, u) => {
    e.preventDefault();
    setOpen(false);
    setUser(u);
    console.log(open);
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
        <DialogTitle>
          {"Are you interested in buying or collaborating with us?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let us know if you would like to get notified when our boxes are in
            stock or if you are a business and you want to get in touch.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={(e) => handleClose(e, "customer")}>Customer</Button>
          <Button onClick={(e) => handleClose(e, "business")}>Business</Button>
        </DialogActions>
      </Dialog>
      {contactPage}
    </div>
  );
};

export default Contact;
