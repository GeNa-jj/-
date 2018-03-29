import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Router, hashHistory, browserHistory,Link} from 'react-router'
export default class Navcomponent extends Component{ 
    state={
      navcontentid:-1,
    }
    navchange(index){
      this.setState({
        navcontentid:index
      })
    }
    render(){
       var menuDatas = [
            {id:"0",  label:"产品管理",     children:[
                {id:"011",  label:"产品应用",url:'/home/main/products'},
                {id:"012",  label:"修改记录",url:'/home/main/products'}
               
            ]},
            {id:"1",  label:"用户管理",    children:[
                {id:"021",  label:"修改密码",url:'/home/main/products'},
               
            ]},
            {id:"2",  label:"客户管理",    children:[
                {id:"031",  label:"订单管理",url:'/home/custom/order'},
                {id:"032",  label:"客户管理",url:'/home/custom/message'},
               
            ]}
        ];
       var navcontent=menuDatas.map((item,index)=>{
         
           return (
                    <li key={item.id} className={item.id==this.state. navcontentid?'active':''} onClick={this.navchange.bind(this,item.id)}>{item.label}
                        
                         {item.children.map((items)=>{
                            
                          let paths=items.url
                         
                         
                           return (
                            <h5 key={items.id}>
                               <Link to={{ pathname:paths}}>{items.label}
                               </Link>

                            </h5>
                        

                            )
                          })
                        } 
                
                    </li>
                    )
        })
       
        return(
          <div>
               <ul>
                     {navcontent}
                 </ul>
          </div>
            )
    }
}
