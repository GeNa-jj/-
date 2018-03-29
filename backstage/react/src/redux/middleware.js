import http from '../utils/httpclient.js'
// import * as constants from '../component/login/loginconstants'

export default function(api){
    return function(dispatch){
        //dispatch
        return function(action){
            let {type, types, url, data, method = 'get', name} = action;
            // console.log(JSON.stringify(action));
            if(!url){
                //手动调用 reducer
               return dispatch(action)
            }
           
            dispatch({type: types[0]})
            console.log(343434)
            http[method](url, data).then((res) => {
              
                let _action = {
                    type: types[1],
                    name,
                    result: res
                }
                dispatch(_action)
            }).catch((error) => {
                dispatch({type: type[2]})
            })
        }
    }
}