import React from 'react'

import http from '../../utils/httpclient'
import './login.scss'

export default class Router extends React.Component{
    login(){
        http.post('login', {username: this.refs.username.value, password: this.refs.password.value}).then((res)=>{
            if(res.status){
                this.props.router.push('/product');
                     
            }else{
                window.alert('登录信息错误')
            }
        });
    }
    render(){
        return (
            <div className="bg">
                <div className="login">
                    <div className="col-sm-12 b-r">
                        <form role="form">
                            <div className="form-group text-right">
                                <input type="text" name="username" placeholder="用户名" className="form-control required" ref="username" />
                            </div>
                            <div className="form-group text-right">
                                <input type="password" name="password" placeholder="密码" className="form-control required" ref="password" />
                            </div>
                            <div className="form-group text-right">
                                <input type="button" className="btn btn-primary" value="登录" onClick={this.login.bind(this)}/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="cover"></div>
            </div>
        )
    }
}