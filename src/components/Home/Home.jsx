import React from 'react';
import useStyles from './styles';
import {Typography} from '@material-ui/core'



const Home = () => {
    const classes = useStyles();

  return (
      <>
        <div className={classes.toolbar}/>
        <Typography variant='h6'>Unique baby box subscriptions</Typography>
      </>
  )
}

export default Home