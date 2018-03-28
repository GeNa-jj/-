import React from 'react'

import './memberinfo.scss'
import HeaderComponent from '../../header/headercomponent'

export default class MemberInfoComponent extends React.Component{
    componentDidMount(){
        $('.header_c').html('个人信息设置').css({fontWeight: 700,fontSize: '0.426667rem'});
        $('.header_r').text('')
    }
    render(){
        return (
            <div className="memberinfo">
                <HeaderComponent a={this.props.router}/>
                <div className="body"></div>
                <div className="footer"></div>
            </div>
        ) 
    }
}