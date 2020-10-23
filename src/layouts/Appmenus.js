import React from "react";
import {connect} from "dva";
import {Spin} from "antd";
import axios from 'axios';
import { isUrl } from '../utils/utils';
import styles from './Appmenus.less';
import comJs from '../assets/js/common.js'
const webpath = comJs.webpath();
const webbase = comJs.webbase();
const webtoken = comJs.webtoken();

// const webpath = 'http://172.16.14.106:26611/dc/server/'
let menuData =[];
const Appmenus = (WrappedComponent) => {
  @connect(state => ({
    global: state.global,
  }))

  class Appmenus extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        menus:"",
        tokenstorage:[],
      };
    }

    componentWillMount() {
      if(comJs.nologin){
        // this.getToken();
        // this.getSys();
      }else{
        //this.getData();
        this.getSys();
      }
    }

    prepare=()=>{
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      const url = webtoken+'oauth2/oauth/token?grant_type=password&client_id=web_app&client_secret=secret&username='+sessionStorage.uername+'&password='+sessionStorage.password+''
      axios.post(url,{}).then(res=>{
        // console.log(res)
      })
    }

    //getData=()=>{
    //  return axios.get(`${webbase}server/base/getAntdMenus`, {
    //    withCredentials:true,
    //    params: {
    //      access_token: sessionStorage.access_token,
    //      loginId: sessionStorage.loginId,
    //      parentId: "ROOT",
    //    },
    //  }).then(res=>{
    //    return res;
    //  }).then(res=>{
    //    const _this = this;
    //    // 清空上次登陆结果
    //    sessionStorage.setItem("menuData",[{}])
    //    menuData=[];
    //    if(res){
    //      if(res.data.datas !== null){
    //        const item = res.data.datas;
    //        const len = item.length;
    //
    //        for (let i = 0; i < len; i++) {
    //          const childitem = item[i].children;
    //          const children = [];
    //          const childrenStorage = [];
    //          const childlen = item[i].children.length;
    //          for (let j = 0; j < childlen; j++) {
    //            children.push({
    //              name: childitem[j].resourcesName,
    //              icon: childitem[j].icon,
    //              path: childitem[j].route,
    //              itempath: childitem[j].targetUrl,
    //            })
    //          }
    //          menuData.push({
    //            name: item[i].resourcesName,
    //            icon: item[i].icon,
    //            path: item[i].targetUrl,
    //            itempath: item[i].route,
    //            children: children,
    //          })
    //
    //          setTimeout(function(){
    //            // console.log("step4")
    //            console.log(menuData)
    //            sessionStorage.setItem("menuData",JSON.stringify(menuData));
    //            _this.setState({
    //              menus:menuData,
    //            })
    //          })
    //
    //        }
    //      }
    //    }else{
    //      this.setState({
    //        menus:"retry",
    //      })
    //    }
    //  }).catch(error=>{
    //    // window.location.reload();
    //    if(error.request){
    //      if(error.request.status===401){
    //        sessionStorage.clear();
    //        window.location.reload();
    //      }
    //    }
    //  })
    //}

    getToken=()=>{
      const _this = this;
      this.props.dispatch({
        type: 'global/changeTheme',
        payload: 'glassBlue',
      });
      // 存储token
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      const url = webtoken+'oauth2/oauth/token?grant_type=password&client_id=web_app&client_secret=secret&username=admin&password=bonc'
      axios.post(url,{}).then(function(res) {
        const access_token = res.data.access_token;
        sessionStorage.setItem("access_token", access_token);
      });
      this.setState({
        tokenstorage:sessionStorage.length,
      })

      if(sessionStorage.length == 0){
        window.location.reload()
        setTimeout(()=>{
          _this.setState({
            tokenstorage:sessionStorage.length,
          })
        })
      }

    }

    // 获取系统设置
    getSys=()=>{
      this.getTime();
      this.getLogo();
    }

    // 获取时间
    getTime=()=>{
      axios.get(`${webbase}server/base/getSystemSet`, {
        params: {
          access_token: sessionStorage.access_token,
          propertyName:"sysDate",
        },
      }).then(response=>{
        return response;
      }).then(response=>{
        if(response.data !==0 && response.data.datas){
          const gettime = response.data.datas;
          const nowTime = gettime.substring(0,4) + "/" + gettime.substring(4,6) + "/" + gettime.substring(6,8);
          const nowTime2 = gettime.substring(0,4) + "-" + gettime.substring(4,6) + "-" + gettime.substring(6,8);
          sessionStorage.setItem("nowTime",nowTime);
          sessionStorage.setItem("nowTime2",nowTime2);
        }else{
          const now = new Date();
          const year = now.getFullYear();
          const mm = now.getMonth() + 1;
          const dd = now.getDate();
          sessionStorage.setItem("nowTime",year+"/"+mm+"/"+dd);
          sessionStorage.setItem("nowTime2",year+"-"+mm+"-"+dd);
        }
      })
    }

    // 获取logo
    getLogo=()=>{
      axios.get(`${webbase}server/base/getSystemSet`, {
        params: {
          access_token: sessionStorage.access_token,
          propertyName:"sysLogo",
        },
      }).then(response=>{
        return response;
      }).then(response=>{
        // console.log(response)
        if(response.data !==0 && response.data.datas && response.data.datas !== ""){
          const getLogo = response.data.datas;
          sessionStorage.setItem("getLogo",getLogo);
        }else{
          sessionStorage.setItem("getLogo","bonc");
        }
      })
    }

    render() {
      let menu0Data = sessionStorage.getItem("menuData");
      if(typeof menu0Data === "string" && menu0Data !== ""){
        // console.log("1")
        menu0Data=JSON.parse(menu0Data);
      }

      const menus = comJs.nologin?[]:menu0Data;
      // console.log("sessionStorage",menus)
      return (
        // this.state.tokenstorage == [] || menus == null ? <div className={styles.spin}><Spin spinning={true} /></div>:
        <WrappedComponent {...this.props} menus={menus} />
        // menus == null ? <div className={styles.spin}><Spin spinning={true} /></div>: <WrappedComponent {...this.props} menus={menus} />
      )
    }
  }

  return Appmenus;
};
export default Appmenus;
