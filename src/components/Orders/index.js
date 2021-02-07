import React from "react";
import Order from "./Order";
import Curency from "../../util/Curency";
import Wrapper from "../../hoc/Wrapper";

const Orders = ({ orders, plusFn, minusFn, deleteFn }) => (
  <Wrapper>
    <div className="cart-product bg-white row m-0 rounded mb-3 d-none d-md-flex">
      <p className="cart-product__title col-md-6 text-left">title</p>
      <p className="cart-product__price col-md-2">price</p>
      <p className="cart-product__count col-md-2">count</p>
      <p className="cart-product__remove col-md-2"></p>
    </div>
    {orders.map(({ title, price, count }, index) => (
      <Order
        key={title}
        title={title}
        count={count}
        price={price}
        plus={() => plusFn(index)}
        minus={() => minusFn(index)}
        delete={() => deleteFn(index)}
      />
    ))}
    <div>
      <p className="m-0 mt-4">
        Total Price :
        <span className="badge badge-success ml-2 p-2" style={{ fontSize: 15 }}>
          {Curency(
            orders.reduce((acc, { price, count }) => acc + price * count, 0),
            true
          )}
        </span>
      </p>
    </div>
  </Wrapper>
);

export default Orders;
