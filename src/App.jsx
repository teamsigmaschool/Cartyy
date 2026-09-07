import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// need to import it!
import { CartContext } from './CartContext'

import { useState } from 'react'

import { Container } from 'react-bootstrap'

import products from './data/products.json'
import ItemCard from './components/ItemCard'
import Cart from './components/Cart'

import NavBar from './components/NavBar'

function App() {
  const [cart, setCart] = useState([])

  function addToCart(item) {
    const isAlreadyIn = cart.some((product) => product.id === item.id)

    if (isAlreadyIn) {
      changeQuantity(item.id, getQuantity(item.id) + 1)
    }
    else {
      setCart([...cart,
      {
        id: item.id,
        name: item.name,
        category: item.category,
        price: item.price,
        image: item.image,
        quantity: 1,
      }])
    }
  }

  function removeFromCart(id) {
    // filter it out
    setCart(cart.filter((item) => item.id !== id))
  }

  function changeQuantity(id, newQuantity) {
    // cant be less than one
    if (newQuantity < 1) {
      return
    }

    // first time added to cart
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

      // already in cart
      return item
    })

    setCart(updated)
  }

  // helper function to find the item in the cart then get its current quantity
  function getQuantity(id) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        return cart[i].quantity
      }
    }
    return 0
  }

  return (

    // we pass everything to CartContext
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, changeQuantity }}>

      <NavBar />

      <Container className="ct-page">
        <div className="ct-layout">
          <div className="ct-products">
            <h1 className="ct-page-title">Shop</h1>

            <div className="ct-grid">
              {products.map((item) =>
              (
                <ItemCard key={item.id} item={item} />
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

