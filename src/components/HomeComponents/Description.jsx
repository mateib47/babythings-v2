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
import boxes from "../../assets/img/boxes2.png";
import { Link } from "react-router-dom";

const Description = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className={classes.parentTwo} id="home-description">
      <Container maxWidth="xl">
        <Card
          className={classes.stretch}
          sx={{
            display: "flex",
            backgroundColor: "rgb(238, 228, 225)",
            alignItems: "center",
          }}
        >
          {isMobile ? (
            <></>
          ) : (
            <CardMedia
              component="img"
              sx={{ width: 551 }}
              image={boxes}
              alt="Box photo"
            />
          )}
          <Box
            sx={{ display: "flex", flexDirection: "column", padding: "0 30px" }}
          >
            <CardContent
              sx={{ flex: "1 0 auto" }}
              style={{ backgroundColor: "rgb(212, 202, 199)",
            padding:'200px 50px' }}
            >
              <Typography component="div" variant="h5">
                Unique baby box subscriptions
              </Typography>
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
                <br />
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/order"
                >
                  Get Started
                </Button>
              </Box>
            </CardContent>
          </Box>
        </Card>
      </Container>
    </div>
  );
};

export default Description;
