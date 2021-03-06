import React from "react";
import { Grid, Box } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from "./styles";

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  return (
    <>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justifyContent="center" spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </main>
      <Box sx={{ width: 1, height: "100vh" }}></Box>
    </>
  );
};
export default Products;
