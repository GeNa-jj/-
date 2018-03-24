import React from 'react'
import {Router, Route, hashHistory} from 'react-router'

import HomeComponent from '../components/home/homecomponent'
import LoginComponent from '../components/login/logincomponent'
import ListComponent from '../components/list/listcomponent'

export default class RouterComponent extends React.Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={HomeComponent} />
                <Route path="/login" component={LoginComponent} />
                <Route path="/list" component={ListComponent} />
            </Router>
        )
    }
}
