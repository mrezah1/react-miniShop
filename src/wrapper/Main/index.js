import React, { useState, useEffect } from 'react'
import Orders from '../../components/Orders'
import Products from '../../components/Products'
import { products as prImage } from '../../help/images'
import './style.css'

const Main = (props) => {
  const [products, setProducts] = useState([
    {
      title: 'Book',
      price: 999,
      image: prImage.book,
    },
    {
      title: 'Pencil',
      price: 889,
      image: prImage.pencil,
    },
    {
      title: 'Laptop',
      price: 1299,
      image: prImage.laptop,
    },
    {
      title: 'Airpod',
      price: 4289,
      image: prImage.airpod,
    },
  ])
  const [orders, setOrders] = useState([])
  const plusCountHanlder = (productIndex) => {
    const newOrders = [...orders]
    newOrders[productIndex].count = newOrders[productIndex].count + 1
    setOrders(newOrders)
  }
  const minusProductHandler = (productIndex) => {
    const newOrders = [...orders]
    let count = newOrders[productIndex].count
    newOrders[productIndex].count = count > 1 ? count - 1 : count
    setOrders(newOrders)
  }
  const deleteProductHandler = (productIndex) => {
    const newOrders = [...orders]
    newOrders.splice(productIndex, 1)
    setOrders(newOrders)
  }
  const addToCartHandler = (product) => {
    let newOrders = [...orders]
    const existing = orders.some((item) => item.title === product.title)
    if (existing)
      newOrders = newOrders.map((item) => {
        item.title === product.title && (item.count = item.count + 1)
        return item
      })
    else
      newOrders.push({
        ...product,
        count: 1,
      })
    setOrders(newOrders)
  }

  return (
    <div className="col-12 col-md-9 py-5 mx-auto main text-center">
      <h2>My Cart</h2>
      <section className="orders-wrapper px-3 py-2 mt-4 text-center">
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
      <section className="products-wrapper mt-5">
        {products.length > 0 ? (
          <Products products={products} addToCart={addToCartHandler} />
        ) : (
          <p>Not Exist Produc!</p>
        )}
      </section>
    </div>
  )
}

export default Main
