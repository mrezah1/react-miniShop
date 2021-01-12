import React from "react";
import icons from "../../../help/icons";
import "./style.css";

const Product = ({ title, price, count }) => {
  return (
    <div className="cart-product">
      <p className="cart-product__title">{title}</p>
      <p className="cart-product__price">{price}</p>
      <p className="cart-product__count">{count}</p>
      <p className="cart-product__remove">
        <button className="text-danger">
          <img src={icons.delete} />
        </button>
      </p>
    </div>
  );
};

export default Product;
