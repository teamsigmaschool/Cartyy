import '/src/App.css'

import { useContext } from 'react'
import { Navbar, Badge, Container } from 'react-bootstrap'
import { CartContext } from '../CartContext'

function NavBar() {
  const cartObject = useContext(CartContext)
  const cart = cartObject.cart

  let itemCount = 0
  for (let i = 0; i < cart.length; i++) {
    itemCount = itemCount + cart[i].quantity
  }

  return (
    <Navbar className="ct-navbar">
      <Container className="ct-navbar-inner">
        <Navbar.Brand className="ct-brand">Cartyy</Navbar.Brand>

        <div className="ct-cart-indicator">
          <span className="ct-cart-label">Cart</span>
          <Badge className="ct-cart-badge">{itemCount}</Badge>
        </div>
      </Container>
    </Navbar>
  )
}

export default NavBar