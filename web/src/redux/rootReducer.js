import React from 'react'
import {combineReducers} from 'redux'

import datagrid from '../components/datagrid/datagridreducer'
import login from '../components/mycenter/login/loginreducer'
// import dangditexuan from '../components/list/texuan/dreducer'

export default combineReducers({
    datagrid,
    login
    // dangditexuan
})