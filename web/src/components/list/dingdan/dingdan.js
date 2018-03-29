import React from 'react'

import './dingdan.scss'
import Dingdanhead from './dingdanhead'
import Dingdanfoot from './dingdanfoot'
export default class shopfootComponent extends React.Component{
      componentWillMount(){
            var items = JSON.parse(window.sessionStorage.getItem('items'));
            this.setState({
                  dataset: items
            })
                 
      }
      state = {
            dataset: []
      }
      componentDidMount(){
            var total = 0;
            var price = 0;
            this.state.dataset.forEach(item=>{
                  total+=item.n;
                  price+=item.price*1;
            })
            $('.listtotalqty').text(total);
            $('.listtotalprice').text(price.toFixed(1));
            $('.totle-money').text((price+9).toFixed(1))
      }
      dot1(e){
            $(e.target).toggleClass('left').toggleClass('right');
            if($('.tip-new').css('display')=='none'){
                  $('.tip-new').slideDown();     
                  $('.t1').text('发票');
            }else{
                  $('.tip-new').slideUp(); 
                  $('.t1').text('需要开具发票');
            }
                 
      }
      dot2(e){
            $(e.target).toggleClass('left').toggleClass('right');
            if($('.beizhu').css('display')=='none'){
                  $('.beizhu').show();  
            }else{
                  $('.beizhu').hide(); 
            }
      }
      pot(e){    
            if($('.innoselect').css('display')=='none'){
                  $('.innoselect').show();   
            }else{
                  $('.innoselect').hide();
            }
                   
      }
	render(){
		return(
		   <div className="menu-shopcar child-view">
                  <Dingdanhead a={this.props.router}></Dingdanhead>
                  <div className="settlement flex-1">
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
                                          <div>手机</div>
                                          <input type="tel" value={window.sessionStorage.getItem('username')} className="flex-l" readOnly/>
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
                                          <div>共<span className="listtotalqty">0</span>款产品&nbsp;合计&nbsp;<span className="listtotalprice">0</span>元</div>
                                    </div>
                                    {
                                          this.state.dataset.map(item=>{
                                                return (
                                                      <div className="product-list" key={item.id}>
                                                            <div className="flex flex-y flex-l baseonespe">
                                                                  <div className="flex flex-l content_2">
                                                                        <div className="flex-l">
                                                                              {item.name}&nbsp;&nbsp;&times;{item.n}
                                                                        </div>
                                                                        <div>￥<span>{item.price}</span></div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                                                    
                                                )
                                          })
                                          
                                    }
                              </div>
                              <div className="baseinfo tablewarep">
                                    <div className="baseonefoot on-border-bottom">
                                          <div className="flex">
                                                <div className="flex align-items-center tableware">
                                                      <div className="noselect" onClick={this.pot.bind(this)}>
                                                            <div className="innoselect"></div>
                                                      </div>
                                                      <span>不需要提供餐具，更环保<br /><span className="tableware-else">餐具包含勺子，叉子</span></span>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className="baseinfo">
                                    <div className="flex flex-y baseonefoot content_2">
                                          <div className="flex-1 flex">
                                                <div className="flex-1 title1 t1">需要开具发票</div>
                                                <div className="add-icon flex">
                                                      <div className="flag">
                                                            <div className="dot left" onClick={this.dot1.bind(this)}></div>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="tip-new">
                                                龙门客栈将为您开具电子发票，请留意随餐配送订单小票并扫描订单小票上的二维码，在开票平台进行发票开具申请
                                          </div>
                                    </div>
                              </div>
                              <div className="baseinfo foot" style={{marginBottom:'76px'}}>
                                    <div className="flex flex-y baseonefoot content_2 no-border-bottom">
                                          <div className="flex-1 flex">
                                                <div className="flex-1 title1">备注</div>
                                                <div className="add-icon flex">
                                                      <div className="flag">
                                                            <div className="dot left" onClick={this.dot2.bind(this)}></div>
                                                      </div>
                                                </div>
                                          </div>
                                          <div>
                                                <input type="text" className="beizhu" placeholder="请勿超过13字" maxLength="26"/>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <Dingdanfoot a={this.props.router}></Dingdanfoot>
               </div>
			)
		}
}