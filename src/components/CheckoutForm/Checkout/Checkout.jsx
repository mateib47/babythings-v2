import React, { useState, useEffect } from 'react';
import {Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline} from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';


import {commerce} from '../../../lib/commerce'
import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import BabyForm from '../BabyForm';

const steps = ["Baby's details", 'Shipping Address', 'Payment details'];


const Checkout = ({cart, order, onCaptureCheckout, error}) => {
    const classes = useStyles(); 
    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({});
    const [isFinished, setIsFinished] = useState(false);
    const navigate = useNavigate();
    const [checkoutToken, setCheckoutToken] = useState(null);

    useEffect (() => {
        if(cart.id) {
            const generateToken = async () => {
                try {
                    const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'});

                    setCheckoutToken(token);
                } catch (error) {
                    navigate('/');
                }
            }

            generateToken();
        }
    }, [cart]);

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);


    const toPayment = (data) => {
        setShippingData(data);
        nextStep();
    }
    const toAddress = (data) => {
        //setShippingData(data);
        //set baby details
        nextStep();
    }
    const timeout = () => {
        setTimeout(() => {
            setIsFinished(true);
        }, 3000);
    }

    const Confirmation = () => order.customer ? (
        <>
           <div>
               <Typography variant="h5">Thank you for your purchase, {order.customer.firstame} {order.customer.firstame}</Typography>   
               <Divider className={classes.divider} />
               <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography> 
            </div> 
            <br/>
            <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
        </>
    ): isFinished ? (
    <>
        <div>
            <Typography variant="h5">Error in completing the purchase</Typography>   
            <Divider className={classes.divider} />
         </div> 
         <br/>
         <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
    </>
    ) : (
        <div className={classes.spinner}>
            <CircularProgress />
        </div>
    );

    if(error) {
        <>
            <Typography variant="h5">Error: {error}</Typography>
            <br/>
            <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
        </>
    }
    
    const renderSwitch = (step) => {
        if (checkoutToken){
            switch(step){
                case 0:
                    return <BabyForm checkoutToken={checkoutToken} next={toAddress}/>
                    break;
                case 1:
                    return <AddressForm checkoutToken={checkoutToken} next={toPayment} />;
                    break;
                case 2:
                    return <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} onCaptureCheckout={onCaptureCheckout} timeout={timeout}/>;
                    break;     
            }
        }
        if (step == 2) 
            return <Confirmation />;
    }
    
  return (
    <>
        <CssBaseline/>
        <div className={classes.toolbar} />
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant="h4" align="center">Checkout</Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {renderSwitch(activeStep)}
            </Paper>
        </main>
        
    </>
  )
}

export default Checkout