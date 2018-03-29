// import * as constants from './mainconstants.js'

export function refreshs(_config){
   
    return {
        types: ['maining', 'mained', 'mainerror'],
        url: _config.url,
        method: _config.method || 'get',
        data: _config.data || {},
        name: _config.name
    }
}