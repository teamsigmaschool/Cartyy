import { useContext } from 'react'
import { Navbar, Container, Badge } from 'react-bootstrap'
import { CartContext } from '../CartContext'

// Shows how many items are in the cart. Counts quantities, not rows,
// so two of the same product still shows as 2, not 1.
function NavBar() {
  const cart = useContext(CartContext).cart

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
