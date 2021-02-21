import React, { useState } from 'react'
import { products as prImage } from '../../help/images'
import Product from './Product'
import Wrapper from '../../hoc/Wrapper'
import { useCartSetState } from '../../context/CartProvider'
import TitlePage from '../../components/Ui/TitlePage'

const Products = () => {
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
    setOrders((prevOrders) => {
      let newOrders = [...prevOrders]
      const existing = newOrders.some(
        (item) => item.title === activeProduct.title,
      )
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
      return newOrders
    })
  }
  return (
    <Wrapper>
      <TitlePage>Products</TitlePage>
      <section className="products-wrapper mt-4">
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
    </Wrapper>
  )
}

export default Products
