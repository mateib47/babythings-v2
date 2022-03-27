import React from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {Button} from '@material-ui/core';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import useStyles from './styles';
// import {Card, Button, Col, Row} from "react-bootstrap";
import boxes from '../../assets/img/boxes2.png';
import {Link} from 'react-router-dom'



const Description = () => {
  const classes = useStyles();

  return (
    <div className={classes.parentTwo} id="home-description">
        {/* <Card className={classes.cardBody}>          
        <Card.Body>
          <Row>
          <Col xs={12} md={6} className="text-center">
              <Card.Title>Unique baby box subscriptions</Card.Title>
              <Card.Text>
                Choose the boxes that suit you and your little one's monthly needs for
                  both growth and joy. Your little family can sleep well at night knowing that your baby is cared in a cute, conscious and convenient way every single month.
              </Card.Text>
              <Button variant="primary">Get started</Button>
            </Col>
            <Col xs={12} md={6}>
              <Card.Img src={boxes} alt="Card image" className={classes.cardImage} />
            </Col>
          </Row>
        </Card.Body>
      </Card> */}
      <Card sx={{ display: 'flex', padding: '20px', width:'60vw', backgroundColor: 'rgb(238, 228, 225)', alignItems:'center' }} >
      <Box sx={{ display: 'flex', flexDirection: 'column', padding:'0 30px' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Unique baby box subscriptions
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Choose the boxes that suit you and your little one's monthly needs for
            both growth and joy. Your little family can sleep well at night knowing that your baby is cared in a cute, conscious and convenient way every single month.
          </Typography>
          <br/><br/>
          <Button type="submit" variant="contained" color="primary" component={Link} to="/order">Get Started</Button>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 351 }}
        image={boxes}
        alt="Box photo"
      />
    </Card>
    </div>
  )
}

export default Description