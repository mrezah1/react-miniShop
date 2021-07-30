import './style.css'
import React from 'react'
import Navigation from '../../components/Navigation'
import Container from '../../wrapper/Container'
import Wrapper from '../../hoc/Wrapper'

const Layout = ({ children }) => (
  <Wrapper>
    <Navigation />
    <main>
      <Container>{children}</Container>
    </main>
  </Wrapper>
)

export default Layout
