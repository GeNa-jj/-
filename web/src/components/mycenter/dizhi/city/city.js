import React from 'react'


import { Cascader } from 'antd';
import '../dizhi.scss'
import './city.scss'
import HeaderComponent from '../../../header/headercomponent'
export default class dingdanComponent extends React.Component{
	componentDidMount(){
	    $('.header_c').html('选择城市').css({fontWeight: 700,fontSize: '0.426667rem'});
	    $('.header_r').text('');
	  
	    var sbs=document.getElementsByClassName('ant-cascader-picker')[0];
	    // console.log(sbs)
	    var ss=null;
	    if(sbs){
	    	 $(sbs).click(function(){

				   var sb=document.getElementsByClassName('ant-cascader-menus')[0];
				  if(sb){

			  			sb.style.display = 'block';
				  }
				  
				    })
	    }
	
	  

	}
	 onChange(value) {
	 	var sb=document.getElementsByClassName('ant-cascader-menus')[0];
  			sb.style.display = 'none';
				}

	render(){

	const options = [{
				  value: '广东省',
				  label: '广东省',
				  children: [{
				    value: '广州市',
				    label: '广州市',
				    children: [{
				      value: 'xihu',
				      label: '天河区',
				    },{
				    	value:'baiyun',
				    	label: '白云区'
				    },{
				    	value:'yuexiu',
				    	label: '越秀区'
				    },{
				    	value:'liwan',
				    	label:'荔湾区'
				    },{
				    	value:'haizhu',
				    	label:'海珠区'
				    },{
				    	value:'huangpu',
				    	label:'黄埔区'
				    },{
				    	value:'panyu',
				    	label:'番禺区'
				    },{
				    	value:'huadu',
				    	label:'花都区'
				    },{
				    	value:'nansha',
				    	label:'南沙区'
				    },{
				    	value:'zengcheng',
				    	label:'增城区'
				    },{
				    	value:'conghua',
				    	label:'从化区'
				    }
				    ],
				  }]
				    },
				 {
				  value: '尚未开发',
				  label: '尚未开发',
				  children: [{
				    value: '尚未开发',
				    label: '尚未开发',
				    children: [{
				      value: '尚未开发',
				      label: '尚未开发',
				    }],
				  }],
				}];

					 // onChange(value) {
  				// 		console.log(this.refs.sjd)
						// 			}

		return(
			<div className="flex flex-y addr">
                <HeaderComponent a={this.props.router}/>
				<div className="flex flex-y flex-l address-all-bg">
					<div className="flex flex-y flex-l address-all">
						<div className="address-list-detail">
							<div className="flex address-list-title address-list-title-spe">
								<Cascader ref='sjd' options={options} onChange={this.onChange.bind(this)} placeholder="Please select" />
							</div>
							<div></div>
						</div>
						<div className="icon-addmarage">确定</div>
					</div>
				</div>
			</div>
		)
	}
}
