import React from 'react'
import {connect} from 'react-redux'

import '../login/login.scss'
import http from '../../../utils/httpclient'

import LoginErrorComponent from '../loginerror/loginerror'
import SpinnerComponent from '../../spinner/SpinnerComponent'

export default class ChangepwdComponent extends React.Component{
    state = {
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        content: '请输入正确的手机号码'
    }
    focus(){
         this.setState({
            show1: false,
            show2: false,
            show3: false,
            show4: false
        })
    }
    back(){
        this.props.router.goBack();    
    }
    componentDidMount(){
        this.refs.phone.value = this.props.router.location.query.phone;
    }
    seeSec(e){
        $(e.target).toggleClass('icon-biyan').toggleClass('icon-zhengyan');
        if($('.password').attr('type')=='password'){
            $('.password').attr('type','text');
        }else{
            $('.password').attr('type','password');
        }
    }
    changepwd(){
        if(this.refs.code.value==''){
            this.setState({
                show2: true,
                content: '验证码不能为空'
            });
            return false;
        }else if(this.refs.code.value!=$('.createCode').text()){
            this.setState({
                show2: true,
                content: '验证码不正确'
            });
        }else if(!/^\S{6,16}$/.test($('.password')[0].value)){
            this.setState({
                show3: true,
                content: '请输入6-16位且不能为空格'
            });       
        }else if($('.password')[0].value!=$('.password')[1].value){
            this.setState({
                show4: true,
                content: '密码不一致'
            });
        }else{
            http.post('changepwd',{username: this.refs.phone.value,password: $('.password')[0].value}).then(res => {
                if(res.error){
                    window.alert(res.error);
                }else{
                    window.alert('修改成功');
                    this.props.router.push('/login');
                }
            }).catch(error => {
                window.alert(error);
            });
        }
    }
    getCode(e){
         var res = '';
        for(var i=0;i<4;i++){
            res += parseInt(Math.random()*10);
        }
        $(e.target).text(res);
    }
    render(){
        return (
            <div className="changepwd">
                <div className="icon-back" onClick={this.back.bind(this)}>
                    <i className="iconfont icon-xiangzuo"></i>
                </div>
                <div className="changepwd_new">修改登录密码</div>
                <div className="changepwd_main">
                    <div className="changepwd_main_t">
                        <div className="item">
                            <div className="flex">
                                <div className="icon">
                                    <i className="iconfont icon-shouji"></i>
                                </div>
                                <div className="input flex-1">
                                    <input type="tel" maxLength="11" ref="phone" disabled/>
                                </div>
                            </div>
                            <LoginErrorComponent show={this.state.show1} content={this.state.content}/>
                        </div>
                        <div className="item">
                            <div className="flex" style={{alignItems: 'center'}}>
                                <div className="icon">
                                    <i className="iconfont icon-yanzhengma"></i>
                                </div>
                                <div className="input flex-1">
                                    <input type="text" maxLength="4" placeholder="请输入验证码" ref="code" onFocus={this.focus.bind(this)}/>
                                </div>
                                <div className="createCode" onClick={this.getCode.bind(this)}>
                                    获取验证码
                                </div>
                            </div>
                            <LoginErrorComponent show={this.state.show2} content={this.state.content}/>
                        </div>
                        <div className="item">
                            <div className="flex">
                                <div className="icon">
                                    <i className="iconfont icon-mima"></i>
                                </div>
                                <div className="input flex-1">
                                    <input type="password" maxLength="16" className="password" placeholder="请设置新密码" ref="password" onFocus={this.focus.bind(this)}/>
                                </div>
                                <div className="icon-eye">
                                    <i className="iconfont icon-biyan" onClick={this.seeSec.bind(this)}></i>
                                </div>
                            </div>
                            <LoginErrorComponent show={this.state.show3} content={this.state.content}/>
                        </div>
                        <div className="item">
                            <div className="flex">
                                <div className="icon">
                                    <i className="iconfont icon-mima"></i>
                                </div>
                                <div className="input flex-1">
                                    <input type="password" maxLength="16" className="password" placeholder="请重新输入密码" ref="password" onFocus={this.focus.bind(this)}/>
                                </div>
                            </div>
                            <LoginErrorComponent show={this.state.show4} content={this.state.content}/>
                        </div>
                        <div className="item flex">
                            <button onClick={this.changepwd.bind(this)}>确定</button>
                        </div>
                    </div>
                </div>
                <SpinnerComponent show={this.props.show}/>
            </div>
        )
    }
}