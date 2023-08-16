import { Row, Col } from "react-bootstrap";
import { products } from "../products";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const Store = () => {
const cart = useContext(CartContext)

  return (
    <>
      <h1>this is the store</h1>
      <Row xs={1} md={3} className="g-4">
        {products.map((product) => (
          <Col align="center" key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
