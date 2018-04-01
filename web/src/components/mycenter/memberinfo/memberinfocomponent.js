import React from 'react'

import './memberinfo.scss'
import HeaderComponent from '../../header/headercomponent'
import LoginErrorComponent from '../loginerror/loginerror'
import http from '../../../utils/httpclient'

export default class MemberInfoComponent extends React.Component{
    state = {
        show1: false,
        show2: false,
        show3: false,
        content: '请输入6-16位且不能为空格'
    }
    focus(e){
         this.setState({
            show1: false,
            show2: false,
            show3: false
        })
        e.target.select();
    }
    componentDidMount(){
        $('.header_c').html('个人信息设置').css({fontWeight: 700,fontSize: '0.426667rem'});
        $('.header_r').text('');
        $('.nicheng').val(window.sessionStorage.getItem('nicheng'))
        if(window.sessionStorage.getItem('gender')=='先生'){
            $('span').eq(0).addClass('selected');
            $('span').eq(1).removeClass('selected');
        }else{
            $('span').eq(0).removeClass('selected');
            $('span').eq(1).addClass('selected');
        }
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
        var nicheng = $('.nicheng').val();
        var username = $('.phone').text();
        var gender = $('.selected').text();
        if(!nicheng){
             this.setState({
                show3: true,
                content: '昵称不能为空'
            });
            return false;
                 
        }
             
        if($('.mima').css('display')=='none'){
            http.post('changemsg',{username,nicheng,gender}).then(res=>{
                window.sessionStorage.setItem('gender',gender);
                window.sessionStorage.setItem('nicheng',nicheng);
                window.alert('操作成功');
                this.props.router.push('/');      
            })      
        }else{
            if(!/^\S{6,16}$/.test($('.xinmima')[0].value)){
                this.setState({
                    show1: true
                });       
            }else if($('.xinmima')[0].value!=$('.xinmima')[1].value){
                this.setState({
                    show2: true,
                    content: '密码不一致'
                });
            }else{
                http.post('changeallmsg',{username,nicheng,gender,password:$('.xinmima')[0].value}).then(res=>{
                    window.sessionStorage.setItem('gender',gender);
                    window.sessionStorage.setItem('nicheng',nicheng);
                    window.alert('操作成功');
                    this.props.router.push('/'); 
                }) 
            }
        }
    }
    showmm(e){
        if($('.mima').eq(0).css('display')=='none'){
            $('.mima').slideDown();
        }else{
            $('.mima').slideUp();
        }
        
        $(e.target).toggleClass('icon-xiangshang').toggleClass('icon-xiangxia');
    }
    select(e){
        $(e.target).toggleClass('selected').siblings('span').toggleClass('selected');
    }
    render(){
        return (
            <div className="memberinfo">
                <HeaderComponent a={this.props.router}/>
                <div className="body">
                    <div className="message_body_t">
                        <ul>
                            <li style={{display: 'list-item'}}>
                                <div className="bbox">
                                    <i className="iconfont icon-xingmingyonghumingnicheng"></i>
                                    <div className="nickname">昵称</div>
                                    <input type="text" className="nicheng" placeholder="请输入昵称" style={{textAlign: 'right'}} onFocus={this.focus.bind(this)}/>
                                </div>
                                <LoginErrorComponent show={this.state.show3} content={this.state.content}/>
                            </li>
                            <li>
                                <div className="bbox">
                                    <i className="iconfont icon-shouji"></i>
                                    <div className="nickname">手机</div>
                                </div>
                                <div className="zhenname phone">{window.sessionStorage.getItem('username')}</div>
                            </li>
                            <li>
                                <div className="bbox">
                                    <i className="iconfont icon-xingbie"></i>
                                    <div className="nickname">性别</div>
                                </div>
                                <div className="sbox">
                                    <div className="zhenname">
                                        <span id="xn-genderInput-selectMan" className="genderMan selected" onClick={this.select.bind(this)}>先生</span>
                                        <span id="xn-genderInput-selectWoman" className="genderMan genderWoman" onClick={this.select.bind(this)}>女士</span>
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
                                    <input type="password" className="xinmima" maxLength="16" placeholder="请输入新密码" style={{textAlign: 'right'}} onFocus={this.focus.bind(this)}/>
                                </div>
                                <LoginErrorComponent show={this.state.show1} content={this.state.content}/>
                            </li>
                            <li className="mima">
                                <div className="bbox">
                                    <i className="iconfont icon-mima"></i>
                                    <div className="nickname">确定密码</div>
                                    <input type="password" className="xinmima" maxLength="16" placeholder="请重新输入密码" style={{textAlign: 'right'}} onFocus={this.focus.bind(this)}/>
                                </div>
                                <LoginErrorComponent show={this.state.show2} content={this.state.content}/>
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
                <div className="footer"><a href="javascript:void(0);" onClick={this.sure.bind(this)}>确认并保存个人信息</a></div>
            </div>
        ) 
    }
}