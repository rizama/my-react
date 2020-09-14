import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './container/Home/Home'
import { createStore } from 'redux';
import { Provider } from 'react-redux';


// initial State Global
const globalState = {
    totalOrder: 1
}

// Reducer 
const rootReducer = (state = globalState, action) => {
    return state
}

// Store Global
const storeGlobal = createStore(rootReducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeGlobal}> {/* untuk menyambungkan component ke store global */}
            <Home />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
