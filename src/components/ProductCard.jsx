import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const cart = useContext(CartContext);
  const quantity = cart.getProductQuantity(product.id);
  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        {quantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6">
                {quantity} in cart
              </Form.Label>
              <Row sm='4'>
                <Button sm="6" onClick={()=>cart.addOneToCart(product.id)}className="mx-2">+</Button>
                <Button sm="6" onClick={()=>cart.removeOneFromCart(product.id)}className="mx-2">-</Button>
              </Row>
            </Form>
          </>
        ) : (
          <Button
            variant="primary"
            onClick={() => {
              cart.addOneToCart(product.id);
            }}
          >
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
