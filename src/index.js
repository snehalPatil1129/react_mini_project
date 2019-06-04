import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from "react-redux";
import store from "./store";
import App from './App';
import {Route,HashRouter as Router, Switch, Redirect} from "react-router-dom";

import Products from './components/Products';

const MainApp = () =>  (
    <Provider store={store}>
        <App/>
    </Provider>
);
ReactDOM.render(<MainApp />, document.getElementById('root'));