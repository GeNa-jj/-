import React from 'react'

import './myorder.scss'

import HeaderComponent from '../../../header/headercomponent'

import Myorderbody from './myorderbody'

export default class Myorder extends React.Component{
    componentDidMount(){
        // .eq(0).html('22222')
        $('.header_c').html('我的订单').css({fontWeight: 700,fontSize: '0.426667rem'});
        $('.header_r').text('');
    }
    componentDidUpdate(){
       
    }
    render(){
        // console.log(this.props.router)
        return(
            <div id="myorder">
                <HeaderComponent a={this.props.router}/>
                <div id="mymain">
                    <Myorderbody a={this.props.router}/>
                </div>
            </div>
            )
    }
} 