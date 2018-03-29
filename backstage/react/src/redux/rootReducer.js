import React from 'react'
import {combineReducers} from 'redux'

import login from '../component/login/loginreducer'
import Main from '../component/main/mainreducer.js'
// import student from '../components/student/studentreducer'
// import modal from '../components/modal/modalreducer'

export default combineReducers({
    login,
    Main
})

