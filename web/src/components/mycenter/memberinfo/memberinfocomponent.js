import React from 'react'

import './memberinfo.scss'
import HeaderComponent from '../../header/headercomponent'

export default class MemberInfoComponent extends React.Component{
    componentDidMount(){
        $('.header_c').html('个人信息设置').css({fontWeight: 700,fontSize: '0.426667rem'});
        $('.header_r').text('')
    }
    dingwei(){
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition,showError);   
        }else{   
            alert("浏览器不支持地理定位。");   
        }   
        function showPosition(position){   
            var latlon = position.coords.latitude+','+position.coords.longitude;   
               
            //baidu   
            var url = "http://api.map.baidu.com/geocoder/v2/?ak=C93b5178d7a8ebdb830b9b557abce78b&callback=renderReverse&location="+latlon+"&output=json&pois=0";   
            $.ajax({    
                type: "GET",    
                dataType: "jsonp",    
                url: url,   
                beforeSend: function(){   
                    $("#baidu_geo").html('正在定位...');   
                },   
                success: function (json) {    
                    if(json.status==0){   
                        $("#baidu_geo").html(json.result.formatted_address);   
                    }   
                },   
                error: function (XMLHttpRequest, textStatus, errorThrown) {    
                    $("#baidu_geo").html(latlon+"地址位置获取失败");    
                }   
            })  
            if($('.dizhi').css('display')=='none'){
                $('.dizhi').slideDown();
            }
        }  
        function showError(error){   
            switch(error.code) {   
                case error.PERMISSION_DENIED:   
                    alert("定位失败,用户拒绝请求地理定位");   
                    break;   
                case error.POSITION_UNAVAILABLE:   
                    alert("定位失败,位置信息是不可用");   
                    break;   
                case error.TIMEOUT:   
                    alert("定位失败,请求获取用户位置超时");   
                    break;   
                case error.UNKNOWN_ERROR:   
                    alert("定位失败,定位系统失效");   
                    break;   
            }   
        } 
             
    }
    sure(){
        window.alert('操作成功');
        window.alert('其实我还在被开发中，什么都没干！！哈哈哈哈哈哈或或或或或或哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈');
        this.props.router.push('/');
    }
    showmm(e){
        if($('.mima').eq(0).css('display')=='none'){
            $('.mima').slideDown();
        }else{
            $('.mima').slideUp();
        }
        
        $(e.target).toggleClass('icon-xiangshang').toggleClass('icon-xiangxia');
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
                                    <i className="iconfont icon-xingmingyonghumingnicheng"></i>
                                    <div className="nickname">昵称</div>
                                </div>
                                <div className="zhenname">
                                    <input type="text" className="nicheng" placeholder="请输入昵称" style={{textAlign: 'right'}}/>
                                </div>
                            </li>
                            <li>
                                <div className="bbox">
                                    <i className="iconfont icon-shouji"></i>
                                    <div className="nickname">手机</div>
                                </div>
                                <div className="zhenname">{window.sessionStorage.getItem('username')}</div>
                            </li>
                            <li>
                                <div className="bbox">
                                    <i className="iconfont icon-xingbie"></i>
                                    <div className="nickname">性别</div>
                                </div>
                                <div className="sbox">
                                    <div className="zhenname">
                                        <select style={{border: '0 none'}}>
                                            <option>男</option>
                                            <option>女</option>
                                        </select>
                                    </div>
                                </div>
                                
                            </li>
                            <li>
                                <div className="bbox">
                                    <i className="iconfont icon-mima"></i>
                                    <div className="nickname">密码管理</div>
                                </div>
                                <div className="sbox">
                                    <div className="zhenname"><i className="iconfont icon-xiangxia" onClick={this.showmm.bind(this)}></i></div>
                                </div>
                                
                            </li>
                            <li className="mima">
                                <div className="bbox">
                                    <i className="iconfont icon-mima"></i>
                                    <div className="nickname">新密码</div>
                                    <input type="password" className="xinmima" maxLength="16" placeholder="请输入新密码" style={{textAlign: 'right'}}/>
                                </div>
                            </li>
                            <li className="mima">
                                <div className="bbox">
                                    <i className="iconfont icon-mima"></i>
                                    <div className="nickname">确定密码</div>
                                    <input type="password" className="xinmima" maxLength="16" placeholder="请重新输入密码" style={{textAlign: 'right'}}/>
                                </div>
                            </li>
                            <li>
                                <div className="bbox">
                                    <i className="iconfont icon-dizhi-01"></i>
                                    <div className="nickname">地址管理</div>
                                </div>
                                <div className="sbox">
                                    <div className="zhenname"><i className="iconfont icon-xiangxia" onClick={this.dingwei.bind(this)}></i></div>
                                </div>
                            </li>
                            <li className="dizhi">
                                <div className="bbox">
                                    <i className="iconfont icon-dizhi-01"></i>
                                    <div className="nickname">地址</div>
                                </div>
                                <div className="sbox">
                                    <div className="zhenname">
                                        <div id="baidu_geo">
                                            
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer"><a onClick={this.sure.bind(this)}>确认并保存个人信息</a></div>
            </div>
        ) 
    }
}