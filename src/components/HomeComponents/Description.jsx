import React from "react";
import Box from "@mui/material/Box";
import { Button, Container, useMediaQuery, useTheme } from "@material-ui/core";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import useStyles from "./styles";
// import {Card, Button, Col, Row} from "react-bootstrap";
import photo from "../../assets/img/bg.png";
import { Link } from "react-router-dom";

const Description = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className={classes.parentTwo} id="home-description">
      <Box sx={{ width: 1 }}>
        <Card
          sx={{
            display: "flex",
            backgroundColor: "rgb(238, 228, 225)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isMobile ? (
            <></>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: 1,
              }}
              textAlign="center"
            >
              <CardMedia
                component="img"
                sx={{ width: 1, height: "100%" }}
                image={photo}
                alt="Baby photo"
              />
            </Box>
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignText: "right",
              width: 3 / 4,
            }}
          >
            <CardContent
              sx={{
                width: 1,
              }}
              style={{
                backgroundColor: "rgb(212, 202, 199)",
                padding: "200px 150px",
              }}
            >
              <Typography component="div" variant="h5">
                Unique baby box subscriptions
              </Typography>
              <br />
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Choose the boxes that suit you and your little one's monthly
                needs for both growth and joy. Your little family can sleep well
                at night knowing that your baby is cared in a cute, conscious
                and convenient way every single month.
              </Typography>
              <br />
              <Box textAlign="right">
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  component="div"
                >
                  0-2 years old
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  component="div"
                >
                  Gender Neutral
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  component="div"
                >
                  Born in Netherlands, European Based
                </Typography>
              </Box>
              <Box textAlign="center">
                <br />
                <br />
                <Button
                style={{backgroundColor: '#A5AEAA'}}
                  type="submit"
                  variant="contained"
                  component={Link}
                  to="/order"
                >
                  Get Started
                </Button>
              </Box>
            </CardContent>
          </Box>
        </Card>
      </Box>
    </div>
  );
};

export default Description;
