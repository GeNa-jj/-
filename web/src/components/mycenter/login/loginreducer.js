export default function login(state = {}, action){
    let _state = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'logining':
            _state.show = true;
            break;
        case 'logined':
            _state.show = false;
            break;
        case 'loginerror':
            _state.show = false;
            break;
    }
    return _state;
}