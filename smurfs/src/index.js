import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import {reducer} from './store/reducers'

import "./index.css";

import AppFinal from "./App";

const store = createStore(reducer, applyMiddleware(thunk, logger))

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <AppFinal />
  </Provider>,
  rootElement
)
