import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";

const ProductCard = ( {product} ) => {
  const cart = useContext(CartContext);
  // console.log(product);
  // console.log(cart.items)
  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            cart.addOneToCart(product.id);
          }}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
