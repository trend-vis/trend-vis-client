import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import configureStore from './store'
import './styles/styles.scss'

import DataContainer from './containers/DataContainer'

const history = createBrowserHistory()
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={DataContainer} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
)