import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { isUrl } from '../utils/utils';
import comJs from '../assets/js/common.js'
const webpath = comJs.webpath();
const webbase = comJs.webbase();

// const menuData = [
//   {
//     name: '数据可视化',
//     icon: 'dashboard',
//     path: 'page',
//     children: [
//       {
//         name: '客流量概览',
//         path: 'page1',
//       },
//       {
//         name: '景区指数概览',
//         path: 'page4',
//       },
//       {
//         name: '人口峰值概览',
//         path: 'echarts',
//       },
//       {
//         name: '通话行为概览',
//         path: 'page5',
//       },
//       {
//         name: '生产情况概览',
//         path: 'page6',
//       },
//       {
//         name: '宏观选址概览',
//         path: 'page3',
//       },
//       {
//         name: '景区概览',
//         path: 'page7',
//       },
//       {
//         name: '客流分析',
//         path: 'page8',
//       },
//     ],
//   },
//
//
//   // {
//   //   name: 'masterD',
//   //   icon: 'table',
//   //   path: 'data',
//   //   children: [
//   //     {
//   //       name: '标准管理',
//   //       path: 'data1',
//   //     },
//   //     {
//   //       name: '主数据来源',
//   //       path: 'resource',
//   //       children: [
//   //         {
//   //           name: '业务系统',
//   //           path: 'OperationSys',
//   //         }
//   //       ]
//   //     }
//   //   ],
//   // },
//
//
//   {
//     name: '数据资产',
//     icon: 'table',
//     path: 'assets',
//     children: [
//     {
//       name: '业务视图',
//       path: 'businessView'
//     },
//     {
//       name: '资产评估',
//       path: 'capitalRating'
//     },
//     {
//       name: '系统资产分析',
//       path: 'asset'
//     },
//       {
//         name: '数据流图',
//         path: 'dataFlowView'
//       },
//       // {
//       //   name: '物理视图',
//       //   path: 'physicalView'
//       // },
//       {
//         name: '数据概括',
//         path: 'dataView'
//       },
//       {
//         name: '主机资源概况',
//         path: 'hostRes',
//       },
//     ],
//   },
//
//
//   {
//     name: 'dashboard',
//     icon: 'dashboard',
//     path: 'dashboard',
//     children: [
//       {
//         name: '监控页',
//         path: 'monitor',
//       },
//       {
//         name: '分析页',
//         path: 'analysis',
//       },
//       {
//         name: '工作台',
//         path: 'workplace',
//       },
//     ],
//   },
//   {
//     name: '表单页',
//     icon: 'form',
//     path: 'form',
//     children: [
//       {
//         name: '基础表单',
//         path: 'basic-form',
//       },
//       {
//         name: '分步表单',
//         path: 'step-form',
//       },
//       {
//         name: '高级表单',
//         authority: 'admin',
//         path: 'advanced-form',
//       },
//     ],
//   },
//   {
//     name: '列表页',
//     icon: 'table',
//     path: 'list',
//     children: [
//       {
//         name: '查询表格',
//         path: 'table-list',
//       },
//       {
//         name: '标准列表',
//         path: 'basic-list',
//       },
//       {
//         name: '卡片列表',
//         path: 'card-list',
//       },
//       {
//         name: '搜索列表',
//         path: 'search',
//         children: [
//           {
//             name: '搜索列表（文章）',
//             path: 'articles',
//           },
//           {
//             name: '搜索列表（项目）',
//             path: 'projects',
//           },
//           {
//             name: '搜索列表（应用）',
//             path: 'applications',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: '详情页',
//     icon: 'profile',
//     path: 'profile',
//     children: [
//       {
//         name: '基础详情页',
//         path: 'basic',
//       },
//       {
//         name: '高级详情页',
//         path: 'advanced',
//         authority: 'admin',
//       },
//     ],
//   },
//   {
//     name: '结果页',
//     icon: 'check-circle-o',
//     path: 'result',
//     children: [
//       {
//         name: '成功',
//         path: 'success',
//       },
//       {
//         name: '失败',
//         path: 'fail',
//       },
//     ],
//   },
//   {
//     name: '功能测试',
//     icon: 'check-circle-o',
//     path: 'functional',
//     children: [
//       {
//         name: 'ECharts',
//         path: 'echarts',
//       },
//       {
//         name: 'G2Chart',
//         path: 'g2chart',
//       },
//       {
//         name: 'AntMotion',
//         path: 'antmotion',
//       },
//     ],
//   },
//
//   {
//     name: '异常页',
//     icon: 'warning',
//     path: 'exception',
//     children: [
//       {
//         name: '403',
//         path: '403',
//       },
//       {
//         name: '404',
//         path: '404',
//       },
//       {
//         name: '500',
//         path: '500',
//       },
//       {
//         name: '触发异常',
//         path: 'trigger',
//         hideInMenu: true,
//       },
//     ],
//   },
//   // {
//   //   name: '动态效果',
//   //   path: 'antmotion',
//   // },
//   {
//     name: '账户',
//     icon: 'user',
//     path: 'user',
//     authority: 'guest',
//     children: [
//       {
//         name: '登录',
//         path: 'login',
//       },
//       {
//         name: '注册',
//         path: 'register',
//       },
//       {
//         name: '注册结果',
//         path: 'register-result',
//       },
//     ],
//   },
// ];
// const webpath = 'http://172.16.14.106:26611/dc/server/'
// const webpath = 'http://172.16.75.20:26622/dc/server/'
let menuData =[];

function getData(){
  return axios.get(`${webbase}server/base/getAntdMenus`, {
    withCredentials:true,
    params: {
      access_token: sessionStorage.access_token,
      loginId: sessionStorage.loginId,
      parentId: "ROOT",
    },
  }).then((res)=>{
    return res;
  }).catch((error)=>{
    if(error.request.response === ""){
      sessionStorage.clear();
      window.location.reload();
    }
  })
}

//getData().then((res)=>{
//  if(res){
//    if(res.data.datas !== null){
//      const item = res.data.datas;
//      const len = item.length;
//      // 清空上次登陆结果
//      sessionStorage.setItem("menuData","")
//      menuData=[];
//
//      for (let i = 0; i < len; i++) {
//        const childitem = item[i].children;
//        const children = [];
//
//        if(item[i].children){
//          const childlen = item[i].children.length;
//          for (let j = 0; j < childlen; j++) {
//            children.push({
//              name: childitem[j].resourcesName,
//              icon: childitem[j].icon,
//              path: childitem[j].route,
//              itempath: childitem[j].route,
//          })
//        }
//
//        menuData.push({
//          name: item[i].resourcesName,
//          icon: item[i].icon,
//          path: item[i].route,
//          itempath: item[i].route,
//          children: children,
//        })
//          console.log(menuData)
//        sessionStorage.setItem("menuData",JSON.stringify(menuData));
//        // console.log("children",menuData)
//        }
//      }
//    }
//  }
//})

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = '/' + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    // console.log("children",result)
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
