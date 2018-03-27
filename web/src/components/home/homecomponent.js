import React from 'react'
import {Link,History} from 'react-router';


import HeaderComponent from '../header/headercomponent'
import CarouselComponent from '../carousel/carouselcomponent'
import Jq from '../../../node_modules/jquery-3.2.1.min.js'

import './home.scss'

export default class HomeComponent extends React.Component{
    componentDidMount(){
            var mySwiper = new Swiper ('.swiper-container', {
                 
                direction: 'horizontal',
                
                autoplay:2000,
                
                loop: true,
                pagination: '.swiper-pagination',
                
                paginationClickable:true,

                
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',

                autoplayDisableOnInteraction:false,
            }) 
    }
    render(){
        return (
            <div className="home">
                <HeaderComponent></HeaderComponent>
                <div className="home_body">
                <CarouselComponent/>

                <div className="registerTips">你好,登录会员中心,享受更多特权</div>
                    <div className="home_menu-list">
                        <ul>
                            <li><div><img src="src/assets/imgs/1.png" alt="39免外"/></div><div className="info"><span className="text">39免外</span><span></span></div></li>
                            <li><div><img src="src/assets/imgs/index2.jpg" alt="聚乐盒" /></div><div className="info"><span className="text">聚乐盒</span><span></span></div></li>
                            <li><div><img src="src/assets/imgs/index3.jpg" alt="披萨" /></div><div className="info"><span className="text">披萨</span><span></span></div></li>
                            <li><div><img src="src/assets/imgs/index4.jpg" alt="小吃" /></div><div className="info"><span className="text">小吃</span><span></span></div></li>
                            <li><div><img src="src/assets/imgs/index5.jpg" alt="饮料" /></div><div className="info"><span className="text">饮料</span><span></span></div></li>
                            <li><div><img src="src/assets/imgs/index6.jpg" alt="意面" /></div><div className="info"><span className="text">意面</span><span></span></div></li>
                            <li><div><img src="" alt="" /></div><div><span></span><span></span></div></li>
                        </ul>
                    </div>
                    <div className="home_recommend">
                        <span className="left"><a>当季特选</a></span>
                        <span><a>登录享更多优惠</a></span>
                    </div>
                    <div className="home-activity">
                        <h2><span>优惠活动</span></h2>
                        <div className="home-activity-item">
                            <a>
                                <p><img src="src/assets/imgs/active-item.jpg"/></p>
                                <div>全新必胜客V享会，缤纷礼遇享不停</div>
                            </a>
                        </div>
                    </div>
                    <div className="home-wei">
                        <div>
                            <a>法律条款</a>
                            <a className="two">经营公示</a>
                            <a>隐私条款</a>
                        </div>
                        <div className="company-Tips">
                            <p><a>版权所有百胜咨询上海有限公司</a></p>
                            <p><a>沪ICP备05031779号-1</a></p>
                        </div>
                    </div>
                </div>
                <div className="home_footer"><a className="dingcan">立即订餐</a></div>
            </div>
        )
    }
}