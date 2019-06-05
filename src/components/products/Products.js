import React from 'react'
import {connect} from "react-redux";
import {Card,Row,Col, Button} from "react-bootstrap";
import {addToCart} from "../../store/actions/actions";

const Products = (props) => {
    let products = [];
    if(props.currentProductCategory === "Breads"){
        products = props.breads;
    }else if (props.currentProductCategory === "Dairy") {
        products = props.dairy;
    }else if (props.currentProductCategory === "Fruits") {
        products = props.fruits;
    }else if (props.currentProductCategory === "Seasoning and Spices") {
        products = props.seasoningAndSpices;
    }else if (props.currentProductCategory === "Vegetables") {
        products = props.vegetables;
    }else{
        products = props.products;
    }
    return (
        <div>
            <Row>
                <h2>{props.currentProductCategory}</h2>
            </Row>
            <Row>
           {
               products.length > 0 ? 
                products.map((product,id) => {
                    return(
                        <Col xs="12" md="3">
                            <Card style={{padding: 5}} key={id}>
                                <Card.Header>
                                    {product.title}
                                </Card.Header>
                                <Card.Body>
                                        <img alt="" src={product.imageUrl} width="200" height="150"/>
                                        <p style={{marginLeft:80}}>Rs.{product.price}</p>
                                </Card.Body>
                                <Card.Footer>
                                    <Col xs="12" md="12">
                                        <Button style={{width: 'inherit'}} variant="outline-success" onClick={props.addToCart}>Add to cart</Button>
                                    </Col>
                                </Card.Footer>
                            </Card>
                        </Col>
                    )
                }) : <p>No products found for this category</p>
           } 
        </Row>
        </div>
       
    )
}

const mapStateToProps = state => {
    return {
        products: state.products,
        vegetables: state.vegetables,
        fruits: state.fruits,
        dairy: state.dairy,
        breads: state.breads,
        seasoningAndSpices: state.seasoningAndSpices,
        currentProductCategory: state.currentProductCategory
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
        addToCart : () => dispatch(addToCart())
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(Products);

