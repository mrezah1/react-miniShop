import Product from './Product'

const Products = ({ products, addToCart }) => {
  return (
    <div className="row">
      {products.map(({ title, price, image }, index) => (
        <Product
          key={title}
          title={title}
          price={price}
          image={image}
          addToCart={(e) => addToCart(e, products[index])}
        />
      ))}
    </div>
  )
}

export default Products
