import React from 'react'
import {Link,History} from 'react-router';


import HeaderComponent from '../header/headercomponent'
import CarouselComponent from './carousel/carouselcomponent'

import './home.scss'

export default class HomeComponent extends React.Component{
    componentDidMount(){
        var mySwiper = new Swiper ('.swiper-container', {
             
            direction: 'horizontal',
            
            autoplay:2000,
            
            loop: true,
            pagination: '.swiper-pagination',
            
            paginationClickable:true,

            
            // nextButton: '.swiper-button-next',
            // prevButton: '.swiper-button-prev',

            autoplayDisableOnInteraction:false,
        }) 

        if(window.sessionStorage.getItem('username')){
            $('.registerTips').find('a').eq(0).text(`欢迎您，${window.sessionStorage.getItem('username')}`);
            $('.registerTips_r').css('display','block');
            $('.right').html('<a href="#/list">超级套餐</a>');
        }else{
            $('.registerTips').find('a').eq(0).text(`你好,登录会员中心,享受更多特权`);
            $('.registerTips_r').css('display','none');
            $('.right').html('<a href="#/login">登录享更多优惠</a>');
        }
    }
    render(){
        return (
            <div className="home">
                <HeaderComponent a={this.props.router} />
                <div className="home_body">
                <CarouselComponent/>

                <div className="registerTips">
                    <a href="javascript:void(0);">你好,登录会员中心,享受更多特权</a>
                    <Link to="/center" className="registerTips_r">进入会员中心<i className="iconfont icon-xiangyou"></i></Link>
                </div>
                    <div className="home_menu-list">
                        <ul>
                            <li><Link to="/list"><img src="src/assets/imgs/1.png" alt="39免外"/></Link><Link className="info"><span className="text">39免外</span><span></span></Link></li>
                            <li><Link to="/list"><img src="src/assets/imgs/index2.jpg" alt="聚乐盒" /></Link><Link className="info"><span className="text">聚乐盒</span><span></span></Link></li>
                            <li><Link to="/list"><img src="src/assets/imgs/index3.jpg" alt="披萨" /></Link><Link className="info"><span className="text">披萨</span><span></span></Link></li>
                            <li><Link to="/list"><img src="src/assets/imgs/index4.jpg" alt="小吃" /></Link><Link className="info"><span className="text">小吃</span><span></span></Link></li>
                            <li><Link to="/list"><img src="src/assets/imgs/index5.jpg" alt="饮料" /></Link><Link className="info"><span className="text">饮料</span><span></span></Link></li>
                            <li><Link to="/list"><img src="src/assets/imgs/index6.jpg" alt="意面" /></Link><Link className="info"><span className="text">意面</span><span></span></Link></li>
                            <li><Link to="/list"><img src="src/assets/imgs/index0.jpg" alt="查看全部菜单" /></Link></li>
                        </ul>
                    </div>
                    <div className="home_recommend">
                        <span className="left"><Link to="/list">当季特选</Link></span>
                        <span className="right"><Link to="/login">登录享更多优惠</Link></span>
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
                <div className="home_footer"><Link to="/list" className="dingcan">立即订餐</Link></div>
            </div>
        )
    }
}