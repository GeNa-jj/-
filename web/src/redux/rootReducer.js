import React from 'react'
import {combineReducers} from 'redux'

import datagrid from '../components/datagrid/datagridreducer'
import login from '../components/login/loginreducer'
// import modal from '../components/modal/modalreducer'

export default combineReducers({
    datagrid,
    login
})