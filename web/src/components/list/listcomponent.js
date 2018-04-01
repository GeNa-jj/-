import React from 'react'
import HeaderComponent from '../header/headercomponent.js'

import './listcomponent.scss'

import Dangjitexuan from './texuan/dangjitexuan.js'
import CarouselComponent from '../home/carousel/carouselcomponent'
import './texuan/dangjitexuan.scss'

import Footer from './footer/footer.js'

export default class ListComponent extends React.Component{
    componentDidMount(){
        var mySwiper = new Swiper ('.swiper-container', {
             
            direction: 'horizontal',
            
            autoplay:2000,
            
            loop: true,
            pagination: '.swiper-pagination',
            
            paginationClickable:true,

            
            // nextButton: '.swiper-button-next',
            // prevButton: '.swiper-button-prev',

            autoplayDisableOnInteraction:false,
        });
        var obj = {};
        var isfirst = true;
        function getoffsetTop(){
            if(isfirst){
                obj = {
                    '.dangjitexuan': $('.dangjitexuan').offset().top,
                    '.pisa': $('.pisa').offset().top,
                    '.yimian': $('.yimian').offset().top,
                    '.fanshi': $('.fanshi').offset().top,
                    '.xiaochi': $('.xiaochi').offset().top,
                    '.tiandian': $('.tiandian').offset().top,
                    '.drinks': $('.drinks').offset().top
                }
                isfirst = false;  
            }
        }  
        $('.mainLeft').on('click','li',function(){
            getoffsetTop();
            $('.mainRight').animate({'scrollTop':obj[this.className]-($('.swiper-container').outerHeight(true)+$('header').outerHeight(true))*1.03},500); 
        });

        $('li').eq(7).css('color','red');
        $('.main')[0].onscroll = function(e){
            getoffsetTop();
        }
        $('.mainRight')[0].onscroll = function(e){
            getoffsetTop();
            var arr = ['.dangjitexuan', '.pisa', '.yimian', '.fanshi', '.xiaochi', '.tiandian', '.drinks'];
            for(var i=0;i<arr.length;i++){
                if($(arr[i]).offset().top < $('#list').outerHeight()*0.75 && $(arr[i]).offset().top>($('#list').outerHeight()*0.75 - $(arr[i]).outerHeight())){
                    $('li').eq(i+7).css('color','red').siblings('li').css('color','');
                }  
            }
            $('.main').scrollTop($(e.target).scrollTop());    
        } 
        this.refs.foot.total();
    }
    componentWillMount(){
        if(window.sessionStorage.getItem('items')){  
            this.setState({
                show:true
            })       
        }else{
            this.setState({
                show:false
            }) 
        }       
    }
    state = {
        show:false,
        id:null
    }
    showup(){
        this.setState({
            show:true
        })
    }
    getId(id){
        this.setState({
            id:id
        })
    }
    render(){      
        return (
            <div id="list">
                <div className="head">
                    <HeaderComponent a={this.props.router}/>
                </div>
                <div className="main">
                    <CarouselComponent />
                    <div className="mainTop">
                        <ul className="mainLeft">
                            <li className=".dangjitexuan">
                                <i className="iconfont icon-huangguan"></i>
                                <p>当季特选</p>
                            </li>
                            <li className=".pisa">
                                <i className="iconfont icon-pisa"></i>
                                <p>披萨</p>
                            </li>
                            <li className=".yimian">
                                <i className="iconfont icon-mianshi"></i>
                                <p>意面</p>
                            </li>
                            <li className=".fanshi">
                                <i className="iconfont icon-mifan"></i>
                                <p>饭食</p>
                            </li>
                            <li className=".xiaochi">
                                <i className="iconfont icon-xiaochi"></i>
                                <p>小吃</p>
                            </li>
                            <li className=".tiandian">
                                <i className="iconfont icon-tangcai"></i>
                                <p>甜点</p>
                            </li>
                            <li className=".drinks">
                                <i className="iconfont icon-yinliao"></i>
                                <p>饮料</p>
                            </li>
                        </ul>
                        <section className="mainRight">
                            <Dangjitexuan config={{url:'product',name:"listproduct"}} showup={this.showup.bind(this)} getId={this.getId.bind(this)}/>
                            <div className="mainFoot">
                                <div className="title">友情提示</div>
                                <p>
                                    必胜客宅急送服务时间：10:00-22:00<br/>
                                    必胜客宅急送不同城市或不同餐厅的送餐菜单和价格有所不同。不同时段产品品项及价格有所不同。工作日特惠午餐及下午茶产品只在部分时段供应。详情以输入送餐地址后显示的实际供应的菜单为准。
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
                <Footer a={this.props.router} ref="foot" show={this.state.show} id={this.state.id}/>
            </div>
        )
    }
}