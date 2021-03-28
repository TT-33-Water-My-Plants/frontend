import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

import 'semantic-ui-css/semantic.min.css'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { reducer } from './store/store'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)

reportWebVitals()
