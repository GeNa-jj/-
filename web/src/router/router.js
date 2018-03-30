import React from 'react'
import {Router, Route, hashHistory} from 'react-router'

import HomeComponent from '../components/home/homecomponent'
import LoginComponent from '../components/mycenter/login/logincomponent'
import ListComponent from '../components/list/listcomponent'
import RegisterComponent from '../components/mycenter/register/registercomponent'
import ChangepwdComponent from '../components/mycenter/changepassword/changepwdcomponent'
import CenterComponent from '../components/mycenter/center/centercomponent'
import DiscountComponent from '../components/home/discount/discountcomponent'
import MemberInfoComponent from '../components/mycenter/memberinfo/memberinfocomponent'
import DingdanComponent from '../components/list/dingdan/dingdan'
import CarComponent from '../components/header/card/cardcomponent'
import MyorderComponent from '../components/list/dingdan/xiangqing/xiangqing'
import DiziComponent from '../components/mycenter/dizhi/dizhi.js'



export default class RouterComponent extends React.Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={HomeComponent} />
                <Route path="/login" component={LoginComponent} />
                <Route path="/list" component={ListComponent} />
                <Route path="/register" component={RegisterComponent} />
                <Route path="/changepwd" component={ChangepwdComponent} />
                <Route path="/center" component={CenterComponent} />
                <Route path="/discount" component={DiscountComponent} />
                <Route path="/memberinfo" component={MemberInfoComponent} />
                <Route path="/dingdan" component={DingdanComponent} />
                <Route path="/car" component={CarComponent} />
                <Route path="/xiangqing" component={MyorderComponent} />
                <Route path="/dizi" component={DiziComponent} />
        
    
                
            </Router>
        )
    }
}
