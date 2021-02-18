import React, { useState, useEffect } from 'react'
import Wrapper from '../../hoc/Wrapper'
import GlassBox from '../../hoc/GlassBox'
import Orders from '../../components/Orders'
import FinalOrders from '../../components/FinalOrders'
import FinalInfo from '../../components/FinalInfo'
import Modal from '../../components/Ui/Modal'
import Loading from '../../components/Ui/Loading'
import TitlePage from '../../components/Ui/TitlePage'
import { randomNumber } from '../../util'
import { useCartState, useCartSetState } from '../../context/CartProvider'

const Cart = () => {
  const [showModal, setShowModal] = useState(false)
  const [checkSubmit, setCheckSubmit] = useState(false)
  const [finalInfo, setFinalInfo] = useState(false)
  const [saveData, setSaveData] = useState({
    loading: false,
    saved: false,
  })
  const orders = useCartState()
  const setOrders = useCartSetState()

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
        dateTime: Date.now(),
        orderCode: randomNumber(10000, 99999),
        status: randomNumber(0, 1),
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        setSaveData({ loading: false, saved: true })
        setOrders([])
      })
      .catch((err) => setSaveData('error'))
  }
  const resetModal = () => {
    setShowModal(false)
    setCheckSubmit(false)
    setFinalInfo(false)
    setSaveData({ loading: false, saved: false })
  }

  const totalPrice = orders.reduce(
    (acc, { price, count }) => acc + price * count,
    0,
  )
  return (
    <Wrapper>
      <TitlePage>Your Cart</TitlePage>
      <GlassBox>
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
      </GlassBox>
      <Modal cls="text-center" closer={resetModal} isShow={showModal}>
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
          <p className="alert alert-success m-0">
            Order registration completed successfully
          </p>
        )}
        {saveData === 'error' && (
          <p className="alert alert-danger m-0">Falied to registration order</p>
        )}
      </Modal>
    </Wrapper>
  )
}
export default Cart
