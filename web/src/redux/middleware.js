import http from '../utils/httpclient'

export default function(api){
    return function(dispatch){
        //dispatch
        return function(action){
            let {type, types, url, data, method = 'get', name} = action;
            if(!url){
                //手动调用 reducer
               return dispatch(action)
            }

            dispatch({type: types[0] || type});

            return new Promise((resolve, reject) => {
                http[method](url, data).then(res => {
                    dispatch({
                        type: types[1] || type,
                        name,
                        result: res
                    });
                    resolve(res);
                }).catch(error => {
                    dispatch({type: types[2] || type});
                    reject(error);
                });
            });
        }
    }
}