import NavItem from '../../../components/Navigation/NavItem'
import { Curency, DateFormat } from '../../../util'
const PurchaseItem = ({ code, date, status, totalPrice }) => {
  return (
    <li className="row m-0 prevPurch text-left align-items-center">
      <p className="prevPurch__code m-md-0 col-6 col-md-3">{code}</p>
      <p className="prevPurch__date m-md-0 col-6 col-md-3">
        <span className="myBadge bg-primary text-white">
          {DateFormat(date)[0]}
        </span>
      </p>
      <p className="prevPurch__status m-md-0 col-6 col-md-2">
        <span
          className={`myBadge text-white ${
            status == 1 ? 'bg-success' : 'bgc-warning'
          }`}
        >
          {status == 1 ? 'Delivery' : 'Sending...'}
        </span>
      </p>
      <p className="prevPurch__priceAll m-md-0 col-6 col-md-2">
        {Curency(totalPrice, true)}
      </p>
      <p className="prevPurch__detailBtn m-md-0 col-12 col-md-2">
        <NavItem cls="d-block text-center fh" link={'/prev-purchase/' + code}>
          more detail
        </NavItem>
      </p>
    </li>
  )
}

export default PurchaseItem
