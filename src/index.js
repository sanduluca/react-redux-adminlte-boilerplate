import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state/store';

/* ##################################################### */
/* */ window.$ = window.jQuery = require("jquery");   /* */
/*                AdminLTE require jQuery                */
/* ##################################################### */
require('bootstrap')
require('bootstrap/dist/css/bootstrap.min.css')
require('font-awesome/css/font-awesome.min.css')
require('admin-lte')
require('admin-lte/dist/css/AdminLTE.min.css')
require('admin-lte/dist/css/skins/_all-skins.min.css')


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
