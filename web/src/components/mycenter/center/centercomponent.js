import React from 'react'
import {Link} from 'react-router'
import HeaderComponent from '../../header/headercomponent'
import './center.scss'
export default class CenterComponent extends React.Component{
    exit(){
        window.sessionStorage.removeItem('username');
        this.props.router.push('/');
    }
    componentDidMount(){
        $('.header_r').html('');
    }
    render(){
        return  (
            <div className="center">
                <HeaderComponent a={this.props.router}/>
                <div className="member">
                    <img src="src/assets/imgs/bg_center.jpg" className="bg_img" alt=""/>
                    <div className="user-info">
                        <div className="user-head">
                            <img src="src/assets/imgs/touxiang.png" alt=""/>
                        </div>
                        <div className="user-name">{window.sessionStorage.getItem('username')}</div>
                        <a href="javascript:void(0);" >
                            <button onClick={this.exit.bind(this)}>退出登录</button>
                        </a>
                    </div>
                </div>
                <div className="member-nav">
                    <Link to="/car" className="clearfix">
                        <span className="nav-left">我的卡券</span> 
                        <span className="nav-right">0&nbsp;张</span>
                    </Link>
                </div>
            </div>
        )
    }
}