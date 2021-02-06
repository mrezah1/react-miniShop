import React, { useState } from "react";
import Orders from "../../components/Orders";

const Main = (props) => {
  const [orders, setOrders] = useState([
    { title: "Book", price: 1200, count: 2 },
    { title: "Pencil", price: 800, count: 4 },
    { title: "Laptop", price: 12000, count: 1 },
    { title: "Airpod", price: 4200, count: 3 },
  ]);
  const plusCountHanlder = (productIndex) => {
    const newOrders = [...orders];
    newOrders[productIndex].count = newOrders[productIndex].count + 1;
    setOrders(newOrders);
  };
  const minusProductHandler = (productIndex) => {
    const newOrders = [...orders];
    let count = newOrders[productIndex].count;
    newOrders[productIndex].count = count > 1 ? count - 1 : count;
    setOrders(newOrders);
  };
  const deleteProductHandler = (productIndex) => {
    const newOrders = [...orders];
    newOrders.splice(productIndex, 1);
    setOrders(newOrders);
  };
  return (
    <div className="col-md-10 mx-auto main p-5 text-center">
      <h2>My Cart</h2>
      <section className="orders-wrapper p-3 mt-4 text-center">
        {orders.length > 0 ? (
          <Orders
            orders={orders}
            plusFn={plusCountHanlder}
            minusFn={minusProductHandler}
            deleteFn={deleteProductHandler}
          />
        ) : (
          <p className="m-0">Your Cart is empty!</p>
        )}
      </section>
      <section className="products-wrapper">
        
      </section>
    </div>
  );
};

export default Main;
