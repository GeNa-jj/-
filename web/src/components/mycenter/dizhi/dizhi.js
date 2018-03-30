import React from 'react'

import './dizhi.scss'
import HeaderComponent from '../../header/headercomponent'
export default class dingdanComponent extends React.Component{
	componentDidMount(){
	    $('.header_c').html('地址管理').css({fontWeight: 700,fontSize: '0.426667rem'});
	    $('.header_r').text('')
	}
	render(){
		return(
			<div className="flex flex-y addr">
                <HeaderComponent a={this.props.router}/>
				<div className="flex flex-y flex-l address-all-bg">
					<div className="flex flex-y flex-l address-all">
						<div className="address-list-detail">
							<div className="flex address-list-title address-list-title-spe">
								<div className="flex-l other-style">暂无外送地址！</div>
							</div>
							<div></div>
						</div>
						<div className="icon-addmarage">新增外送地址</div>
					</div>
				</div>
			</div>
		)
	}
}