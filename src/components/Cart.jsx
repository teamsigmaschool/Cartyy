import { useContext } from 'react'
import { CartContext } from '../CartContext'
import CartItem from './CartItem'

function Cart() {
  const cart = useContext(CartContext).cart
  const changeQuantity = useContext(CartContext).changeQuantity
  const removeFromCart = useContext(CartContext).removeFromCart

  // The total is worked out here, every render, never kept in state.
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

      {cart.length > 0 && (
        <div className="ct-cart-items">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={() => changeQuantity(item.id, item.quantity + 1)}
              onDecrease={() => changeQuantity(item.id, item.quantity - 1)}
              onRemove={() => removeFromCart(item.id)}
            />
          ))}
        </div>
      )}

      <div className="ct-cart-total">
        <span>Total</span>
        <span className="ct-cart-total-amount">RM {total}</span>
      </div>
    </div>
  )
}

export default Cart
