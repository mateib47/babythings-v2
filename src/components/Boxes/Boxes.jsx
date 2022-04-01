import React from "react";
import useStyles from "./styles";
import Box from "./Box/Box";

const Boxes = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box />
    </div>
  );
};

export default Boxes;
