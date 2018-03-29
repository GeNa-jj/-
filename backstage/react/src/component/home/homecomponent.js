import React,{Component} from 'react'
import {connect} from 'react-redux'
import jwt from 'jsonwebtoken'
import SpinnerComponent from '../../spinner/SpinnerComponent'
import './home.css'
import Navcomponent from '../nav/navcomponent.js'
export default class Homecomponent extends Component{ 
    componentWillMount(){
     
      var router=this.props;
     
       var username = jwt.verify(window.localStorage.getItem('dktoken'), 'secret',function(error,data){
                if(error){
                    window.localStorage.removeItem('dktoken');
                    window.localStorage.removeItem('dkname');
                    router.router.push('/login')
                   
                }else{
                    return window.localStorage.getItem('dkname');
                }
            })
       this.setState({
            admin:username
        })
    }
    removelogin(){
      window.localStorage.removeItem('dktoken');
      window.localStorage.removeItem('dkname'); 
      this.props.router.push('/login')
    }
    state={
      admin:''
    }
    render(){
        return(
          <div className='dymain'>
            <div className='mainheader'>
                <span>&nbsp;&nbsp;当前用户：{this.state.admin}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.removelogin.bind(this)}>退出登录</button>
            </div>
            <div className='dynav'>
                 <Navcomponent/>
            </div>
            <div className='dymains'>
               {this.props.children}    
            </div>

              <SpinnerComponent show={this.props.show}></SpinnerComponent>
            </div>
            )
    }
}
