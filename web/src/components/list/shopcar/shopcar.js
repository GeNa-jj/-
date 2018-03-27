import React from 'react'


import Shophead from './shophead'
import Shopfoot from './shopfoot'
import './shopcar.scss'
// import './shopcar.scss'
export default class ShopcarComponent extends React.Component{
	 // constructor() {
    

  //   	// 初始值
  //   	this.state = {
  //     		num: 0,
  //     		price: 0,
  //     		totalPrice: 0,
  //   	}
 	// }


		render(){
			return(
				<div className="menu-shopcar child-view">
					<Shophead></Shophead>
					<div className="select">
						<ul>
							<li>
								<div className="icon"></div>
								<div className="name">比萨</div> 
								<div className="num">0/1</div>
								<div className="ok"></div>
							</li>
						</ul>
					</div>
					<div className="scroller">
						<section className="pack-list">
							<dl>
								<dt className="pack-list-head bottom-line">
									<span>- 选比萨(6款中选1款) -</span>
									<i className="iconfont icon-xiangshang"></i>
								</dt>
								<dd className="pack-list-item">
									<div className="item-img"></div>
									<div className="pack-list-item-name">
										<p className="item-name">美式至尊四拼比萨</p>
										<p className="base-size">普通装 | 纯珍</p>
									</div>
									<div className="spinner"></div>
								</dd>
								<dd className="pack-list-item">
									<div className="item-img"></div>
									<div className="pack-list-item-name">
										<p className="item-name">美式至尊四拼比萨</p>
										<p className="base-size">普通装 | 纯珍</p>
									</div>
									<div className="spinner"></div>
								</dd>
								<dd className="pack-list-item">
									<div className="item-img"></div>
									<div className="pack-list-item-name">
										<p className="item-name">美式至尊四拼比萨</p>
										<p className="base-size">普通装 | 纯珍</p>
									</div>
									<div className="spinner"></div>
								</dd>
																															
							</dl>
						</section>
					</div>

				<Shopfoot></Shopfoot>
				</div>
				)
		}
}