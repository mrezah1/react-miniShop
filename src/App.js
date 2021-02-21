import React from 'react'
import Layout from './wrapper/Layout'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Products from './wrapper/Products'
import Cart from './wrapper/Cart'
import Main from './wrapper/Main'
import CartProvider from './context/CartProvider'
import PrevPurchase from './wrapper/PrevPurchase'
import PurchaseDetail from './wrapper/PrevPurchase/PurchaseDetail'
import TitlePage from './components/Ui/TitlePage'
import NoMatch from './components/NoMatch'

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Main>
            <Switch>
              <Route
                exact
                path="/"
                render={() => <TitlePage>Home Page</TitlePage>}
              />
              <Route path="/products" exact component={Products} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/prev-purchase" exact component={PrevPurchase} />
              <Route
                path="/prev-purchase/:id"
                exact
                component={PurchaseDetail}
              />
              <Route path="/404" component={NoMatch} />
              <Redirect from="*" to="/404" />
            </Switch>
          </Main>
        </Layout>
      </Router>
    </CartProvider>
  )
}

export default App
