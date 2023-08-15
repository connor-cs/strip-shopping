import {Card, Button, Form, Row, Col} from 'react-bootstrap'

const ProductCard = ({prod}) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>${prod.price}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard