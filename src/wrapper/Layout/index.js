import './style.css'
import React from 'react'
import Navigation from '../../components/Navigation'
import Wrapper from '../../hoc/Wrapper'

const Layout = ({ children }) => (
  <Wrapper>
    <Navigation />
    <main>{children}</main>
  </Wrapper>
)

export default Layout
