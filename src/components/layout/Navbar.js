import React from 'react'
import  {Nav,Navbar,NavItem,Form,NavDropdown ,Button}from "react-bootstrap";

const navbar = () => {
    return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand >Organic Store</Navbar.Brand>
          <Nav className="mr-auto">
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item  onClick={() => console.log("Alll")}>All Categories</NavDropdown.Item>
            <NavDropdown.Item onClick={() => console.log("Bread")}>Bread</NavDropdown.Item>
            <NavDropdown.Item onClick={() => console.log("Dairy")}>Dairy</NavDropdown.Item>
            <NavDropdown.Item onClick={() => console.log("Fruits")}>Fruits</NavDropdown.Item>
            <NavDropdown.Item onClick={() => console.log("Seasoning")}>Seasoning and spices</NavDropdown.Item>
            <NavDropdown.Item onClick={() => console.log("Vegetables")}>Vegetables</NavDropdown.Item>
          </NavDropdown>
            <NavItem>
               <Button variant="outline-warning">Cart 4</Button>
            </NavItem>
          </Nav>
          <Form inline>
          <NavDropdown title="Admin" id="basic-nav-dropdown">
            <NavDropdown.Item  onClick={() => console.log("Alll")}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Form>
        </Navbar>
    )
}

export default navbar;
