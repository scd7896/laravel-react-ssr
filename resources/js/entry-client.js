import App from './app';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

const { packages } = window.__PRELOADED_STATE__;

render(
    <div>
        <BrowserRouter>
            <App packages={packages} />
        </BrowserRouter>
    </div>,
    document.getElementById('app')
);