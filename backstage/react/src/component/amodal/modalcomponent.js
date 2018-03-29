import React, {Component} from 'react'

// import DatagridComponent from '../datagrid/datagridcomponent'
import http from '../../utils/httpclient.js'
import './modal.css'

class ModalComponent extends Component{
state={
    id:''
}
close(){
        
        
        this.props.config.cb()
        
       
    }
deletes(){
    alert('确认删除改商品')
    var params={
        id:this.props.product.id
    }
        var url='deleteproduct'
       http.post(url,params).then(res=>{
            
            this.props.config.cb()
        location.reload()

      
      })

}
getProduct(){
   let arr=this.getKeys(this.props.product)
    var allps=this.refs.objproduct.children
   var params={};
    for(let i=0;i<allps.length;i++){
        params[arr[i]]=allps[i].children[1].value
    }
        params['add']=false;
    if(this.props.product.id){
    params[arr[0]]=this.props.product.id;
    params['add']=true
    }
    console.log(params)
     var url='addproduct'
       http.post(url,params).then(res=>{
           
            this.props.config.cb()
        location.reload()

      
      })


}
 getKeys(item){
        return item ? Object.keys(item) : [];
    }

    render(){
        let content = null;
      
        if(this.props.product){ 
             if(this.props.product.id==''){
                 content=this.getKeys(this.props.product).map((key,index) => {
                        return <p key={key}><span>{key} :</span> <input key={Math.random()}  /></p>
                             })
                }
          else{
            content=this.getKeys(this.props.product).map((key,index) => {
            return <p key={key}><span>{key} :</span> <input key={Math.random()} placeholder={this.props.product[key]} disabled={index==0?true:false} /></p>
                 })
          } 
        }


        let html = (
            <div className="Marco-modal">
                <div className="Marco-modalBody">
                    <div className="Marco-modalHeader">
                        <h5>商品详情</h5>
                        <span className="Marco-modalClose" onClick={this.close.bind(this)}>&times;</span>
                    </div>
                    <div className="Marco-modalMain" ref='objproduct'>
                        {content}
                    </div>
                    <div className="Marco-modalBtn">
                        <button className="btn btnSecondary" onClick={this.deletes.bind(this)}>删除</button>
                        <button className="btn btnPrimary" onClick={this.getProduct.bind(this)}>保存</button>
                    </div>
                </div>
                <div className="Marco-modalShade"></div>
            </div>
        )
        return this.props.show ? html : null;
    }
}

export default ModalComponent;