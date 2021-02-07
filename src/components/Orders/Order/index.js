import React from "react";
import icons from "../../../help/icons";
import Curency from "../../../util/Curency";
import "./style.css";

const Order = ({ title, price, count, plus, minus, delete: deletePr }) => {
  return (
    <div className="cart-product pb-3 row m-0">
      <p className="cart-product__title col-12 col-md-6 text-left">{title}</p>
      <p className="cart-product__price col-4 col-md-2">
        {Curency(price, true)}
      </p>
      <p className="cart-product__count col-4 col-md-2">
        <button onClick={plus} className="plusBtn custom-flex fh">
          +
        </button>
        <span className="px-3">{count}</span>
        <button onClick={minus} className="minusBtn custom-flex fh">
          -
        </button>
      </p>
      <p className="cart-product__remove col-4 col-md-2">
        <button onClick={deletePr} className="text-danger fh">
          <img src={icons.delete} alt="delete"/>
        </button>
      </p>
    </div>
  );
};

export default Order;
