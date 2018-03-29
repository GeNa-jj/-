import React,{Component} from 'react'
// import {connect} from 'react-redux'

import SpinnerComponent from '../../spinner/SpinnerComponent'
// import * as mainaction from '../main/homeaction.js'
import http from '../../utils/httpclient.js'
// import Page from '../pagecomponent/pagecomponent.js'
import './main.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import Modal from '../amodal/modalcomponent.js'
 class Maincomponent extends Component{ 

state={
  datas:[],
  dataqty:0,
  shows:false,
  page:1,
  qty:6,
  pages:1,
  pagenum:[],
  showss:false,
  item:''
}
 componentWillMount(){
    this.setState({
      shows:true
    })
    // console.log(this.props.router.params.orderid)
    var url = this.props.router.params.orderid;
    console.log(url)
    let params={
      page:this.state.page,
      qty:this.state.qty
    }
      http.get(url,params).then(res=>{
        var pages=Math.ceil(res[1][0]['rowsCount']/this.state.qty)
        // console.log(pages)
      this.setState({
          shows:false,
          dataqty:res[1][0]['rowsCount'],
          datas:res[0],
          pages,
        })
      
      })
}

 getKeys(item){
        return item ? Object.keys(item) : [];
    }
 change(index){
   console.log(1)
   var url = this.props.router.params.orderid;
   var ins=index+1;
   this.setState(
         {
            page:ins,
         }
    )
    let params={
      page:ins,
      qty:this.state.qty,
      shows:true
    }
      http.get(url,params).then(res=>{
      this.setState({
          shows:false,
          datas:res[0],
         
        })
      console.log(12)
      })
 }
openItem(item){
  this.setState({
    showss:true,
    item

  })
}
closeWindow(){
  this.setState(
  {
    showss:false
  })
}
search(){
    String.prototype.trim = function() {
    return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  }
  var val=this.refs.search.value.trim();
  console.log(0,val)
  if(val){
      var url = this.props.router.params.orderid;
      let params={
        page:this.state.page,
        qty:this.state.qty,
        name:val,
      }
     http.get(url,params).then(res=>{
            var pages=Math.ceil(res[1][0]['rowsCount']/this.state.qty)
            // console.log(pages)
          this.setState({
              shows:false,
              dataqty:res[1][0]['rowsCount'],
              datas:res[0],
              pages,
            })
          
          })

  }else{
    location.reload()
  }
}

    render(){
          var addproduct={}
         var thead=this.getKeys(this.state.datas[0]).map((key)=>{
              addproduct[key]='';
             return <th key={Math.random()} scope="col">{key}</th>
         }) 
         let contents=[];
          for(let i=1;i<=this.state.pages;i++){
              contents.push(i)
          }

        return(

          <div className='dyma' >
          <h4><input type='text' ref='search'/><button type="button" className="btn btn-info" onClick={this.search.bind(this)}>查询</button><button type="button" className="btn btn-info" onClick={this.openItem.bind(this,addproduct)}>添加商品</button></h4>
                 <div><table className="table table-bordered"><thead><tr>{thead}</tr></thead>
                       <tbody>{
                          this.state.datas.map((items)=>{
                               return (
                                    <tr key={items.id} onClick={this.openItem.bind(this,items)}>
                                        {
                                            this.getKeys(items).map((key) => {
                                                return <td key={Math.random()}>{items[key]}</td>
                                            })
                                        }
                                    </tr>
                                )
                            })}
                          </tbody>
                      </table>
                  </div>
                  <h3 className='page'>
                     <nav aria-label="...">
                      <ul className="pagination">
                    {
                           contents.map((item,index)=>{
                              return ( <li className="page-item"onClick={this.change.bind(this,index)} key={index}><a className="page-link"><span key={item} className={index+1==this.state.page?'active':'' } >{item}</span></a></li>)
                              })
                    }
                       </ul>
                  </nav>
                          
                  </h3>
                  <Modal show={this.state.showss} product={this.state.item} config={{cb:this.closeWindow.bind(this)}}></Modal>
                <SpinnerComponent show={this.state.shows} ></SpinnerComponent>
            </div>
            )
    }
}



export default Maincomponent;

