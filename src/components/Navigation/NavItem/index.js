import { Link } from 'react-router-dom'

const NavItem = ({ type,cls='', link, children }) => {
  return type === 'ancer' ? (
    <a className={`${cls}`} href={link}>{children}</a>
  ) : (
    <Link className={`${cls}`} to={link}>{children}</Link>
  )
}

export default NavItem
