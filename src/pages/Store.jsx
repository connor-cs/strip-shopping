import { Row, Col } from "react-bootstrap";
import { products } from "../products";
import ProductCard from "../components/ProductCard";


const Store = () => {
  return (
    <>
      <h1>this is the store</h1>
      <Row xs={1} md={3} className="g-4">
        {products.map((product) => (
          <Col align="center" key={product.id}>
            <ProductCard prod={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
