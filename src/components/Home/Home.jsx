import React from 'react';
import useStyles from './styles';
import {Typography} from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css';



const Home = () => {
    const classes = useStyles();

  return (
      <>
        <div className={classes.toolbar}/>
        <Typography variant='h6'>Unique baby box subscriptions</Typography>
        {/* <Card className="bg-dark text-white">
          <Card.Img src="" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            </Card.Text>
            <Card.Text></Card.Text>
          </Card.ImgOverlay>
        </Card> */}
      </>
  )
}

export default Home