import React from 'react';
import useStyles from './styles';
import {Typography} from '@material-ui/core';
import {Card, Button, Col, Row} from "react-bootstrap";

import boxes from '../../assets/img/boxes2.png';



const Home = () => {
    const classes = useStyles();

  return (
      <>
        <div className={classes.toolbar}/>
        <Card className="text-center">          
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Row>
              <Col xs={12} md={8}>
                <Card.Img src={boxes} alt="Card image" className={classes.cardImage} />
              </Col>
              <Col xs={12} md={4}>
                <Card.Title>Unique baby box subscriptions</Card.Title>
                <Card.Text>
                  Choose the boxes that suit you and your little one's monthly needs for
                   both growth and joy. Your little family can sleep well at night knowing that your baby is cared in a cute, conscious and convenient way every single month.
                </Card.Text>
                <Button variant="primary">Get started</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </>
  )
}

export default Home