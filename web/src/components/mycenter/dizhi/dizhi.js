import React from 'react'

import './dizhi.scss'
import http from '../../../utils/httpclient'

import HeaderComponent from '../../header/headercomponent'
export default class dingdanComponent extends React.Component{
	componentDidMount(){
	    $('.header_c').html('地址管理').css({fontWeight: 700,fontSize: '0.426667rem'});
	    $('.header_r').text('')
	}
	tocity(){
		this.props.router.push('/city');
	}
	componentWillMount(){
		http.get('address',{username: window.sessionStorage.getItem('username')}).then(res=>{
			if(res.status){
				var arr = [];
				res.data.forEach(item=>{
					arr.push(JSON.parse(item.address))
				})
				this.setState({
					address: arr
				})
			}
			     
		}).catch(error=>{
			window.alert(error);
		})
	}
	state = {
		address: []
	}
	ischose(e){
		if(this.props.router.location.query){
			var $li = $(e.target).closest('li');
			window.sessionStorage.setItem('addressname', $li.find('.name').text());
			window.sessionStorage.setItem('addressphone', $li.find('.phone').text());
			window.sessionStorage.setItem('addressaddr', $li.find('p').text());
			this.props.router.push('/dingdan');
		}
		     
	}
	render(){  
		return(
			<div className="flex flex-y addr">
                <HeaderComponent a={this.props.router}/>
				<div className="flex flex-y address-all">
					<div className="flex-1 address-list-detail">
						<ul className="dz">
							{
								this.state.address.map(item=>{
									return (
										<li key={Math.random()} className="flex flex-y dzq" onClick={this.ischose.bind(this)}>
											<div className="add_t flex">
												<div className="name">{item.name}</div>
												<div className="phone">{item.shouji}</div>
											</div>
											<div className="add_b">
												<p>{item.sheng}{item.city}{item.quyu}{item.jiedao}</p>
											</div>
										</li>
									)
								})
							}
						</ul>
						<div className="address-list-title address-list-title-spe">
							<div className="other-style">暂无外送地址！</div>
						</div>
					</div>
					<div className="icon-addmarage" onClick={this.tocity.bind(this)}>新增外送地址</div>
				</div>
			</div>
		)
	}
}