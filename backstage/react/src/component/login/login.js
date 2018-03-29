import React,{Component} from 'react'
import {connect} from 'react-redux'
import SpinnerComponent from '../../spinner/SpinnerComponent'
import * as actions from './loginaction'
import './login.css'
class LoginComponent extends Component{
    login(){
     var config={url: 'htuser', name: 'login',method:'post', data: {name: 'admin', password:this.refs.password.value}}
        this.props.refresh(config)
    }
    componentWillReceiveProps(newprops){
      var data='';
      
      if(newprops.dataset.login){
           data=JSON.parse(newprops.dataset.login.dataset)['token'];
           
      }
      if(data){

        if(data.length>0){
               window.localStorage.setItem('dktoken',data);
               window.localStorage.setItem('dkname','admin');
            
               newprops.dataset.login.dataset='{}';
                this.props.router.push('/home')
               
              }

      }
      
    
           
    }

    render(){
        return(
          <div className='login'>
            <div className="modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">龙门客栈</h5>
                      
                    </div>
                    <div className="modal-body">
                      <div className="form-group row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">用户</label>
                            <div className="col-sm-10">
                              <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value="admin"/>
                            </div>
                      </div>
                      <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                              <input type="password" className="form-control" id="inputPassword" placeholder="Password" ref='password'/>
                             </div>
                       </div>
                            <button onClick={this.login.bind(this)}>Login</button>
                     </div>
                 
                  </div>
                </div>
              </div>







               
             
              <SpinnerComponent show={this.props.show}></SpinnerComponent>
            </div>
            )
    }
}

const LoginProps = (state) => {
    return {
        dataset: state.login, //{student: {dataset: []}, modal: {dataset: []}}
        show: state.login.show,
        error: state.login.error
    }
}

export default connect(LoginProps, actions)(LoginComponent);