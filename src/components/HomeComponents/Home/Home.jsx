import React from 'react'
import Header from '../Header'
import Description from '../Description'
import {Typography, CssBaseline, IconButton, Collapse} from '@material-ui/core';



const Home = () => {
  return (
    <>
        <CssBaseline />
       <Header/>
       <Description/> 
    </>
  )
}

export default Home