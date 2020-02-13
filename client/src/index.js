import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import store from './store';

import App from './components/App';

/**
 * TODO: Figure out features
 */
ReactDOM.render(
    <Provider store = {store}>
    <App />
    </Provider>,
    document.getElementById('root')
);
