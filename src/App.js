import React from 'react'
import Layout from './wrapper/Layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Products from './wrapper/Products'
import Cart from './wrapper/Cart'
import Main from './wrapper/Main'
import CartProvider from './contex/CartProvider'

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Main>
            <Switch>
              <Route path="/products" exact component={Products} />
              <Route path="/cart" exact component={Cart} />
            </Switch>
          </Main>
        </Layout>
      </Router>
    </CartProvider>
  )
}

export default App
