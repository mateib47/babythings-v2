import React from 'react';
import useStyles from './styles';
import {Typography, CssBaseline, IconButton, Collapse} from '@material-ui/core';
import {Card, Button, Col, Row} from "react-bootstrap";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import boxes from '../../assets/img/boxes2.png';
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
            collapsedHeight={50}
            >
            <CssBaseline />
            <Typography variant='h2' className={classes.title}> High quality, gender neutral, european sourced</Typography>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Collapse>
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