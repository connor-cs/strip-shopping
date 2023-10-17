import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { getProductData } from "../products";
import { Button } from "react-bootstrap";

const CartProduct = ({ product }) => {
  const cart = useContext(CartContext);
  const data = getProductData(product.id);
  const price = data.price;
  const subtotal = parseInt(product.quantity) * parseInt(price);
  

  return (
    <div key={product.id} className="d-flex justify-content-between">
      <h3>{product.title}</h3>
      <p>Quantity: {product.quantity}</p>
      <p>${subtotal.toString()}</p>
      <Button size="sm" variant="danger" className="m-1"onClick={()=>cart.deleteFromCart(product.id)}>Remove</Button>
    </div>
  );
};

export default CartProduct;
