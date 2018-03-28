import React from 'react'

import './discount.scss'
import HeaderComponent from '../../header/headercomponent'
export default class DiscountComponent extends React.Component{
    back(){
        this.props.router.goBack();
    }
    componentDidMount(){
        $('.header_c').html('优惠活动详情').css({fontWeight: 700,fontSize: '0.426667rem'});
        $('.header_r').text('')
    }
    render(){
        return(
            <div className="discount">
                <HeaderComponent a={this.props.router}/>
                <div className="d_body">
                    <img src="src/assets/imgs/active-item.jpg" />
                    <p>全新龙门客栈V享会，缤纷礼遇享不停</p>
                    <div className="spa"></div>
                    <div className="info">全新龙门客栈V享会，缤纷礼遇享不停，更有众多菜品等你来</div>
                </div>
            </div>
        )
    }
}