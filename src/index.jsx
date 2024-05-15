import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { fetchCategories } from './redux/actions/categories';
import { fetchProducts } from './redux/actions/products';
import { store } from './redux/store';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

store.dispatch(fetchCategories());
store.dispatch(fetchProducts());

ReactDOM.render(
    <div className="content">
        <div className="container">
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        </div>
    </div>,
    document.getElementById('root')
);
