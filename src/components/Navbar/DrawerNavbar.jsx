import React, { useState } from "react";
import {Drawer,List,ListItem,ListItemText,} from "@material-ui/core";
import { Link } from "react-router-dom";
import IconButton from"@material-ui/core";
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
                        <Link to="/">Home</Link>
                    </ListItemText>
                </ListItem>
                <ListItem onClick={() => setOpenDrawer(false)}>
                    <ListItemText>
                        <Link to="/boxes">Our Boxes</Link>
                    </ListItemText>
                </ListItem>
                <ListItem onClick={() => setOpenDrawer(false)}>
                    <ListItemText>
                        <Link to="/order">Order</Link>
                    </ListItemText>
                </ListItem>
                <ListItem onClick={() => setOpenDrawer(false)}>
                    <ListItemText>
                        <Link to="/account">Account</Link>
                    </ListItemText>
                </ListItem>
                <ListItem onClick={() => setOpenDrawer(false)}>
                    <ListItemText>
                        <Link to="/cart">Shopping Cart</Link>
                    </ListItemText>
                </ListItem>
            </List>
        </Drawer>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
            {/* <MenuIcon />     */}
        </IconButton>
    </>
  )
}

export default DrawerNavbar