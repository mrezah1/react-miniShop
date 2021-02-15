import NavItem from '../NavItem'

const NavList = () => {
  return (
    <ul className="navbar-nav pl-4">
      <li className="nav-item mr-3">
        <NavItem cls="nav-link" link="/products">
          Products
        </NavItem>
      </li>
      <li className="nav-item mr-3">
        <NavItem cls="nav-link" link="/cart">
          Cart
        </NavItem>
      </li>
      <li className="nav-item mr-3">
        <NavItem cls="nav-link" link="/prev-purchase">
          Prev Purchase
        </NavItem>
      </li>
    </ul>
  )
}

export default NavList
