import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import Router from './src/router/router'
import store from './src/redux/configStore'

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('app')
)