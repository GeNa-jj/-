export function login(config){
    return {
        types: ['logining', 'logined', 'loginerror'],
        url: config.url,
        method: config.method || 'get',
        data: config.data || {},
        name: config.name
    }
}