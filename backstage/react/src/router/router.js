import React from 'react'
import ReactDOM from 'react-dom'
import {Route} from 'react-router'
import {Router, hashHistory, browserHistory} from 'react-router'
import Login from '../component/login/login.js'
import Home from '../component/home/homecomponent.js'
import Main from '../component/main/maincomponent.js'
import datagrid from '../component/datagrid/datagridcomponent.js'
export default(
     <Route path="/" >
        <Route path='/login' component={Login}/> 
        <Route path='/home' component={Home}> 
            <Route path='/home/main(/:orderid)' component={Main}/>
            <Route path='/home/custom(/:name)' component={datagrid}/> 
        </Route>  
       
    </Route>
 )       
