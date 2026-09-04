import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { useState } from 'react'
import { Container } from 'react-bootstrap'

import { CartContext } from './CartContext'
import NavBar from './components/NavBar'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'
import products from './data/products.json'

function App() {
  const [cart, setCart] = useState([])

  // Looks up how many of a product are already in the cart. A plain loop,
  // same shape as the total below, because .find is not taught this mission.
  function getQuantity(id) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        return cart[i].quantity
      }
    }
    return 0
  }

  function addToCart(product) {
    const isAlreadyIn = cart.some((item) => item.id === product.id)

    if (isAlreadyIn) {
      changeQuantity(product.id, getQuantity(product.id) + 1)
    }
    else {
      setCart([...cart, {
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        image: product.image,
        quantity: 1,
      }])
    }
  }

  function changeQuantity(id, newQuantity) {
    if (newQuantity < 1) {
      return
    }

    const updated = cart.map((item) => {
      if (item.id === id) {
        return {
          id: item.id,
          name: item.name,
          category: item.category,
          price: item.price,
          image: item.image,
          quantity: newQuantity,
        }
      }
      return item
    })

    setCart(updated)
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, changeQuantity, removeFromCart }}>
      <NavBar />

      <Container className="ct-page">
        <div className="ct-layout">
          <div className="ct-products">
            <h1 className="ct-page-title">Shop</h1>

            <div className="ct-grid">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          <Cart />
        </div>
      </Container>
    </CartContext.Provider>
  )
}

export default App
