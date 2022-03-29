import React, { useState } from "react";
import {Drawer,List,ListItem,ListItemText,IconButton,Typography} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from './styles';


//maybe change link to typography
const DrawerNavbar = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const classes = useStyles(); 

  return (
    <>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <List>
                <ListItem onClick={() => setOpenDrawer(false)}>
                    <ListItemText>
                        <Typography component={Link} to="/" variant="h6"  color="inherit" className={classes.titleUncentered}>
                            Home
                        </Typography>
                    </ListItemText>
                </ListItem>
                <ListItem onClick={() => setOpenDrawer(false)}>
                    <ListItemText>
                        <Typography component={Link} to="/boxes" variant="h6"  color="inherit" className={classes.titleUncentered}>
                            Boxes
                        </Typography>
                    </ListItemText>
                </ListItem>
                <ListItem onClick={() => setOpenDrawer(false)}>
                    <ListItemText>
                        <Typography component={Link} to="/order" variant="h6"  color="inherit" className={classes.titleUncentered}>
                            Order
                        </Typography>
                    </ListItemText>
                </ListItem>
                <ListItem onClick={() => setOpenDrawer(false)}>
                    <ListItemText>
                        <Typography component={Link} to="/account" variant="h6"  color="inherit" className={classes.titleUncentered}>
                            Account
                        </Typography>
                    </ListItemText>
                </ListItem>
                <ListItem onClick={() => setOpenDrawer(false)}>
                    <ListItemText>
                        <Typography component={Link} to="/cart" variant="h6"  color="inherit" className={classes.titleUncentered}>
                            Cart
                        </Typography>
                    </ListItemText>
                </ListItem>
            </List>
        </Drawer>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon />    
        </IconButton>
    </>
  )
}

export default DrawerNavbar