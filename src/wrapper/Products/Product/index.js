import Curency from "../../../util/Curency";
import "./style.css";

const Product = ({ title, price, image, addToCart,textBtn }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 px-2 product-item mb-3">
      <div className="product-item__image">
        <img src={image} alt={title} className="w-100 rounded-top" height="150" />
      </div>
      <div className="product-item__main bg-white rounded p-2 text-left">
        <p className="product-item__title mb-2">{title}</p>
        <p className="product-item__price m-0 text-danger">
          {Curency(price, true)}
        </p>
        <button
          onClick={addToCart}
          className="product-item__add mt-4 bg-primary py-1 fh text-white"
        >
          {textBtn}
        </button>
      </div>
    </div>
  );
};
export default Product;
