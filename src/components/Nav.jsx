import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";

export default function Nav() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cart = useContext(CartContext);

  console.log(cart.items);

  function getTotalQty() {
    let total = 0;
    for (let prod of cart.items) {
      total += prod.quantity;
    }
    return total;
  }

  const total = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart {getTotalQty()} Items</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {total > 0 ? (
            <>
              <p>Items in your cart:</p>
              {cart.items.map((item) => (
                <CartProduct product={item} />
              ))}
              <h1>Total: ${cart.getTotalCost()}</h1>
            </>
          ) : (
            <p>nothing in your cart</p>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
