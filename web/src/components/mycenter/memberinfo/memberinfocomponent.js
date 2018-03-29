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
                <div className="body">
                    <div className="message_body_t">
                        <ul>
                            <li>
                                <div className="bbox">
                                    <i className="iconfont icon-caidan"></i>
                                    <div className="nickname">昵称</div>
                                </div>
                                <div className="zhenname">此</div>
                            </li>
                            <li>
                                <div className="bbox">
                                    <i className="iconfont icon-caidan"></i>
                                    <div className="nickname">手机</div>
                                </div>
                                <div className="zhenname">功能</div>
                            </li>
                            <li>
                                <div className="bbox">
                                    <i className="iconfont icon-caidan"></i>
                                    <div className="nickname">性别</div>
                                </div>
                                <div className="sbox">
                                    <div className="zhenname">未</div>
                                </div>
                                
                            </li>
                            <li>
                                <div className="bbox">
                                    <i className="iconfont icon-caidan"></i>
                                    <div className="nickname">密码管理</div>
                                </div>
                                <div className="sbox">
                                    <div className="zhenname">开</div>
                                </div>
                                
                            </li>
                            <li>
                                <div className="bbox">
                                    <i className="iconfont icon-caidan"></i>
                                    <div className="nickname">地址管理</div>
                                </div>
                                <div className="sbox">
                                    <div className="zhenname">发</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer"><a>确认并保存个人信息</a></div>
            </div>
        ) 
    }
}