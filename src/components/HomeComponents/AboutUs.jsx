import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {Container} from '@material-ui/core';
import Button from '@mui/material/Button';
import useStyles from './styles';


const AboutUs = () => {
    const classes = useStyles();
  return (
      <Container maxWidth="xl">
        <div className={classes.parentTwo}>
        <Box sx={{ maxWidth: 1100, flexGrow: 1 }}>
            <Typography variant='h1' color='white' style={{textAlign:'center'}}>About Us</Typography>
            <Paper style={{margin:'0 1vw', padding:'6% 10%', backgroundColor:'rgb(238, 228, 225)'}}>
                <Typography color='black'>We are a Netherlands-based group of entrepreneurs that cares about the future of our planet and
                    it's future generations. With this in mind we decided to found KiekeBox - a product that is conscious
                    about both it's environmental impact as well as the impact it has on the young lives that it touches
                    every month. By keeping the products as local as possible we support local businesses through our
                    products and reduce our carbon footprint in terms of shipping. Not just any brand will do - we care
                    about your little ones as much as you do and every month we make sure that only high quality, sensi-
                    tive friendly, loving and cute products come your way to bring joy to your little family during the grow-
                    ing months that seem to rush by so quickly.
                </Typography>
            </Paper>
        </Box>
        </div>
      </Container>
  )
}

export default AboutUs