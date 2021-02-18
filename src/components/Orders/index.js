import React from 'react'
import Order from './Order'
import { Curency } from '../../util'
import Wrapper from '../../hoc/Wrapper'

const Orders = ({ orders, plusFn, minusFn, deleteFn, checkSubmit, total }) => (
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
    <div className="custom-flex flex-wrap mt-4">
      <p className="col-md-8 m-md-0 text-md-right pr-5">
        Total Price :
        <strong
          className="ml-2 badge badge-secondary p-2 border-secondary px-2"
          style={{ fontSize: 15 }}
        >
          {Curency(total, true)}
        </strong>
      </p>
      <div className="col-md-4 text-md-left">
        <button onClick={checkSubmit} className="btn-continue fh text-white">
          Continue
        </button>
      </div>
    </div>
  </Wrapper>
)

export default Orders
