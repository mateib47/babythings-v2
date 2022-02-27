import React from "react";
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    {id:1, name: 'Clothing box', description: 'Clothing essentials', price:'$43', image:'https://drive.google.com/uc?export=view&id=1rcf0Qsbkj0vgNDRM9-qeniNWN1qpeprU'},
    {id:2, name: 'Toys box', description: 'Age specific toys', price:'$23', image:'https://drive.google.com/uc?export=view&id=1K76Fdr4lh1RIZJXuNl-12-FoPWcEujAR'},
    {id:3, name: 'Hygene box', description: 'All care products you need', price:'$32', image:'https://drive.google.com/uc?export=view&id=16f3_7aezwu89g-oSaKvuFxSczRNyP-GB'}

]

const Products = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}
export default Products