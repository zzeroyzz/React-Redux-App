import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import animeReducer from './reducer/index'
import thunk from "redux-thunk"
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
const store = createStore(animeReducer, applyMiddleware(thunk))

const rootElement = document.getElementById('root');
ReactDOM.render(   
<Provider store={store}><App /></Provider>
    
, rootElement);