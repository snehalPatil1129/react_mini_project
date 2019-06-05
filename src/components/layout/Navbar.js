import React,{useState,Fragment} from 'react'
import {
  Nav,
  Navbar,
  NavItem,
  Form,
  NavDropdown,
  Button,
  Badge
} from "react-bootstrap";
import PropTypes from "prop-types";
import {
  connect
} from "react-redux";
import {
  changeProductCategory
} from "../../store/actions/actions";
import { stat } from 'fs';


const NavbarHeader = props => {
  
    return (
      <Fragment>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand  href="#/">Organic Store</Navbar.Brand>
          <Nav className="mr-auto">
          <NavDropdown title={props.currentProductCategory} id="basic-nav-dropdown">
            <NavDropdown.Item  href="#/" onClick={() => props.changeProductCategory("All Products")}>All Categories</NavDropdown.Item>
            <NavDropdown.Item  href="#/" onClick={() => props.changeProductCategory("Breads")}>Bread</NavDropdown.Item>
            <NavDropdown.Item  href="#/" onClick={() => props.changeProductCategory("Dairy")}>Dairy</NavDropdown.Item>
            <NavDropdown.Item  href="#/" onClick={() => props.changeProductCategory("Fruits")}>Fruits</NavDropdown.Item>
            <NavDropdown.Item  href="#/" onClick={() => props.changeProductCategory("Seasoning and Spices")}>Seasoning and Spices</NavDropdown.Item>
            <NavDropdown.Item  href="#/" onClick={() => props.changeProductCategory("Vegetables")}>Vegetables</NavDropdown.Item>
          </NavDropdown>
            <NavItem>
              <Button variant="outline-warning" >
                  Cart   
                  <Badge variant="dark"> {props.cartCount}</Badge>
              </Button>
            </NavItem>
          </Nav>
          <Form inline>
            <Nav className="mr-auto">
              <Nav.Link href="#/manageproducts">Manage Products</Nav.Link>
            </Nav>
            <NavDropdown title="Admin" id="basic-nav-dropdown">
              <NavDropdown.Item  onClick={() => console.log("Alll")}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Form>
        </Navbar>
      </Fragment>
    )
}

const mapStateToProps = state => {
  return {
      currentProductCategory: state.currentProductCategory,
      cartCount :state.cartCount
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeProductCategory : (category) => dispatch(changeProductCategory(category))
  }
}



NavbarHeader.propTypes = {

}

export default connect(mapStateToProps,mapDispatchToProps)(NavbarHeader)
