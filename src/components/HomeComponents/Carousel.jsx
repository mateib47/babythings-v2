import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import useStyles from "./styles";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Little Dutch",
    imgPath:
      "https://www.babyenkoter.nl/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/l/o/logo-little-dutch_8_1_1_1_3_5_1_1.jpg",
  },
  {
    label: "Happy Soaps",
    imgPath:
      "https://www.baak.nl/wp-content/uploads/2020/05/happy-soaps-logo.jpg",
  },
  {
    label: "House Of Jamie",
    imgPath: "https://heylittlebaby.com/img/m/54.jpg",
  },
  {
    label: "Keekabuu",
    imgPath:
      "data:image/png;base64,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",
  },
];

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.parentTwo}>
      <Box sx={{ width: 1, flexGrow: 1 }}>
        <br />
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 100,
            pl: 2,
            bgcolor: "rgb(238, 228, 225)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h2"
              style={{ textAlign: "center", marginBottom: "10px" }}
            >
              Our Potential Brands
            </Typography>
            <Typography>{images[activeStep].label}</Typography>
          </div>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          style={{ backgroundColor: "white" }}
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: "auto",
                    display: "block",
                    maxWidth: 300,
                    overflow: "hidden",
                    width: "100%",
                    backgroundColor: "#000",
                    margin: "auto",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          style={{ backgroundColor: "rgb(238, 228, 225)" }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </div>
  );
}

export default SwipeableTextMobileStepper;
