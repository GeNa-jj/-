// import * as constants from './mainconstants'
import React from 'react'
import {Route} from 'react-router'
import {Router, hashHistory, browserHistory} from 'react-router'

export default function datagrid(state = {}, action){
    let _state = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'maining':
            _state.show = true;
            //
            break;
        case 'mained':
            _state.show = false;
           
            if(action.name){
               
                _state[action.name] = _state[action.name] || {};

                
                _state[action.name].dataset = action.result.text;
               // console.log( _state[action.name].dataset)
         
            } else {
                //_state.dataset = [{}, {}]
              
                _state.dataset = action.result.text;
            }
            break;
        case 'mainerror':
            _state.show =false;
            _state.error = action.error;
            break
    }
    return _state;
}