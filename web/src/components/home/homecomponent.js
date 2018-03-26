import React from 'react'

import HeaderComponent from '../header/headercomponent'
import './home.scss'

export default class HomeComponent extends React.Component{
    render(){
        return (
            <div className="home">
                <HeaderComponent></HeaderComponent>
                <div className="home_body">
                    <div className="carousel"></div>
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
                </div>
                <div className="home_footer"><a className="dingcan">立即订餐</a></div>
            </div>
        )
    }
}