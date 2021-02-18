import Icon from '../../../help/Icon'
import NavItem from '../NavItem'
import { useCartState } from '../../../context/CartProvider'
import './style.css'

const CartNav = () => {
  const orders = useCartState()
  return (
    <NavItem cls="cartNav__btn" link="/cart">
      <Icon name="cart" className="cartNav__icon" />
      <span className="cartNav__lbl badge bg_danger text-white">
        {orders.length}
      </span>
    </NavItem>
  )
}

export default CartNav
