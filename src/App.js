import React, { Component } from 'react'
import Navbar from "./components/layout/Navbar";
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Products from './components/Products';
class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <header>
            <Navbar />
          </header>
          <section className="container">
            <Switch>
              <Route exact path ="/products" component={Products} />
              <Redirect from="/" to="/products"/>
              <Redirect to="/"/>
            </Switch>
          </section>
        </Router> 
      </div>
    )
  }
}
export default App;