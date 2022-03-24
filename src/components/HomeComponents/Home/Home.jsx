import React from 'react'
import Header from '../Header'
import Description from '../Description'
import Carousel from '../Carousel'
import {CssBaseline, IconButton, Collapse} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
 
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${require(process.env.PUBLIC_URL + "./../../../assets/img/bg.png")})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));


const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
       <CssBaseline />
       <Header/>
       <Description/> 
       <Carousel />
    </div>
  )
}

export default Home