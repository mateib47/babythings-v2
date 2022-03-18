import React from 'react';
import useStyles from './styles';
import {Typography, CssBaseline, IconButton, Collapse} from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';


import bg from '../../assets/img/bg.png';




const Home = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
      setChecked(true);
    }, []);

  return (
      <>
        <div className={classes.toolbar}/>
        <div className={classes.parent} style={{backgroundImage:{bg}}}>
          <Collapse 
            in={checked}
            {...(checked ? { timeout: 1000 } : {})}
            collapsedSize={50}
            >
            <CssBaseline />
            <Typography variant='h2' className={classes.title}> High quality, gender neutral, european sourced</Typography>
            <IconButton style={{margin:'auto'}}>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Collapse>
        </div>
      </>
  )
}


export default Home