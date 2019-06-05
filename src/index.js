import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from "react-redux";
import store from "./store";
import App from './App';

const MainApp = () =>  (
    <Provider store={store}>
        <App/>
    </Provider>
);
ReactDOM.render(<MainApp />, document.getElementById('root'));