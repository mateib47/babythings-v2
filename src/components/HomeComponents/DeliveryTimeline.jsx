import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import PaymentIcon from '@mui/icons-material/Payment';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import InventoryIcon from '@mui/icons-material/Inventory';
import Box from '@mui/material/Box';


import Paper from '@mui/material/Paper';

import useStyles from './styles';
//todo maybe make it horizontal
//https://stackoverflow.com/questions/63175060/is-there-a-way-to-implement-horizontal-timeline-using-material-ui-in-react
//todo fix timeline connectors

const DeliveryTimeline = () => {
    const classes = useStyles();
  return (
         
    <div className={classes.parentTwo}>
            <Box sx={{ maxWidth: 1100 }}>
        <Typography variant='h1' color='white' style={{textAlign:'center'}}>How it works</Typography>
    <Paper>
        <Timeline position="alternate">
        <TimelineItem>
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
            >
            
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
                <TouchAppIcon />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
                Choose Boxes
            </Typography>
            <Typography>You can get up to three modules</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
            >
            
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
                <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
                Fill in baby details
            </Typography>
            <Typography></Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
                <PaymentIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
                Choose payment plan
            </Typography>
            <Typography>Monthly / 3 months prepaid / 6 months prepaid</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot>
                <InventoryIcon />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
                We pack everything
            </Typography>
            <Typography>All the modules come in one box</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot color="primary">
                <LocalShippingIcon />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
                Shipping
            </Typography>
            <Typography>The boxes arrive at the start of every month</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot color="secondary">
                <SentimentVerySatisfiedIcon />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
                 Enjoy
            </Typography>
            <Typography>Adjust preferences in your account</Typography>
            </TimelineContent>
        </TimelineItem>
        </Timeline>
    </Paper>
    </Box>
    </div>
  )
}

export default DeliveryTimeline