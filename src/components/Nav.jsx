
import { Button, Container, Navbar, Modal } from "react-bootstrap";

export default function Nav() {
  return (
    <Navbar expand="sm">
      <Navbar.Brand href="/">Store</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Button>Cart 0 Items</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}
