import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from "react-redux"
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer'
import * as serviceWorker from './serviceWorker';

const initialState = {
    fetchedProducts: [] 
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose;

export const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
