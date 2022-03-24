import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import useStyles from './styles';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Little Dutch',
    imgPath:
      'https://i0.wp.com/www.annouks.nl/wp-content/uploads/2019/10/little-dutch-logo.jpg?fit=900%2C450&ssl=1',
  },
  {
    label: 'Happy Soaps',
    imgPath:
      'data:image/png;base64,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',
  },
  {
    label: 'House Of Jamie',
    imgPath:
      'data:image/png;base64,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',
  },
  {
    label: 'Keekabuu',
    imgPath:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAA4VBMVEX///8kFVD///0jFFAjE1AkFU7+/v/59/wiE04iEk////sgD0weDUwtH1IAADsVAEjV0t4AADrz7/cPAEQLAECPiKEVAEYJAD4AAD4SAEIaBEo3LVpCN2BsYoUcCEoiEVHd2+N+eJCYkqvGwtBFN2VmW3y1scLp6O1ZUXIcCUfk4e3BvMsNADxKQWhyaoeknbKtprxRSGstI1HDwc6lorKGfpknGUyCeJh3co5jW4I7LlkAADQtHlSem620rMVPRm40KVuQiahbTn3e1uk9NFlJPmmonbuJhZl3coloY325tcTvdjLvAAAPwUlEQVR4nO2c/3+aOhfHA0kgCBUEREELDuc3nN96Z+e6bu191t3e9v//g55zgjq1Xddt9/ZxzyvvH1wVCPmQk5OTcDJCFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKh+CF0negV+AT+meIquiz0eMDKmIPBwCCk8k/UC4ryj0qiToplW9jni798+Nv4+YLwUuO+d8b59WmXHIdAtCZjNgocy7bTZqtLKo8LrOy1rU4erb6hk8Gw6dqWZbu1lY/f/+dgx8trtihJ7a7+iJXiSf4fb+tLye3svvhGaZXBJKKapgnBssapeQT6sCW6bzJZJ/jQkotB5WHj6LpfPw8Dd00Uj04fl2hMI4bFCMo5a+bHYKW6bg4TjWtrWJijSz3EHzZthlWnAHxa7snnx0rrhtm6KMZpdl48LOnF0SudyNK+kr42HrHRekPbh0cL86B90Gu+KxtwrfHN/KVUPIFB+qHYqblVHTz074PzjO/pY1pWPXSTeNkk3RXorl5MxlPMgx2BlDY7DweK7t4zkAYogjrZN0AQaLSyHYHUnb6YiKd4G+zZXrM4EAgVfxuwA4WacE8fuBCdtJzdlj4KgeBEY7qjT/BD514KZA8E9h7xke/dHYE0zl9IxFNUiH/hiG378Gh6GK6BwHHI6KHAaPmIwHmDb04Uwoq7L6XiCaD6syZjVMhHT7PQOwwi4dtAWPstSClrjh8pzb9IWVkSDIVu7xgiGcBcxAyqxblgVqP+6Cmr6MBEedo+HCYk49iBMR6aT7DReXEs8XZxFUgrtZIPS/PRYNuzsz19LKvOH9NXIf2qm1lCE3ZwdizhNlTDzC8bcRC/+dKHDviIQJ3Mm3udkIUrvfIwIDCgybxeFAZBMFoV34rb/yf4f3zMZ575jaNQ73qYUQzHwfo4E+HwW6cCnX7+EcLxRyK+o0WXriilaMdC0Kw29b97SeVYOmCJ8eQEXK5mdC/WM6GEz2B6+OS5R6VtB33zoet7Hl6X8v26C1MJkfYKsr9+o2+WdPSdYo5WJCFrP3roQyrkU6BBH3TfHba2UX7/dqseHd3TybI4dBIV433CcQA4GRxKr5izxXBu/DYCvTduGrTN/b4EnTCyUKAI8p01mXLNcVVLkg9vj9kq95hGjLLGkuwtXujmJC2HCXvkkX0fOW5CoOO0nhg6jgioec+F+op4vtfXzGlMS4Eiae8EYdB+3okNP2eX3x07jgMc1Bnjmp3OdiIRcxpkYoM76exc0G3Jpk2vjihweRq/lXKocRb2vHVfM8ftiAqMQVMKUalIxMwn5Yx+UA8dGDwgTj+a2PP7jN9Aa2mcufFw9ofn3de/BNhIjKXt9y7VKMgJr1/1Pa87n/IA16x4FtZ/H306yasWxJxcs9IwGkVBlHL0n8wZef7ElVbKbTeAQ3FkM+yWNLwz/5H3Gi+AHALyZiYY5xRmthbV4C+QZCXnMEUvFgH8wJjG4ZNy+Q8XQQ+nh7+JQukZ53aS8d0VJJ7FbRweiN9r2HR3dRAst7H8bdpPAnM94i1qSSbNT2K54dIH4RCj6jMb5u1yYoH9kjmNs/E/897tpSgHOWM8jGLXsSzLTt2YT3GxpoyqyeDPizBKbTyUxI0v4FEfm/4eOzDR9z7eXcRhKCar+cEE1h+/ujoPovhsWO/6Rz1z+DblhMlEDJSwO1nA5jI2hyrGbzPC7wNWtzfr2zm0Nx/8LZuv5HlV/40FKhQKhUKhODpMHyLEX5l96hhrYqD53FAGEyzgbPIiL1yKVbvVGvZ/5e0VCPRvJxetxexZUTTOn26Hi8Xdy8wKe2FqO+6HX1ziqlcTx0k+PC9VSSe9RpKmbth5AYHmicM0JhqzXxO4wGSCLHr1rJN1n2eMctHs/9uBN3Q889KmGqPxryziGcRoO0LjFAQ+q1f5VKa7Bf96XgwKPLG1XxVINgLd/1OB6xbUtOMWiN9wTl7ZvJ7E1PNOt9/vdkyyTRYpV4uMAn4fe/7mBfRaoDRRWcjmVZpcdyJlefCHXLGoEF/bCNQ3B9fz4Eo5fpSpG3itKb/KF8h4ZJPTocvFEZn9/3yBhixv47phZOtOT6rVMGg2L5edbUFQl069HVeDoFqze2NDpjSXAss+WClL2TwPMpjfLSbDWUHMfNJqL+ZQRSmQ0jg37qeTxbDubV+A+8t26xrOkQs6emWwal+0rvrwVe+c3rRavW2yl9drtS7uvO+8Jj5sQajCzdvyGkxgCV1HcEEZtQNeX9cBs5VFkApOGWO22zgtZF7kViCuKc0nrXr57s/QjdlJw01gSDi7z2sjGEpq441AzX3Xa7ppmsbx3Sbj+bbm2E5SvdfLOkybDl7i6bo5CeDP4Hx9on8ROU4atfynu8RGIKUB9sFi0UzT6gyqCOX3Ry6MH1TjHKrCrebKKO2umAQZ4wJ/hGMsuijg950+SPy7aurU3oE2sCe/13AwrZkyx+alXb4jGxNlNgwueA8WnY/lu19zkmJt1ol7utmy8SbRjJDOyII78OB+3YCxBfXKqt5T8r4K1EQELehdR0wI641Mr+vXnL1kLKuZy2SW4iKgO7mgQkRDU6+UAjkIJMVVDA+AN+Z4tj8Msk3KEy2vc0+3TkbbZkPRNAaFhm62bfzNnZYC/ZashAuV69iY8MWDflnzbgMTNgUIfDJ42hPonSWagKfpDo0K8biTrRPrNfkpLN6B/mUO5Yt3KU3IzyyEJje3AotJhG/ShHOG1jMN8KWLtrkAL9kVuPOcnBNoDCjHxrcYSW8j0N4RCKfxcCMwtNYCn9uCf3rnqRD4bsEWA9DhyttSeLRBKvN5uLSbWRP6Hr7+cqLALWvptM2twKV/4zIOJ9Os9rlC5g1KuXxEgorHBMINyqcoMvfK1LEF8Vty97hA+vMCnf9cJ3gr8B3x1AALQFE0s4Phx3woU3ypfW1UzGsHM8y5CNr12YrLlEIRemUfZGz0ny8R/sYoxfrKs/GrNYptvs4wxdRmv+yO+FY4cR3ceKCxrPYJavNafitbEPS2rLVAvSNQoIi3Jsp/TCC1bYYCaRb2/Ap5FchWy+I+DoErV6qt+qRbk90mC5e4a6mPyhkL52svCobmZFIgC74UcFx2FI2lord6HWYUbXtXoEaT0bDXkvfiLFl8X6D20wLBqDi+3LLCJViK8Vo6RSZ9lk7GsgpasyD1QNZ4nT1uXluYUB/M1qEaNAPjaMACnhJct8KMbCHcK/DtRh5Z2qHAZPIZj5QKs1EBAu1/R+Aabjdy9Ep+ZOE9s+vPHcCbJvi0Wa0gdy5WkrmfCjwwcyk++samBTVa9larucRh0LxKUaB96ckXiFNXHAjMXPmKDfODwcOKRhcFaqWTkaGN38r2+yArvagOfVD7CYFcnN3LrNROLAVyLmzbcdxE+oEsNclQdlTGzuGAPQoyabq17kZgWQodzXAgJaWTF+6qzLzzmnRfIE3fl76k68p0mmBOQCD7hkDnUCD9CYHRuzJQWwvEUTHLMovJjJf4FTHWAjNLIrsdS2/8jU2XntG5MuVjMkuBOMRiSFqE+y3ImftOJkdVCumABJg69MEdgfqeQNwDxcJfEqiJeOpjjFSUAgWD6AhCJyRtTMBtDGGohNuUv2cp/h7BEF0xdwRyEb2X8Zvfxm0fInlvyOC73zjogyy9QoHQx2OOTxOclflFluNMcLmmonsjayvQlgIjjLggapyH4gdNlMnIQMSTArdGcLycMnFzc3HRRm6ucjlwYx+kwr64wd/g42aygjh8PQ5uHpOIWnhjaG9OwUFHcsHHnyQ4Dn4VSBlv9KUhfsGRllEIocipK/DvWEZuxtRlG4H+WYbnpNeFnI6At/3BYcJicpjIXJn8vpCbpjL+Ged667kSpp/PQrx9Fv+1U0hlG4vKxsViWArerkLqkfQ6WZR/LroLN9sfBzGIF7PChyPS7u1zn5A8kFtKnJN5UXjTINsI1I1FKj1a2h4XxfjKlX79R4aJy0jGGVQ4ySe4T4NLG1qsC/Bubws5w8A0QcYsvvbW/ttXf5CtQCoupbuQzwBCV68hm5VlgcXjJONM2zfRLHPikzM3lbEfi3BzU1fu/ILQPBCXCXSUrUCQDgMRhBZ2xM+jEStDwB8J1aAAXH2CwbpaJwXPsMI0ia9mb/NVuxGHrQGeP0wYh+jKDtv1tx+Xi6QRfejjgLUO1d59iqGv4FhoNacmeR+td7VY1jZC3w3VBAYYZQQnrBgra+LqlYzr0ImV8a40UR39Ai2NbVvYjwisY7IS2hdl6PeXwfq2aRAGri0yFi7R+LthpmFEwCEWDWBayDJwopW1F8Vgux+LjKKZCph3fU6zTbfc6KNSoLYRKDYhKg3KKdJ9rYxate2RUmCFLMO9azYCnz+bIHnVhkcDEU2YkwGmPEpjQTBidto+zoRfhdJqoKfQcqi0ApzofJ0u9d+sA9Dob0JmjR0fXQqMdgTu+qWJ9N8QD8R0M4sRdEegPrj5ul9oLfG7LYg2cWlznHHi9sV5CIESVBkCDNKNUrn7Vrr2DCb2uMPWMHR/EWH6IKVyHy9E1Tg+68YXDMI5zOhhpixGHD1IFYYPmH2gXJjvQkFyJNOkQG5Jv4m35rKU+KZYL+LAFBJvzCHst0bSmWv49A2DdM5cPJuie09xosyfI9BopdhG1Tka4PzNCIImMEage4Lxmmw+nP9Y7tAspzDDmow2oAqYmwbdFG/Si+CGWXCLtRyfJ9Bdop48fxZFYPngUNzL1+BNmGiAxzDPHOgNVtoKbc4hbHCacutBWSN/+iHNcFe2Xf1zkuJqQHNempvXDh2ILISVRH85Fvzx3Rk9ktfiyA3PBtI+xhex25DbcCqkWMEBmZll2WlQWxTrCpizs8CFWQN4Bzt1Qz5GS+/XgigOAg8DE/K5HbtxG0vEYqa4NykMF51uFMZRwD3cif8hcKPmpMDN6EEQt+bG1/2vFePTJG4EUXg+J7MPQRSAf5OPFoa//CSMg7gx8chdLYqi5un30751o5vX63O5KQDfitQXt2UiIIQLnbzXQo9y3houx+Z2HZD4/b/b55gweTJZzQd4WcXwPt7WZ53Nm6aPw78HZZ4lHCzu83yOC2edTzO4E1gb3HRWz/sw7g3Gs/xtF5cDt6+38Hqvn+fjAYj28tu8X26DlguWfneez/B8c5zX8/GP5izK1ccd8cQwC2BQ5mbtYg7k7489QJmo9cxkrZ1CjYc/bze2GQ9P+Un2/9+Gnb03j/2HDoR8ax37n/qfWP4FDvYYlYahP3yPp2/+P5lvCDlagXv8SiV/C4EKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCofjd+S88FD5aDFnSYAAAAABJRU5ErkJggg==',
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
    <Box sx={{ maxWidth: 1100, flexGrow: 1 }}>
        <Typography variant='h1' color='white' style={{textAlign:'center'}}>Our Brands</Typography>
        <br/>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        style={{backgroundColor: 'white'}}
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                  backgroundColor: '#000',
                  margin:'auto', 
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
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
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
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
