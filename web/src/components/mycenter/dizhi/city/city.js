import React from 'react'

import './city.scss'
import http from '../../../../utils/httpclient'
import HeaderComponent from '../../../header/headercomponent'
import LoginErrorComponent from '../../loginerror/loginerror'
export default class CityComponent extends React.Component{
	componentWillMount(){
		http.get('http://10.3.136.38:3002/src/components/mycenter/dizhi/city/region.json').then(res=>{
			this.setState({
				data: res.regions,
				city: res.regions[0].regions,
				quyu: res.regions[0].regions[0].regions
			})
			     
		})
	}
	state = {
		data : [],
		city : [],
		quyu : [],
        show1: false,
        show2: false,
        content: '收货人不能为空'
    }
    focus(e){
         this.setState({
            show1: false,
            show2: false
        })
        e.target.select();
    }
    sure(){
		
    }
    back(){
    	this.props.router.goBack();
    }
    sheng(e){
    	for(var i=0;i<this.state.data.length;i++){
			if(e.target.value==this.state.data[i].name){
				this.setState({
					city: this.state.data[i].regions || [],
					quyu: this.state.data[i].regions ? this.state.data[i].regions[0].regions : []
				});
				return false;
			}
    	}
    }
    city(e){
    	for(var i=0;i<this.state.city.length;i++){
			if(e.target.value==this.state.city[i].name){
				this.setState({
					quyu: this.state.city[i].regions || []
				});
				return false;
			}
    	}
    	console.log(666)
    	     
    }
	render(){     
		return (
			<div className="city">
                <div className="d_header">
                    <div className="d_header_l">
                    <button onClick={this.back.bind(this)}><i className="iconfont icon-xiangzuo"></i></button>
                    </div>
                    <div className="d_header_r">
                        <h1>新增地址</h1>
                    </div>
                </div>
                <div className="body">
                    <div className="message_body_t">
                        <ul>
                        	<li>
                                <div className="bbox">
                                    <i className="iconfont icon-xingmingyonghumingnicheng"></i>
                                    <div className="nickname">收货人</div>
                                    <input type="text" className="nicheng" placeholder="请输入收货人" style={{textAlign: 'right'}} onFocus={this.focus.bind(this)}/>
                                </div>
                                <LoginErrorComponent show={this.state.show1} content={this.state.content}/>
                            </li>
                        	<li>
                                <div className="bbox">
                                    <i className="iconfont icon-shouji"></i>
                                    <div className="nickname">手机</div>
                                	<input type="text" className="nicheng" placeholder="请输入收货人手机" style={{textAlign: 'right'}} onFocus={this.focus.bind(this)}/>
                                </div>
                                <LoginErrorComponent show={this.state.show2} content={this.state.content}/>
                            </li>
                            <li className="three">
                                <div className="bbox">
                                    <div className="nickname">省份</div>
                                    <select name="sheng" id="sheng" onChange={this.sheng.bind(this)}>
										{
											this.state.data.map(item=>{
												return <option value={item.name} key={item.id}>{item.name}</option>
											})
										}
                                    </select>
                                </div>
                            </li>
                            <li className="three">
                                <div className="bbox">
                                    <div className="nickname">城市</div>
                                    <select name="city" id="city" onChange={this.city.bind(this)}>
										{
											this.state.city.map(item=>{
												return <option value={item.name} key={item.id}>{item.name}</option>
											})
										}
                                    </select>
                                </div>
                            </li>
                            <li className="three">
                                <div className="bbox">
                                    <div className="nickname">区域</div>
                                    <select name="quyu" id="quyu">
										{
											this.state.quyu.map(item=>{
												return <option value={item.name} key={item.id}>{item.name}</option>
											})
										}
                                    </select>
                                </div>
                            </li>
                            <li className="three">
								<div className="bbox">
                                    <div className="nickname">详细地址</div>

                                    <input name="jiedao" id="jiedao" placeholder="请输入详细地址" style={{textAlign: 'right'}}></input>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer"><a href="javascript:void(0);" onClick={this.sure.bind(this)}>保存</a></div>
            </div>
		)
	}
}
