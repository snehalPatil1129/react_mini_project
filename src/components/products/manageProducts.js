import React, { Component,Fragment } from 'react'
import {Table,Col,Row,Button} from "react-bootstrap";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {deleteProduct}from "../../store/actions/actions";

class ManageProducts extends Component {

    onDelete = (id) => {
        this.props.deleteProduct(id);
    }

    render() {
         let tableEntries = (
             this.props.products.length > 0 ? this.props.products.map((product,id) => {
                return(
                    <tr key={id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        <td><Button variant="outline-warning"><Link to={`/productForm/${product.id}`}>Update</Link></Button></td>
                        <td><Button variant="outline-danger" onClick={(e) => this.onDelete(product.id)}>Delete</Button></td>
                    </tr>
            )
             }) : null
            
         )
        return (
            <Fragment>
                <Row>
                    <Col xs="12" md="10"/>
                    <Col md="2">
                        <Button variant="outline-primary" >
                            <Link to="/productForm">Add Product</Link>
                        </Button>
                    </Col>
                </Row>
                <Row>
                <Col xs="12">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableEntries}
                    </tbody>
                </Table>
                </Col>
                </Row>
            </Fragment>
        )
    }
}
 
const mapStateToProps = state => {
    return {
        products: state.products
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
        deleteProduct : (id) => dispatch(deleteProduct(id)),
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(ManageProducts);