import React, {
    Component,
    Fragment
} from 'react'
import {
    connect
} from 'react-redux';
import {
    Button,
    Col,
    Row,
    Form
} from "react-bootstrap";
import InputElement from "../layout/InputElement";
import Dropdown from "../layout/Dropdown";
import {getProducts, createProduct,updateProduct}from "../../store/actions/actions";

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                id: "",
                title: "",
                titleRequired: false,
                category: "",
                categoryRequired: false,
                imageUrl: "",
                price: "",
                priceRequired: false
            },
            updateProduct : false
        }
    }
    componentDidMount() {
        this.props.getProducts();
        setTimeout(() => {
            if(this.props.match.params.id){
                let product = this.props.products.find(product => product.id === parseInt(this.props.match.params.id));
                if(product){
                    this.setState({updateProduct : true, product: product});
                }else{
                    this.props.history.push("/manageproducts");
                }
            }
        },1000);
    }
    onChange = (e) => {
        let product = {
            ...this.state.product
        };
        product[e.target.name] = e.target.value;
        product[e.target.name + "Required"] = false;
        this.setState({
            product
        });
    }
    onSelect = (e) => {
        let product = {
            ...this.state.product
        };
        product.category = e.target.value;
        product.categoryRequired = false;
        this.setState({
            product
        });
    }
    onSubmit = (e) => {
        e.preventDefault();
        let product = {
            ...this.state.product
        };
        const { title, category, imageUrl, price, id } = product;
        let createProduct = { title, category,imageUrl,price };
        if (this.validateData()) {
            if(this.state.updateProduct){
                this.props.updateProduct(id ,createProduct);
            }else{
                this.props.createProduct(createProduct);
            }
            this.props.history.push("/manageproducts");
        }
    }
    validateData() {
        let product = {
            ...this.state.product
        };
        if (product.title.trim().length > 0 && product.category && product.price > 0) {
            return true;
        } else {
            if (product.title.trim().length <= 0) product.titleRequired = true;
            if (!product.category) product.categoryRequired = true;
            if (product.price <= 0) product.priceRequired = true;
            this.setState({
                product
            });
            return false;
        }
    }
    render() {
        const product = {...this.state.product};
        return (
            <Fragment>
                <Form>
                    <Row>
                        <Col xs="12" md="3">
                            {
                                this.state.updateProduct ? <h3>Update product</h3> : <h3>Create product</h3>
                            }
                        </Col>
                    </Row>
                    <Row>
                            <Col xs="12" md="5">
                                <InputElement 
                                    type="text"
                                    label="Name"
                                    placeholder="Enter name for product"
                                    name="title"
                                    value={product.title}
                                    required={product.titleRequired}
                                    onChange={this.onChange}
                                />
                            </Col>
                            <Col md="5">
                                <Dropdown 
                                    onChange={this.onSelect}
                                    required={product.categoryRequired}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" md="5">
                                <InputElement 
                                    type="text"
                                    label="Image Url"
                                    placeholder="Enter image url for product"
                                    name="imageUrl"
                                    value={product.imageUrl}
                                    onChange={this.onChange}
                                />
                            </Col>
                            <Col md="5">
                            <InputElement
                                type="number"
                                label="Price"
                                placeholder="Enter price for product"
                                name="price"
                                value={product.price}
                                required={product.priceRequired}
                                onChange={this.onChange}
                            />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col xs="12" md="2">
                                <Button variant="primary" type="submit" onClick={(e) => this.onSubmit(e)}>
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                </Form>
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
        getProducts : () => dispatch(getProducts()),
        createProduct : (product) => dispatch(createProduct(product)),
        updateProduct : (id,product) => dispatch(updateProduct(id,product))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductForm);