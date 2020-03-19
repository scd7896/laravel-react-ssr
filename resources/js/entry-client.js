import App from './app';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { createStore } from 'redux';
import rootReducer from './reducer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, window.__PRELOADED_STATE__);
const { packages } = window.__PRELOADED_STATE__;

render(
    <Provider store={store}>
        <BrowserRouter>
            <App packages={packages} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);