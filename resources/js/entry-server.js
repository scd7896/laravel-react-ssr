import App from './app';
import React from 'react'
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

const { packages } = context;

const html = ReactDOMServer.renderToString(
    <StaticRouter location={context.url}>
        <App packages={packages}/>
    </StaticRouter>
)

dispatch(html);