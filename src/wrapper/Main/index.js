import React, { useState } from "react";
import Products from "../../components/Products";

const Main = (props) => {
  const [orders, setOrders] = useState([
    { title: "Book", price: 1200, count: 2 },
    { title: "Pencil", price: 800, count: 4 },
    { title: "Laptop", price: 12000, count: 1 },
    { title: "Airpod", price: 4200, count: 3 },
  ]);
  return (
    <div className="col-md-10 mx-auto main p-5 text-center">
      <h2 className="">My Cart</h2>
      <Products orders={orders} />
    </div>
  );
};

export default Main;
