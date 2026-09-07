import '/src/App.css'

import { useContext } from 'react'
import { CartContext } from '../CartContext'
import CartItem from './CartItem'

function Cart() {
  const cartObject = useContext(CartContext)

  // this function will need the cart array context, since it will need it to display ofc
  const cart = cartObject.cart

  // uses the function to render per item, a button to remove
  const removeFromCart = cartObject.removeFromCart

  // like removeFromCart, can change the quantity of items in the cart per item
  const changeQuantity = cartObject.changeQuantity

  let total = 0
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].price * cart[i].quantity
  }

  return (
    <div className="ct-cart">
      <h2 className="ct-cart-title">Your Cart</h2>

      {cart.length === 0 && (
        <p className="ct-empty">Your cart is empty. Add something you like.</p>
      )}

      {cart.length > 0 &&
        (
          <div className="ct-cart-items">
            {cart.map((item) =>
            (
              <CartItem
                key={item.id}
                item={item}
                onRemove={() => removeFromCart(item.id)}

                // your good old counter function
                onIncrease={() => changeQuantity(item.id, item.quantity + 1)}
                onDecrease={() => changeQuantity(item.id, item.quantity - 1)}

              />
            ))}
          </div>
        )
      }

      <div className="ct-cart-total">
        <span>Total</span>
        <span className="ct-cart-total-amount">RM {total}</span>
      </div>
    </div>
  )
}

export default Cart