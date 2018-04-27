import Cookie from 'js-cookie';

export function getToken(){
    return Cookie.get('token')
}
export function setToken(token){
    return Cookie.set('token',token)
}