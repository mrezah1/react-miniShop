import React from "react";
import Product from "./Product";
import './style.css'

const Products = ({ orders }) => (
  <section className="products-wrapper p-3">
    {orders.map(({ title, price, count }) => (
      <Product key={title} title={title} count={count} price={price} />
    ))}
  </section>
);

export default Products;
