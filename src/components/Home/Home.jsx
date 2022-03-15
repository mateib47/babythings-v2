import React from 'react';
import useStyles from './styles';
import {Typography, CssBaseline} from '@material-ui/core';
import {Card, Button, Col, Row} from "react-bootstrap";

import boxes from '../../assets/img/boxes2.png';
import bg from '../../assets/img/bg.png';




const Home = () => {
    const classes = useStyles();

  return (
      <>
        <div className={classes.toolbar}/>
        <div className={classes.parent} style={{backgroundImage:{bg}}}>
          <CssBaseline />
            {/* <FirstCard classes={classes}/> */}
        </div>
      </>
  )
}


const FirstCard = ({classes})  => {
  return (
   <>
     <Card>          
       <Card.Body className={classes.cardBody}>
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
     </Card>
   </>
  )
 }

export default Home