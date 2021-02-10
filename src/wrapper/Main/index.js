import React, { useState, useEffect } from 'react'
import { products as prImage } from '../../help/images'
import Orders from '../../components/Orders'
import Products from '../../components/Products'
import FinalOrders from '../../components/FinalOrders'
import FinalInfo from '../../components/FinalInfo'
import Modal from '../../components/Ui/Modal'
import Loading from '../../components/Ui/Loading'
import './style.css'

const Main = (props) => {
  const [showModal, setShowModal] = useState(false)
  const [checkSubmit, setCheckSubmit] = useState(false)
  const [finalInfo, setFinalInfo] = useState(false)
  const [saveData, setSaveData] = useState({
    loading: false,
    saved: false,
  })
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

  const totalPrice = orders.reduce(
    (acc, { price, count }) => acc + price * count,
    0,
  )
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
    }, 500)
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
  const savePurchase = (data) => {
    setSaveData({ ...saveData, loading: true })
    setFinalInfo(false)
    fetch('https://react-cart-bf608-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userInfo: data,
        orders,
        totalPrice: totalPrice,
        orderCode: Math.floor(Math.random() * 100000),
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        setSaveData({ loading: false, saved: true })
        setOrders([])
        setTimeout(resetModal, 15000)
      })
  }
  const resetModal = () => {
    setShowModal(false)
    setCheckSubmit(false)
    setFinalInfo(false)
    setSaveData({ loading: false, saved: false })
  }

  useEffect(() => {
    const orderItems = JSON.parse(localStorage.getItem('orders'))
    setOrders(orderItems)
  }, [])
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders))
  }, [orders])
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
            checkSubmit={() => {
              setShowModal(true)
              setCheckSubmit(true)
            }}
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

      <Modal closer={resetModal} isShow={showModal}>
        {checkSubmit && (
          <FinalOrders
            orders={orders}
            total={totalPrice}
            closer={resetModal}
            submit={() => {
              setCheckSubmit(false)
              setFinalInfo(true)
            }}
          />
        )}
        {finalInfo && (
          <FinalInfo
            back={() => {
              setFinalInfo(false)
              setCheckSubmit(true)
            }}
            closer={resetModal}
            submit={savePurchase}
          />
        )}
        {saveData.loading && <Loading />}
        {saveData.saved && (
          <p className="text-success m-0">
            Order registration completed successfully
          </p>
        )}
      </Modal>
    </div>
  )
}

export default Main
