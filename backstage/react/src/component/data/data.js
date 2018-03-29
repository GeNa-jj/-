import React,{Component} from 'react'
import  http from '../../utils/httpclient.js'
import Spinner from '../../spinner/SpinnerComponent.js'
import './data.css'
import Page from '../pagecom/pagecom.js'
export default class Data extends Component{
    // componentWillMount(){
    //     var url=this.props.config;
         
    //     http.post(url).then(res=>{
    //         var results=JSON.parse(res['text'])
            
            
    //         this.setState({
    //             datas:results,
    //             show:false
    //         })
    //     })
    // }  
    componentWillReceiveProps(newProps){
      
         var url=newProps.config;
         this.setState({
            url
         })
                  var params={
            pag:this.state.pag,
            page:this.state.page
         }
         // console.log(params,3)
        http.post(url,params).then(res=>{
           
            var results=JSON.parse(res['text'])
            // console.log(results,results[1][0]['rowsCount'])
            this.setState({
                datas:results[0],
                show:false,
                qty:results[1][0]['rowsCount'],
                page:6
            })
        })
    }
    state={
        url:'',
        datas:[],
        show:true,
        pag:1,
        qty:1,
        page:6
    } 
     getKeys(item){
        return item ? Object.keys(item) : [];
    }
    fengye(index){
         this.setState({
            pag:index
        })
         var params={
            pag:index,
            page:this.state.page
         }
         // console.log(params)
       http.post(this.state.url,params).then(res=>{
       
        var results=JSON.parse(res['text'])
        // console.log(results,results[1][0]['rowsCount'])
        this.setState({
            datas:results[0],
            show:false,
            qty:results[1][0]['rowsCount'],
            page:6
        })
    })
      
    }
    render(){    
            var thead=this.getKeys(this.state.datas[0]).map((key)=>{
                         return <th key={Math.random()} scope="col">{key}</th>
                 }) 
               var html=<div id="datas"><table className="table table-bordered"><thead><tr>{thead}</tr></thead>
                       <tbody>{
                            this.state.datas.map((items)=>{
                               return (
                                    <tr key={items.id}>
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





        return (
            <div>
                {this.props.config ? html:null} 
                 <Page config={{pag:this.state.pag,qty:this.state.qty,page:this.state.page,cb:this.fengye.bind(this)}}></Page>
                 <Spinner show={this.state.show}></Spinner>

            </div>
           
            )
    }
}