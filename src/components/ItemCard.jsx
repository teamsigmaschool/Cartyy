import '/src/App.css'

import { Card, Button } from 'react-bootstrap'

import { useContext } from 'react'
import { CartContext } from '../CartContext'

function ItemCard({ item }) {
  // here we use the context provided from app
  const cartObject = useContext(CartContext)

  // instead of just a string, a whole function gets passed
  const addToCart = cartObject.addToCart

  return (
    <Card className="ct-card">
      <div className="ct-card-media">
        <img src={item.image} alt={item.name} />
      </div>

      <Card.Body className="ct-card-body">
        <p className="ct-card-category">{item.category}</p>
        <Card.Title className="ct-card-title">{item.name}</Card.Title>
        <p className="ct-card-price">RM {item.price}</p>

        <Button
          className="ct-add-btn"
          onClick={() => addToCart(item)}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ItemCard

