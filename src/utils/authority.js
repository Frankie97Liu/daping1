import comJs from '../assets/js/common.js'
// use sessionStorage to store the authority info, which might be sent from server in actual project.
export function getAuthority() {
  // return sessionStorage.getItem('antd-pro-authority') || 'admin';
  return comJs.nologin?'admin':sessionStorage.getItem('antd-pro-authority') || 'guest';
}

export function setAuthority(authority) {
  return sessionStorage.setItem('antd-pro-authority', authority);
}
