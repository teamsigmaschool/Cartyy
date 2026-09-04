import { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import { CartContext } from '../CartContext'

function ProductCard({ product }) {
  const addToCart = useContext(CartContext).addToCart

  return (
    <Card className="ct-card">
      <div className="ct-card-media">
        <img src={product.image} alt={product.name} />
      </div>

      <Card.Body className="ct-card-body">
        <p className="ct-card-category">{product.category}</p>
        <Card.Title className="ct-card-title">{product.name}</Card.Title>
        <p className="ct-card-price">RM {product.price}</p>

        <Button
          className="ct-add-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
