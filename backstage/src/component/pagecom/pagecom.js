import React,{Component} from 'react'
// import {connect} from 'react-redux'
import './page.css'
import fengyes from './pages.js'
export default class Pagecom extends Component{
     componentWillReceiveProps(newProps){
        var pag=newProps.config.pag*1;
        var page=newProps.config.page*1;
        var qty=newProps.config.qty*1;
        // console.log(pag,page,qty)
        var brr=fengyes(pag,page,qty)
        // console.log(brr,111)
        this.setState({
            pag,
            pagenum:brr
        })
        // console.log(this.state)
     }
     componentWillMount(){
        // console.log(this.props)
        var pag=this.props.config.pag;
        var page=this.props.config.page;
        var qty=this.props.config.qty;
        // console.log(pag,page,qty)
        var brr=fengyes(pag,page,qty)
        // console.log(brr)
        this.setState({
            pag,
            pagenum:brr
        })
     }
     state={
        pag:1,
        pagenum:[]
     }
     change(index){
        var val=this.refs[index].innerHTML;
        var arr="...";
        if(val!=arr){
           
        this.props.config.cb(val);
        }
        
     }
    render(){
        var html=<nav aria-label="...">
          <ul className="pagination">
               {this.state.pagenum.map((item,index)=>{
                    return (
                        <li className="page-item" key={index} className={item==this.state.pag?'active':'' } onClick={this.change.bind(this,index)} ><a className="page-link" ref={index}>{item}</a></li>
                        )
               })}
           </ul>
               </nav>
        return(
                <h4>{html}</h4>
            )
    }
}
