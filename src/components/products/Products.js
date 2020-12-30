import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes",
    price: "10$",
    image:
      "https://cdn.pixabay.com/photo/2013/05/31/20/33/sports-shoes-115149_1280.jpg",
  },
  {
    id: 2,
    name: "MacBook",
    description: "Apple MacBook",
    price: "2000$",
    image:
      "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241__480.jpg",
  },
];

function Products() {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;
