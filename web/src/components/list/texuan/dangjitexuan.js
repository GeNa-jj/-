import React from 'react'

import {connect} from 'react-redux'
import * as Action from '../../datagrid/datagridaction'
import Modal from '../modal/modalcomponent.js'

import Spinner from '../../spinner/SpinnerComponent'
class Dangjitexuan extends React.Component{
    componentWillMount(){
        this.props.refresh(this.props.config)
    }
    state = {
        show:false,
        id:null
    }
    showup(id){
        this.setState({
            show:true,
            id:id
        });
    }
    hidden(){
        this.setState({
            show:false
        })
    }
    render(){

        let ds = this.props.news;
        // console.log(ds);
        let name = this.props.config.name;
        if(name){
            ds = ds[name] ? ds[name].dataset.data : []
            // console.log(ds);
        } else {
            ds = ds.dataset;
        }
        let dangjitexuan = [];
        let pisa = [];
        let yimian = [];
        let fanshi = [];
        let xiaochi = [];
        let tiandian = [];
        let drinks = [];
        ds.map((item)=>{  
            if(item.genre=='当季精选'){
                dangjitexuan.push(item);
            }else if(item.genre == '比萨'){
                pisa.push(item);
            }else if(item.genre =='意面'){
                yimian.push(item);
            }else if(item.genre=='饭食'){
                fanshi.push(item);
            }else if(item.genre=='小吃'){
                xiaochi.push(item);
            }else if(item.genre=='甜点'){
                tiandian.push(item);
            }else if(item.genre=='饮料'){
                drinks.push(item);
            }
        })
        return(
            <div id="dangji">
                <dl>
                    <dt>当季特选</dt>
                    {
                        dangjitexuan.map((item) => {
                            return <dd key={item.id} onClick={this.showup.bind(this,item.id)}>
                                        <img src={"src/assets/imgs/"+item.img}/>
                                        <div className="dataTitle">
                                            <h3>{item.name}</h3>
                                            <p>{item.exp}</p>
                                            <button>订购</button>
                                        </div>
                                </dd>

                        })
                    }
                </dl>
                <dl>
                <dt>披萨</dt>
                    {
                        pisa.map((item) => {
                            return <dd key={item.id} onClick={this.showup.bind(this,item.id)}>
                                        <img src={"src/assets/imgs/"+item.img}/>
                                        <div className="dataTitle">
                                            <h3>{item.name}</h3>
                                            <p>{item.exp}</p>
                                            <button>订购</button>
                                        </div>
                                </dd>

                        })
                    }
                </dl>
                <dl>
                    <dt>意面</dt>
                    {
                        yimian.map((item) => {
                            return <dd key={item.id} onClick={this.showup.bind(this,item.id)}>
                                        <img src={"src/assets/imgs/"+item.img}/>
                                        <div className="dataTitle">
                                            <h3>{item.name}</h3>
                                            <p>{item.exp}</p>
                                            <button>订购</button>
                                        </div>
                                </dd>

                        })
                    }
                </dl>
                <dl>
                    <dt>饭食</dt>
                    {
                        fanshi.map((item) => {
                            return <dd key={item.id} onClick={this.showup.bind(this,item.id)}>
                                        <img src={"src/assets/imgs/"+item.img}/>
                                        <div className="dataTitle">
                                            <h3>{item.name}</h3>
                                            <p>{item.exp}</p>
                                            <button>订购</button>
                                        </div>
                                </dd>

                        })
                    }
                </dl>
                <dl>
                    <dt>小吃</dt>
                    {
                        xiaochi.map((item) => {
                            return <dd key={item.id} onClick={this.showup.bind(this,item.id)}>
                                        <img src={"src/assets/imgs/"+item.img}/>
                                        <div className="dataTitle">
                                            <h3>{item.name}</h3>
                                            <p>{item.exp}</p>
                                            <button>订购</button>
                                        </div>
                                </dd>

                        })
                    }
                </dl>
                <dl>
                    <dt>甜点</dt>
                    {
                        tiandian.map((item) => {
                            return <dd key={item.id} onClick={this.showup.bind(this,item.id)}>
                                        <img src={"src/assets/imgs/"+item.img}/>
                                        <div className="dataTitle">
                                            <h3>{item.name}</h3>
                                            <p>{item.exp}</p>
                                            <button>订购</button>
                                        </div>
                                </dd>

                        })
                    }
                </dl>
                <dl>
                    <dt>饮料</dt>
                    {
                        drinks.map((item) => {
                            return <dd key={item.id} onClick={this.showup.bind(this,item.id)}>
                                        <img src={"src/assets/imgs/"+item.img}/>
                                        <div className="dataTitle">
                                            <h3>{item.name}</h3>
                                            <p>{item.exp}</p>
                                            <button>订购</button>
                                        </div>
                                </dd>

                        })
                    }
                </dl>
                <Modal show={this.state.show} getId={this.props.getId} id={this.state.id} hidden={this.hidden.bind(this)} showup={this.props.showup}/>
                <Spinner show={this.props.show}/>
            </div>
            )
    }
}

const Ystore = (store)=>{
    return{
        news:store.datagrid,
        show:store.datagrid.show
    }
}
export default connect(Ystore,Action)(Dangjitexuan)