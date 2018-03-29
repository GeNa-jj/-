import React from 'react'
import {Link} from 'react-router'

import './header.scss'

export default class HeaderComponent extends React.Component{
    showup(){
        $('.mycenter_list').show().animate({left: '0'});
        $('.cover').show().animate({opacity: '0.5'});
    }
    hide(){
        $('.mycenter_list').animate({left: '-6rem'}).hide(100);
        $('.cover').animate({opacity: '0'}).hide(100);
    }
    exit(){
        window.sessionStorage.removeItem('username');
        $('.mycenter_list').animate({left: '-6rem'}).hide(100);
        $('.cover').animate({opacity: '0'}).hide(100,()=>{
            if(this.props.a.location.pathname=='/'){
                location.reload();
            }else{
                this.props.a.push('/');
            } 
        });
    }
    componentDidMount(){
        if(window.sessionStorage.getItem('username')){
            $('.avatar').find('p').html(window.sessionStorage.getItem('username'));
            $('.exit').css('display','block');
        }

        var arr = ['/','/list','/center','/discount','/12','/memberinfo','/12'];
        var n = arr.indexOf(this.props.a.location.pathname);     
        var bpy = $('li').eq(n).find('i').css('background-position-y');   
        $('li').eq(n).find('i').css('background-position','-0.8rem '+bpy);
    }
    tohome(){
        $('.mycenter_list').animate({left: '-6rem'}).hide(100);
        $('.cover').animate({opacity: '0'}).hide(100,()=>{
            if(this.props.a.location.pathname=='/'){
                return false;
            }else{
                this.props.a.push('/');
            } 
        });   
             
    }
    tocenter(){
        $('.mycenter_list').animate({left: '-6rem'}).hide(100);
        $('.cover').animate({opacity: '0'}).hide(100,()=>{
            if(window.sessionStorage.getItem('username')){
                if(this.props.a.location.pathname=='/center'){
                    return false;
                }else{
                    this.props.a.push('/center');
                }  
            }else{
                this.props.a.push('/login');
            }
        }); 
    }
    tolist(){
        $('.mycenter_list').animate({left: '-6rem'}).hide(100);
        $('.cover').animate({opacity: '0'}).hide(100,()=>{
            if(this.props.a.location.pathname=='/list'){
                return false;
            }else{
                this.props.a.push('/list');
            }  
        }); 
    }
    todiscount(){
        $('.mycenter_list').animate({left: '-6rem'}).hide(100);
        $('.cover').animate({opacity: '0'}).hide(100,()=>{
            if(this.props.a.location.pathname=='/discount'){
                return false;
            }else{
                this.props.a.push('/discount');
            }  
        }); 
    }
    tomemberinfo(){
        $('.mycenter_list').animate({left: '-6rem'}).hide(100);
        $('.cover').animate({opacity: '0'}).hide(100,()=>{
            if(window.sessionStorage.getItem('username')){
                if(this.props.a.location.pathname=='/memberinfo'){
                    return false;
                }else{
                    this.props.a.push('/memberinfo');
                }  
            }else{
                this.props.a.push('/login');
            }
        }); 
    }
    render(){
        return (
            <header>
                <div className="header_l">
                    <i className="iconfont icon-caidan" onClick={this.showup.bind(this)}></i>
                </div>
                <div className="header_c flex">
                    <img src="src/assets/imgs/logo.png" alt=""/>
                    <span>龙门客栈</span>
                </div>
                <div className="header_r">
                    <Link to="/car">我的卡卷</Link>
                </div>
                <div className="mycenter_list">
                    <div className="avatar">
                        <img src="src/assets/imgs/touxiang.png" alt="" onClick={this.tocenter.bind(this)}/>
                        <p>
                            <Link to="/login">登录 | 注册</Link>
                        </p>
                    </div>
                    <div className="nav">
                        <ul>
                            <li onClick={this.tohome.bind(this)}><i className="icon icon-home"></i>首页</li>
                            <li onClick={this.tolist.bind(this)}><i className="icon icon-menu"></i>菜单</li>
                            <li onClick={this.tocenter.bind(this)}><i className="icon icon-center"></i>会员中心</li>
                            <li onClick={this.todiscount.bind(this)}><i className="icon icon-event"></i>优惠活动</li>
                            <li><i className="icon icon-order"></i>我的订单</li>
                            <li onClick={this.tomemberinfo.bind(this)}><i className="icon icon-info"></i>个人信息</li>
                            <li><i className="icon icon-address"></i>地址管理</li>
                        </ul>
                        <div className="exit">
                            <button onClick={this.exit.bind(this)}>退出登录</button>
                        </div>
                    </div>
                </div>
                <div className="cover" onClick={this.hide.bind(this)}></div>
            </header>
        )
    }
}