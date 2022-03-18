import React from 'react'
import useStyles from './styles';
import {Card, Button, Col, Row} from "react-bootstrap";
import boxes from '../../assets/img/boxes2.png';


const Description = () => {
  const classes = useStyles();

  return (
       <>
         <Card className={classes.parent}>          
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

export default Description