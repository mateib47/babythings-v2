import React from 'react';

import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import {Link, useLocation} from 'react-router-dom';

import logo from '../../assets/img/logo.png';
import useStyles from './styles';
import Drawer from './DrawerNavbar'


const Navbar = ({totalItems}) => {
  const classes = useStyles(); 
  const location = useLocation();
  const theme = useTheme();
 const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
            {isMobile? (<Drawer />) : (
                <div>
                <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="BabythingsStore" height="25px" className={classes.image} />
                    Kiekebox
                </Typography>
                <div className={classes.grow} />
                <Typography component={Link} to="/boxes" variant="h6"  color="inherit" className={classes.titleUncentered}>
                    Our Boxes
                </Typography>
                <Typography component={Link} to="/order" variant="h6"  color="inherit" className={classes.titleUncentered}>
                    Order
                </Typography>
                <Typography component={Link} to="/account" variant="h6"  color="inherit" className={classes.titleUncentered}>
                    Account
                </Typography>
                {location.pathname !== '/cart' && (
                <div className={classes.button}>
                    <IconButton component={Link} to="/cart" area-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div> )}
                </div>
            )} 
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar