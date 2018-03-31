import React from 'react'
import {connect} from 'react-redux'
import http from '../../utils/httpclient.js'

import './datagridcomponent.scss'
import Spinner from '../spinner/SpinnerComponent'

class DatagridComponent extends React.Component{
    componentWillMount(){
        http.post('productId',{id:this.props.id}).then((res)=>{
            this.setState({
                dataset:res,
                show:false
            })
        })
    }
    state = {
        dataset:[],
        show:true
    }
    getHidden(){
        this.props.hidden()
          
    }
    getShowUp(id,e){ 
         this.props.showup();
         this.props.hidden();
         this.props.getId(id);
              
         $('<div class="redpot"/>').css({width: '20px',height: '20px',borderRadius:'50%',backgroundColor: '#ff4040',zIndex: '9999', position: 'absolute',left: '550px',top: '1000px'}).appendTo('body').animate({left: '58px',top: '1280px'},function(){
            $(this).remove()
         });
    }
    componentDidUpdate(){
        if($('.datarigTop').find('span').text()==''){
            $('.datarigTop').find('span').css('display','none');
        }
        
    }
    render(){
        // console.log(this.props)
        let html = (
            <div className="datagrid">
                {
                    this.state.dataset.map((item)=>{
                        return (
                                <div key={item.id}>
                                    <img src={"src/assets/imgs/" + item.img}/>
                                    <div className="datarigTop">
                                        <h3>{item.name}</h3>
                                        <span>{item.exp}</span>
                                    </div>
                                    <p>
                                        腊肉肠、香肠、火腿、牛肉，搭配菠萝、蘑菇、洋葱、青椒等蔬菜水果，如此丰盛馅料，口口都是令人满足的好滋味。<br/>
                                        主要原料:面团、牛肉粒、猪肉粒、火腿、腊肉肠、芝士、蔬菜、菠萝、黑橄榄
                                    </p>
                                    <div className="datarigFoot">
                                        <span>￥{item.price} 起/{item.pro}</span>
                                        <div onClick={this.getShowUp.bind(this,item.id)}>订购</div>
                                    </div>
                                </div>
                            )
                    })
                }
                <Spinner show={this.state.show}/>
                <div className="datagridLast" onClick={this.getHidden.bind(this)}><i></i><span>X</span></div>
            </div>
        )
        
        return html
    }
}

export default DatagridComponent