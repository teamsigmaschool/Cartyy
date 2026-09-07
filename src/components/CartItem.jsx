import '/src/App.css'

import { Button } from 'react-bootstrap'

function CartItem({ item, onRemove, onIncrease, onDecrease }) {
  return (
    <div className="ct-cart-item">
      <div className="ct-cart-item-top">
        <img src={item.image} alt={item.name} className="ct-cart-item-image" />

        <div className="ct-cart-item-info">
          <p className="ct-cart-item-name">{item.name}</p>
          <p className="ct-cart-item-price">RM {item.price}</p>
        </div>
      </div>

      <div className="ct-cart-item-bottom">
        <div className="ct-qty">
          <Button className="ct-qty-btn" onClick={onDecrease}>-</Button>
          <span className="ct-qty-value">{item.quantity}</span>
          <Button className="ct-qty-btn" onClick={onIncrease}>+</Button>
        </div>

        <Button className="ct-remove-btn" onClick={onRemove}>Remove</Button>
      </div>
    </div>
  )
}

export default CartItem

