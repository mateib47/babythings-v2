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
import DeliveryItem from "./Delivery/DeliveryItem"; //rename

import Paper from "@mui/material/Paper";

import useStyles from "./styles";
//todo maybe make it horizontal
//0https://stackoverflow.com/questions/63175060/is-there-a-way-to-implement-horizontal-timeline-using-material-ui-in-react
//todo fix timeline connectors

const DeliveryTimeline = () => {
  const classes = useStyles();
  let items = [
    {
      title: "Choose Boxes",
      descr: "You can get up to three modules",
      color: "text.primary",
      iconComponent: <TouchAppIcon className={classes.timelineIcon} />,
    },
    {
      title: "Choose Boxes",
      descr: "You can get up to three modules",
      color: "text.primary",
      iconComponent: <TouchAppIcon className={classes.timelineIcon} />,
    },
  ];
  //let descr = "You can get up to three modules";
  return (
    <div className={classes.parentTwo} style={{ marginTop: "40px" }}>
      <div className={classes.toolbar} />

      <Box sx={{ maxWidth: 3100 }}>
        <Typography variant="h1" color="white" style={{ textAlign: "center" }}>
          How it works
        </Typography>
        <Paper style={{ backgroundColor: "rgb(238, 228, 225)" }}>
          <Timeline className={classes.timeline} align="alternate">
            {items.map((t) => (
              <DeliveryItem
                title={t.title}
                key={items.indexOf(t)}
                description={t.descr}
                iconComponent={t.iconComponent}
                color={t.color}
              />
            ))}
          </Timeline>
        </Paper>
      </Box>
    </div>
  );
};

export default DeliveryTimeline;
