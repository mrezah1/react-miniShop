import React, { useEffect } from 'react'

const CartContext = React.createContext()
const CartSetContext = React.createContext()

const CartProvider = ({ children }) => {
  const prevOrders = JSON.parse(localStorage.getItem('orders')) || []
  const [cart, setCart] = React.useState(prevOrders)
  useEffect(() => {
    const newCart = JSON.stringify(cart)
    localStorage.setItem('orders', newCart)
  }, [cart])
  return (
    <CartContext.Provider value={cart}>
      <CartSetContext.Provider value={setCart}>
        {children}
      </CartSetContext.Provider>
    </CartContext.Provider>
  )
}

const useCartState = () => {
  return React.useContext(CartContext)
}
const useCartSetState = () => {
  return React.useContext(CartSetContext)
}
export { useCartState, useCartSetState, CartProvider as default }
