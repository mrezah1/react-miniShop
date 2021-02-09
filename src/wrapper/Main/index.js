import React, { useState, useEffect } from 'react'
import Orders from '../../components/Orders'
import Products from '../../components/Products'
import Modal from '../../components/Ui/Modal'
import FinalOrders from '../../components/FinalOrders'
import { products as prImage } from '../../help/images'
import './style.css'

const Main = (props) => {
  const [checkSubmit, setCheckSubmit] = useState(false)
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
  let adedTitle = true
  const addToCartHandler = (event, product) => {
    adedTitle && (event.target.innerHTML = 'aded !')
    adedTitle = false
      setTimeout(() => {
        event.target.innerHTML = 'Add to Cart'
        adedTitle = true
      }, 2800)
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
  useEffect(() => {
    const orderItems = JSON.parse(localStorage.getItem('orders'))
    setOrders(orderItems)
  }, [])
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders))
  }, [orders])
  const totalPrice = orders.reduce(
    (acc, { price, count }) => acc + price * count,
    0,
  )
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
            total={totalPrice}
            checkSubmit={() => setCheckSubmit(true)}
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

      <Modal closer={() => setCheckSubmit(false)} isShow={checkSubmit}>
        <FinalOrders
          orders={orders}
          total={totalPrice}
          closer={() => setCheckSubmit(false)}
          submit={() => alert(true)}
        />
      </Modal>
    </div>
  )
}

export default Main
