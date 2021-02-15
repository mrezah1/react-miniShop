import React, { useState } from 'react'
import { products as prImage } from '../../help/images'
import Product from './Product'
import { useCartState, useCartSetState } from '../../contex/CartProvider'
import TitlePage from '../../components/Ui/TitlePage'

const Products = () => {
  const orders = useCartState()
  const setOrders = useCartSetState()
  const [products, setProducts] = useState([
    {
      title: 'Book',
      price: 999,
      image: prImage.book,
      textBtn: 'Add to Cart',
    },
    {
      title: 'Pencil',
      price: 889,
      image: prImage.pencil,
      textBtn: 'Add to Cart',
    },
    {
      title: 'Laptop',
      price: 1299,
      image: prImage.laptop,
      textBtn: 'Add to Cart',
    },
    {
      title: 'Airpod',
      price: 4289,
      image: prImage.airpod,
      textBtn: 'Add to Cart',
    },
  ])
  const addToCartHandler = (index) => {
    let newProducts = [...products]
    newProducts[index].textBtn = 'aded !'
    setProducts(newProducts)
    setTimeout(() => {
      newProducts = [...products]
      newProducts[index].textBtn = 'Add to Cart'
      setProducts(newProducts)
    }, 350)
    // add to cart
    const activeProduct = products[index]
    let newOrders = [...orders]
    const existing = orders.some((item) => item.title === activeProduct.title)
    if (existing)
      newOrders = newOrders.map((item) => {
        item.title === activeProduct.title && (item.count = item.count + 1)
        return item
      })
    else
      newOrders.push({
        title: activeProduct.title,
        price: activeProduct.price,
        image: activeProduct.image,
        count: 1,
      })
    setOrders(newOrders)
  }
  return (
    <section className="products-wrapper mt-5">
      <TitlePage>Products</TitlePage>
      <div className="row mt-4 pt-3">
        {products.length > 0 ? (
          products.map(({ title, price, image, textBtn }, index) => (
            <Product
              key={title}
              title={title}
              price={price}
              image={image}
              textBtn={textBtn}
              addToCart={(e) => addToCartHandler(index)}
            />
          ))
        ) : (
          <p>Not Exist Produc!</p>
        )}
      </div>
    </section>
  )
}

export default Products
