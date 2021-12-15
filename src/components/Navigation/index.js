import React, { useState } from 'react'
import NavList from './NavList'
import Container from '../../wrapper/Container'
import CartNav from './CartNav'
import Logo from '../Logo'
import NavItem from './NavItem'
import './style.css'

const Navigation = (props) => {
  const [navStatus, setNavStatus] = useState(window.innerWidth > 768)
  return (
    <header className="bg-light">
      <Container cls="px-2">
        <nav
          className="navbar navbar-dark navbar-expand-md"
          style={{ padding: '6px 0' }}
        >
          <NavItem link="/" cls="float-left">
            <Logo width="50" height="45" />
          </NavItem>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setNavStatus(!navStatus)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse justify-content-between navbar-collapse ${
              navStatus && 'show'
            }`}
            id="navbarNav"
          >
            <NavList />
            <CartNav />
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Navigation
