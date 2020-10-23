
========================================================================================================
页面开发流程 以 能力总览（data/view）为例子

1、创建路由 
    首先在src/viewPage/Data/下新建页面view.js、view.less
    在src/common/router.js里面创建路由
     "/Data/view":{
          name: "能力总览",
          component: dynamicWrapper(app, [], () => import("../viewPage/Data/view")),
        },

2、引入页面所需要的组件
import React, { Component, Fragment } from "react";
import { Row, Col, DatePicker, List, Modal, Icon, Breadcrumb } from "antd";
import axios from "axios";
import ReactEcharts from "echarts-for-react";
等等

3、开发页面，布局；

4、数据交互，主要使用axios，如下
   axios.get(`${webpath}av/getOjbInfo2`, {
      params: {
        access_token:sessionStorage.access_token
      },
      headers: axiosHeader,
    })
      .then((res)=>{
        const arrlength = res.data.data.length;
        for(let i=0;i<arrlength;i++) {
          this.state.levelNum.push(res.data.data[i].OBJECT_LEVEL);
          this.state.levelNumquchong = dedupe(this.state.levelNum);
          this.state.levelNumlen = this.state.levelNumquchong.length
        }
        this.setState({
          materialData:res.data.data,
        })
      })
      
      ========================================================================================================


0.jsx语法（render部分）
() 代表代码段，每一个代码段中只能包含一个父标签，标准格式
const borderSide = (
        <Fragment>
          <div />
          <div />
          <div />
        </Fragment>
      )

{} 代表变量和代码行，比如
let a = "aaa"   {a}
{this.state.aaa?"123":"456"}

字符串中的变量写法
className={`${a} class`}  解析之后 显示 class="aaa class"

react中没有class 用className 替代

====================================================

1.css动画使用 （张丛 20180620）

具体实力可以参考viewComponent下的AntMo.js
// 引用静态资源 import名称为animate
import animate from '../assets/css/antmo.less';

// 使用方法
<div className={`${animate.animated} ${animate.bounce}`}></div>

====================================================

2.菜单修改位置
左侧菜单修改位置
common/menu.js
横向菜单修改位置
  components/Transverse/index.js
树形菜单修改位置
  components/GlobalHeader/index.js   中的  treeMenu
  
====================================================

3.换肤指令
头部背景色                    .headerColor
头部文字颜色                 .headerColor .fontColor
页脚的背景色                 .footerColor
logo背景色                    .logoColor
左侧导航背景                 .ant-layout-sider
左侧一级导航                 .ant-menu-submenu-title
左侧二级导航                 .ant-menu-dark .ant-menu-inline.ant-menu-sub
左侧导航上边框             .ant-menu-dark.ant-menu-inline
左侧菜单选中                 .ant-menu-dark .ant-menu-item-selected > a 
左侧菜单鼠标经过背景   .ant-menu-dark .ant-menu-item-active
左侧菜单鼠标经过颜色   .ant-menu-dark .ant-menu-item-active > a

卡片布局                  .ant-card | .backColor
                                .ant-card-head
                                .ant-card-head-title
                          
 字色                    .thmColor
 标题颜色                 .titleColor
 正文颜色                 .fontColor
 灰色背景                 .grayBg
 
 图表等组件配色（参考如下）
 
const defaultColor = "#cccccc";
const defaultColor1 = "#666666";
const glassBlueColor = "#ccc";
const glassBlueColor1 = "#ccc";
const glassOrangeColor = "#cc0000";
const glassOrangeColor1 = "#cc0000";
const glassRedColor = "#c4dddd";
const glassRedColor1 = "#c4dddd";
const blueThemeColor = "#cc1201";
const blueThemeColor1 = "#cc1201";
const blackThemeColor = "#ffeeee";
const blackThemeColor1 = "#ffeeee";
const whiteThemeColor = "#cceeff";
const whiteThemeColor1 = "#cceeff";
 
 使用方法
 label.textStyle.fill= eval(this.props.theme+"Color1")
 
====================================================

4.上下左右包含边角的写法 （张丛 20180725）
render() {
const borderSide = (
        <Fragment>
          <b className={styles.angleLb} />
          <b className={styles.angleLt} />
          <b className={styles.angleRb} />
          <b className={styles.angleRt} />
        </Fragment>
      )
return (
  {borderSide}
)
}


