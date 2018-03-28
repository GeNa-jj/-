import React from 'react'

import {connect} from 'react-redux'
import * as Action from '../../datagrid/datagridaction'
import Modal from '../modal/modalcomponent'

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
        })
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
        return(
            <div>
                <dl>
                    <dt>当季特选</dt>
                    {
                        ds.map((item) => {
                            return <dd key={item.id} onClick={this.showup.bind(this,item.id)}>
                                        <img src={"src/assets/imgs/"+item.img}/>
                                        <div className="dataTitle">
                                            <h3>{item.pro}</h3>
                                            <button>订购</button>
                                        </div>
                                </dd>

                        })
                    }
                </dl>
                <Modal show={this.state.show} id={this.state.id} hidden={this.hidden.bind(this)} showup={this.props.showup}/>
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