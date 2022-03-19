import React from 'react';
import useStyles from './styles';
import {Typography, CssBaseline, IconButton, Collapse} from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';
import { Link as Scroll } from 'react-scroll';


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
        <div className={classes.parent}>
          <Collapse 
            in={checked}
            {...(checked ? { timeout: 1000 } : {})}
            collapsedSize={50}
            >
            <div className={classes.container}>
              <h1 className={classes.title}> High quality, gender neutral, european sourced</h1>
              <Scroll to="home-description" smooth={true}>
                <IconButton>
                  <ExpandMoreIcon className={classes.goDown} />
                </IconButton>
              </Scroll>
            </div>
          </Collapse>
        </div>
      </>
  )
}


export default Home