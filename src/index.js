import React from 'react'
import ReactDOM from 'react-dom'
import App from './Component/App'
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./store/reducers/main/rootReducers";
import thunk from "redux-thunk";
import './index.css'


const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)


const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)


ReactDOM.render(app, document.getElementById('root'))