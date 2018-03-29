import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './redux/configStore'
import {Router, hashHistory, browserHistory} from 'react-router'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import routes from './router/router.js'
ReactDOM.render(
    <Provider store={store}>
     <Router history={hashHistory} routes={routes}>
     </Router>
     </Provider>,
    document.getElementById('app')
)