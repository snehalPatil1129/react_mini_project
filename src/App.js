import React, { Component } from 'react'
import Navbar from "./components/layout/Navbar";
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Products from './components/products/Products';
import ManageProducts from "./components/products/manageProducts";
import {connect} from "react-redux";
import {getProducts}from "./store/actions/actions";
import ProductForm from "./components/products/ProductForm";
import Alert from "./components/layout/Alert";
class App extends Component {

  componentDidMount() {
    this.props.getProducts();
  }
  
  render() {
    return (
      <div className="App">
        <Router>
          <header>
            <Navbar />
          </header>
          <section className="container">
          {this.props.productError ? <Alert/> : null}
            <Switch>
              <Route exact path ="/products" component={Products} />
              <Route exact path ="/manageproducts" component={ManageProducts} />
              <Route path ="/productForm/:id" component={ProductForm} />
              <Route path ="/productForm" component={ProductForm} />
              <Redirect from="/" to="/products"/>
              <Redirect to="/"/>
            </Switch>
          </section>
        </Router> 
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products : state.products,
    productError :state.productError
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getProducts : () => dispatch(getProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);