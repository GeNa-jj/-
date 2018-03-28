import React from 'react'

import './dingdan.scss'
import Dingdanhead from './dingdanhead'
import Dingdanfoot from './dingdanfoot'
export default class shopfootComponent extends React.Component{
		render(){
			return(
			   <div className="menu-shopcar child-view">
                        <Dingdanhead></Dingdanhead>
                        <div className="settlement flex-l">
                              <div className="flex center_1 addressp">
                                    <div className="flex flex-y address align-items-center">
                                          <div className="address-desc paddingLR">
                                                <div className="showAddress">
                                                      <span className="hightlight special">自取</span>
                                                      <span className="detailAddress">广州天河区天府路301号叠翠台D栋首层</span>
                                                </div>
                                                <div className="showName">
                                                      <span>客户</span>13168232150
                                                </div>
                                          </div>
                                          <div className="paddingLR paddingLR2">
                                                <div className="showTime">
                                                      当日<span className="hightlight">10:25</span>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className="settlement-content">
                                    <div className="baseinfo">
                                          <div className="flex baseone content_2 backup">
                                                <div>备用电话</div>
                                                <input type="tel" placeholder="仅限手机或座机" className="flex-l"/>
                                          </div>
                                    </div>
                                    <div className="baseinfo">
                                          <div className="flex baseone content_2 settlement-list">
                                                <div>支付方式</div>
                                                <div className="flex align-items-center">货到现金支付</div>
                                          </div>
                                    </div>
                                    <div className="baseinfo flex flex-l flex-y tablewarep">
                                          <div className="flex flex-l baseinfotitle border-bottom content_2">
                                                <div>订单明细</div>
                                                <div>共1款产品&nbsp;合计&nbsp;69.0元</div>
                                          </div>
                                          <div className="product-list">
                                                <div className="flex flex-y flex-l baseonespe">
                                                      <div className="flex flex-l content_2">
                                                            <div className="flex-l">
                                                                  12翅盒(6种风味)&nbsp;&nbsp;&times;1
                                                                  <span className="expand"></span>
                                                            </div>
                                                            <div>￥69.0</div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="baseinfo tablewarep">
                                          <div className="baseonefoot on-border-bottom">
                                                <div className="flex">
                                                      <div className="flex align-items-center tableware">
                                                            <div className="noselect"></div>
                                                            <span>不需要提供餐具，更环保<br /><span className="tableware-else">餐具包含勺子，叉子</span></span>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="baseinfo">
                                          <div className="flex flex-y baseonefoot content_2">
                                                <div className="flex-l flex">
                                                      <div className="flex-l title1 t1">需要开具发票</div>
                                                      <div className="add-icon flex">
                                                            <div className="flag">
                                                                  <div className="dot left"></div>
                                                            </div>
                                                </div>      
                                                </div>
                                          </div>
                                    </div>
                                    <div className="baseinfo foot" style={{marginBottom:'76px'}}>
                                          <div className="flex flex-y baseonefoot content_2 no-border-bottom">
                                                <div className="flex-l flex">
                                                      <div className="flex-l title1">备注</div>
                                                      <div className="add-icon flex">
                                                            <div className="flag">
                                                                  <div className="dot left"></div>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div></div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <Dingdanfoot></Dingdanfoot>
                     </div>
				)
		}
}