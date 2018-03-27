import React from 'react'
import {Router, Route, hashHistory} from 'react-router'

import HomeComponent from '../components/home/homecomponent'
import LoginComponent from '../components/mycenter/login/logincomponent'
import ListComponent from '../components/list/listcomponent'
import RegisterComponent from '../components/mycenter/register/registercomponent'
import ChangepwdComponent from '../components/mycenter/changepassword/changepwdcomponent'

export default class RouterComponent extends React.Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={HomeComponent} />
                <Route path="/login" component={LoginComponent} />
                <Route path="/list" component={ListComponent} />
                <Route path="/register" component={RegisterComponent} />
                <Route path="/changepwd" component={ChangepwdComponent} />

        

            </Router>
        )
    }
}
