import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import searchReducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore( searchReducer );
const rootElement = document.getElementById( 'root' );

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    rootElement
);
