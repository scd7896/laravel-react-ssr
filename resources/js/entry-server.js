import App from './app';
import React from 'react'
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import { createStore } from 'redux';

const store = createStore(rootReducer, context);
const { packages } = context;

const html = ReactDOMServer.renderToString(
    <Provider store={store}>
        <StaticRouter location={context.url}>
            <App packages={packages}/>
        </StaticRouter>
    </Provider>
)
const htmlRender = (fromJava) => {
    const html = ReactDOMServer.renderToString(
        
            <StaticRouter location={fromJava}>
                <App />
            </StaticRouter>
        
    )
    return html;
}
dispatch(html);