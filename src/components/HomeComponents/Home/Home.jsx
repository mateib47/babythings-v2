import React from 'react'
import Header from '../Header'
import Description from '../Description'
import AboutUs from '../AboutUs'
import Carousel from '../Carousel'
import DeliveryTimeline from '../DeliveryTimeline'
import {CssBaseline, IconButton, Collapse} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import './home.scss';
 
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${require(process.env.PUBLIC_URL + "./../../../assets/img/bg3.png")})`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',

  },
}));


const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
       <CssBaseline />
       <Header />
       <Description/> 
       <DeliveryTimeline />
       <Carousel />
       <AboutUs />
    </div>
  )
}

export default Home