// 标题配置
export  const companyTit = "BONC";
export  const logoTit = ""
export  const projectTit = "国家优质工程奖";
// 版权信息
export  const copyright ="中国施工企业管理协会 Copyright © 2018";
// 无登录开关 true无登录  false 需要登录
export const nologin = true;


// true 正式环境  false 开发环境
const flag = true;

// 接口路径
function webpath() {
  if(flag){
    return "http://136.192.58.139:26622/dc/server/test/";
  }else{
    return "http://172.16.14.117:26622/dc/server/test/";
  }
}
// base接口路径（包含菜单等）
function webbase() {
  if(flag){
    return "http://136.192.58.139:26622/dc/";
  }else{
    return "http://172.16.14.117:26622/dc/";
  }
}
// accesstoken接口
function webtoken() {
  if(flag){
    return "http://136.192.58.139:26627/dc/";
  }else{
    return "http://172.16.14.117:26627/dc/";
  }
}
// url
function getUrl() {
  if(flag){
     return "http://124.127.61.154:8383";
    //return "http://172.16.64.115:8383";

  }else{
    // return "http://172.16.14.106:10086";
    return "http://39.106.124.21:8383";
  }
}

export default {
  companyTit,
  logoTit,
  projectTit,
  copyright,
  webpath,
  webbase,
  webtoken,
  nologin,
  getUrl,
}
