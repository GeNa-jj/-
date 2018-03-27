import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

import './login.scss'
import $ from '../../../../node_modules/jquery/dist/jquery.min.js'
import LoginErrorComponent from '../loginerror/loginerror'
import SpinnerComponent from '../../spinner/SpinnerComponent'
import * as actions from './loginaction'

class LoginComponent extends React.Component{
    state = {
        show1: false,
        show2: false,
        content: '请输入正确的手机号码'
    }
    focus(){
        this.setState({
            show1: false,
            show2: false
        })
    }
    back(){
        this.props.router.goBack();    
    }
    componentWillMount(){
        if(window.sessionStorage.getItem('username')){
            this.props.router.push('/myCenter');
        }
    }
    changepwd(){
        if(!/^1[34578]\d{9}$/.test(this.refs.phone.value)){
            this.setState({
                show1: true
            })
            return false
        }
        this.props.login({
            url: 'phone',
            method: 'post',
            data: {username: this.refs.phone.value}
        }).then(res=>{
            if(!res.status){
                // message.success('当前用户无法修改密码')
                // window.alert('当前用户无法修改密码')
            }else{
                this.props.router.push({pathname: '/changepwd', query: {phone: this.refs.phone.value}});
            }
        })
    }
    seeSec(e){
        $(e.target).toggleClass('icon-biyan').toggleClass('icon-zhengyan');
        if(this.refs.password.type=='password'){
            this.refs.password.type = 'text';
        }else{
            this.refs.password.type = 'password';
        }
    }
    login(){
        if(!/^1[34578]\d{9}$/.test(this.refs.phone.value)){
            this.setState({
                show1: true
            })
            return false
        }else if(this.refs.password.value==''){
             this.setState({
                show2: true,
                content: '密码不能为空'
            })
            return false
        }
        this.props.login({
            url: 'login',
            method: 'post',
            data: {username: this.refs.phone.value,password: this.refs.password.value}
        }).then(res => {
            if(res.error){
                window.alert(res.error);
            }else if(res.message=='此用户未注册'){
                this.setState({
                    show1: true,
                    content: res.message
                })
            }else if(res.message=='登录信息错误'){
                this.setState({
                    show2: true,
                    content: res.message
                })
            }else{
                window.sessionStorage.setItem('username',res.data);
                this.props.router.push('/');
            }
        }).catch(error => {
            window.alert(error);
        })
    }
    render(){
        return (
            <div className="login">
                <div className="icon-back" onClick={this.back.bind(this)}>
                    <i className="iconfont icon-xiangzuo"></i>
                </div>
                <div className="login_new">龙门客栈登录</div>
                <div className="login_main">
                    <div className="login_main_t">
                        <div className="item">
                            <div className="flex">
                                <div className="icon">
                                    <i className="iconfont icon-shouji"></i>
                                </div>
                                <div className="input flex-1">
                                    <input type="tel" maxLength="11" placeholder="请输入手机号" ref="phone" onFocus={this.focus.bind(this)}/>
                                </div>
                            </div>
                            <LoginErrorComponent show={this.state.show1} content={this.state.content}/>
                        </div>
                        <div className="item">
                            <div className="flex">
                                <div className="icon">
                                    <i className="iconfont icon-mima"></i>
                                </div>
                                <div className="input flex-1">
                                    <input type="password" maxLength="16" placeholder="请输入密码" ref="password" onFocus={this.focus.bind(this)}/>
                                </div>
                                <div className="icon-eye">
                                    <i className="iconfont icon-biyan" onClick={this.seeSec.bind(this)}></i>
                                </div>
                            </div>
                            <LoginErrorComponent show={this.state.show2} content={this.state.content}/>
                        </div>
                        <div className="item flex">
                            <button onClick={this.login.bind(this)}>登录</button>
                        </div>
                    </div>
                    <div className="login_main_b">
                        <Link to="/register">快速注册</Link>
                        <div onClick={this.changepwd.bind(this)}>忘记密码</div>
                    </div>
                </div>
                <SpinnerComponent show={this.props.show}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        show: state.login.show
    }
}

export default connect(mapStateToProps, actions)(LoginComponent);