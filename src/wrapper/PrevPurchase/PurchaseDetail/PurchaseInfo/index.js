import { DateFormat, Curency } from '../../../../util'

const PurchaseInfo = ({
  buyInfo: { dateTime, orderCode, status, totalPrice, orders },
}) => {
  return (
    <div className="purchase-info">
      <p className="purchase-titleBox">Purchase Information</p>
      <div className="purchase-info__dateTime">
        <p className="text-right">
          {DateFormat(dateTime)[0]} <span className="float-right pl-2">📅</span>
        </p>
        <p className="text-right">
          {DateFormat(dateTime)[1]} <span className="float-right pl-2">🕐</span>
        </p>
      </div>
      <div className="purchase-info__wrapper-content">
        <p className="mb-1 mt-2">
          <span>Order Code</span>
          <span className="spacer">:</span>
          <span className="text-primary">{orderCode}</span>
        </p>
        <p className="mb-1">
          <span>Status</span>
          <span className="spacer">:</span>
          <span className="text-primary">
            {status === 1 ? 'Delivery' : 'Sending'}
          </span>
        </p>
        <p className="mb-1">
          <span>Total Price</span>
          <span className="px-1"> : </span>
          <span className="text-primary">{Curency(totalPrice, true)}</span>
        </p>

        <div className="row m-0 bg-primary text-white d-none d-md-flex rounded mt-3">
          <p className="col-md-3">image</p>
          <p className="col-md-4">title</p>
          <p className="col-md-2">count</p>
          <p className="col-md-3">price</p>
        </div>
        <ul className="wrapper-order mt-3">
          {orders.map(({ title, count, image, price }) => (
            <li
              key={title}
              className="row mx-0 align-items-center text-center text-md-left"
            >
              <div className="col-5 col-md-3 wrapper-image pl-0">
                <img src={image} />
              </div>
              <p className="col-7 col-md-4 title-product">{title}</p>
              <p className="col-5 col-md-2 count-product">{count}</p>
              <p className="col-7 col-md-3 price-product">
                {Curency(price, true)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default PurchaseInfo
