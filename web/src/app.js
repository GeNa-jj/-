import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import './assets/common/common.css'

import Router from './router/router'
import store from './redux/configStore'

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('app')
)