import useStyles from "./styles";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import PaymentIcon from "@mui/icons-material/Payment";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import InventoryIcon from "@mui/icons-material/Inventory";
import Box from "@mui/material/Box";

import Paper from "@mui/material/Paper";

const DeliveryItem = ( {title}) => {
  const classes = useStyles();

  return (
    <>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.primary"
        />
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          sx={{ py: "12px", px: 2 }}
          className={classes.timelineContentContainer}
        >
          <Paper>
            <Typography
              variant="h6"
              component="span"
              className={classes.timelineContent}
            >
              {title}
            </Typography>
            {/* <Typography>{description}</Typography> */}
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </>
  );
};

export default DeliveryItem;
