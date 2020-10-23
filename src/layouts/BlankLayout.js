import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon, message, Menu, Dropdown, Progress,Tag } from 'antd';
import DocumentTitle from 'react-document-title';
import { connect } from 'dva';
import { Route, Redirect, Switch, routerRedux, Link } from 'dva/router';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import pathToRegexp from 'path-to-regexp';
import { enquireScreen, unenquireScreen } from 'enquire-js';
import createHistory from 'history/createHashHistory';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import SiderMenu from '../components/SiderMenu';
import NotFound from '../routes/Exception/404';
import { getRoutes } from '../utils/utils';
import Authorized from '../utils/Authorized';
import { getMenuData } from '../common/menu';
import logo from '../assets/logo.png';
import styles from './BlankLayout.less';
import animate from '../assets/css/antmo.less';
import axios from 'axios'
import comJs from '../assets/js/common.js'
const webpath = comJs.webpath();
const webbase = comJs.webbase();


// import $ from '../assets/jquery-1.10.1.min.js';

import playa from '../assets/images/play-a.jpg';
// import playb from '../assets/images/play-b.jpg';
import playc from '../assets/images/glassBlue.png';
import playd from '../assets/images/play-d.jpg';
// import playe from '../assets/images/play-e.png';
// import playf from '../assets/images/play-f.png';
// import playg from '../assets/images/play-g.png';
import playh from '../assets/images/CyanBlue.png';
import Appmenus from './Appmenus';

const { Content, Header, Footer } = Layout;
const { AuthorizedRoute, check } = Authorized;

/**
 * 根据菜单取得重定向地址.
 */
const redirectData = [];
const getRedirect = item => {
  if (item && item.children) {
    if (item.children[0] && item.children[0].path) {
      redirectData.push({
        from: `${item.path}`,
        to: `${item.children[0].path}`,
      });
      item.children.forEach(children => {
        getRedirect(children);
      });
    }
  }
};
getMenuData().forEach(getRedirect);

/**
 * 获取面包屑映射
 * @param {Object} menuData 菜单配置
 * @param {Object} routerData 路由配置
 */
const getBreadcrumbNameMap = (menuData, routerData) => {
  const result = {};
  const childResult = {};
  for (const i of menuData) {
    if (!routerData[i.path]) {
      result[i.path] = i;
    }
    if (i.children) {
      Object.assign(childResult, getBreadcrumbNameMap(i.children, routerData));
    }
  }
  return Object.assign({}, routerData, result, childResult);
};

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};

let isMobile;

// 播放页面计时器
let timer = null;

// react-dva 历史
let historyDva = createHistory()

// 当前本地地址
let location = history.location

// pathnameArr
let pathnameArr = []

// 浏览痕迹菜单
let historyMenu

enquireScreen(b => {
  isMobile = b;
});

@Appmenus

class BlankLayout extends React.PureComponent {
  static childContextTypes = {
    location: PropTypes.object,
    breadcrumbNameMap: PropTypes.object,
  };
  state = {
    isMobile,
    isFooter: false,
    isHeader: true,
    isFixed: false,
    isFixedFoot: false,
    isWide: true,
    isPlay: true,
    isMainMenu: true,
    isListMenu: true,
    isSetMenu: true,
    index:2,
    isSideMenu: false,// 左侧菜单
    isTransverse: true,// 横向菜单
    isTree: false, // 树形菜单
    //isLogoShow: false,
    isHistory: true,
    isSetBody: false,
    isShowTheme: false,
    isFullScreen: false,
    isShowPro: true,
    clear:false,
    pathArr:[],   // 存放路径的数组
    pathArrre:[],
    heavyArrLen:'', // 去重数组长度
    heavyArrLenre:'',
  };
  showHeader() {
    this.setState({
      isHeader: !this.state.isHeader,
      isHistory: !this.state.isHistory,
      isSetBody: false,
    })
  }
  showFooter() {
    this.setState({
      isFooter: !this.state.isFooter,
      isSetBody: false,
    })
  }
  changeWide() {
    this.setState({
      isWide: !this.state.isWide,
      isSetBody: false,
    })
  }
  fixedHeader() {
    this.setState({
      isFixed: !this.state.isFixed,
      isSetBody: false,
    })
  }
  fixedFooter() {
    this.setState({
      isFixedFoot: !this.state.isFixedFoot,
      isSetBody: false,
    })
  }
  // 无登录 隐藏头尾设置
  nologin = () =>{
    if(comJs.nologin){
      this.setState({
        isHeader:false,
        isFooter:false,
        isHistory:false,
        isSetMenu:false,
      })
    }
  }

  changeTheme = (theme, e) => {
    e.nativeEvent.stopImmediatePropagation()
    this.props.dispatch({
      type: 'global/changeTheme',
      payload: theme,
    });
    var userId = window.sessionStorage.userId;
    var userStyle;
    //接口： 1 green ; 2 red ; 3 blue ; 4 orange 默认;   5 black ; 6 babyBlue
    //本地： 1CyanBlue; 2glassBlue ;3glassOrange  ;4default;
    if( theme== 'glassOrange'){
      userStyle = 'blue';
      window.sessionStorage.userStyle='3';
      window.sessionStorage.userStyleName="glassOrange";
    }else if( theme== 'glassBlue'){
      userStyle = 'red';
      window.sessionStorage.userStyle='2';
      window.sessionStorage.userStyleName="glassBlue";
    }else if( theme== 'CyanBlue'){
      userStyle = 'green';
      window.sessionStorage.userStyle='1';
      window.sessionStorage.userStyleName="CyanBlue";
    }else{
      userStyle = 'orange';
      window.sessionStorage.userStyle='4';
      window.sessionStorage.userStyleName="default";
    }
    console.log(window.sessionStorage.userStyle);

    axios.get(`${webbase}server/base/updateUserStyle`, {
      params: {
        access_token:sessionStorage.access_token,
        userId: userId,
        userStyle:userStyle
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
      .then(function (response) {
        //console.log(response.data.message);
      })
      .catch(function (error) {
        if(error.request.response === ""){
          sessionStorage.clear();
          window.location.reload();
        }
      });
  }

  // 全屏事件
  fullScreen = () => {
    this.setState({
      isHeader: false,
      isFooter: false,
      isSideMenu : false,
      isMainMenu: false,
      isTransverse: true,
      isTree : false,
      isLogoShow : false,
      isSetBody: false,
      isSetMenu: false,
      isHistory: true,
    })
    clearInterval(timer);
  };

  //退出全屏
  exitfullScreen = () => {
    this.setState({
      isHeader: true,
      isFooter: false,
      isSideMenu : false,
      isMainMenu: true,
      isTransverse: true,
      isTree : false,
      isLogoShow : false,
      isSetBody: false,
      isSetMenu: true,
      isHistory: true,
    })
    clearInterval(timer);
  };


  // 播放页面
  playPage() {
    const _this = this;
    this.setState({
      isPlay: !this.state.isPlay,
    })

    let i = 0;
    let len = this.state.pathArr.length;

    timer = setInterval(function () {
      historyDva.push(_this.state.pathArr[i].routerName);
      if (i === len-1) {
        i = 0;
        clearInterval(timer);
        _this.setState({
          isPlay: !_this.state.isPlay,
        })
        message.warning('最后一页',2);
      } else {
        i += 1
      }
    }, 2500);
  }

  // 暂停页面
  pausePage() {
    this.setState({
      isPlay: !this.state.isPlay,
    })

    clearInterval(timer);
  }


  removeHistory(index){
    this.state.pathArr.splice(index,1)
    this.state.pathArrre = this.state.pathArr;
    console.log('加加',this.state.pathArrre)
    this.setState({
      clear: true,
      heavyArrLenre:this.state.pathArrre.length,
    })
  }

  // 上一个页面
  upPages() {
    let currentPath=window.location.hash.slice(1),
      pathArrFirst=this.state.pathArr[0].routerName,
      currentPathArrIndex=this.state.pathArr.findIndex((e)=>e.routerName===currentPath);
    if(currentPath!==pathArrFirst){
      historyDva.push(this.state.pathArr[currentPathArrIndex-1].routerName);
    }else{
      message.warning('第一页',2);
    }
  }

  // 下一个页面
  nextPages() {
    let currentPath=window.location.hash.slice(1),
      pathArrLast=this.state.pathArr[this.state.pathArr.length-1].routerName,
      currentPathArrIndex=this.state.pathArr.findIndex((e)=>e.routerName===currentPath);
    if(currentPath!==pathArrLast){
      historyDva.push(this.state.pathArr[currentPathArrIndex+1].routerName);
    }else{
      message.warning('最后一页',2);
    }

  }

  // 重置
  reset() {
    // sessionStorage.clear();
    window.location.href="#/Data/view"
  }

  // 全屏菜单列表
  fullMenus() {
    this.setState({
      isListMenu: !this.state.isListMenu,
    })
  }

  // 设置下拉框
  setMenus(){
    this.setState({
      isSetBody: !this.state.isSetBody,
    })
  }

  // 进度条
  // progress(){
  //   let speed = 10;
  //   let time = null
  //   setInterval(speed++,2000);
  //   this.setState({
  //     isShowPro: !this.state.isShowPro,
  //   })
  // }

  // 换肤设置
  themeSet(){
    this.setState({
      isShowTheme: true,
    })
    console.log(this.state.isShowTheme)
  }
  myplayBoxOut(){
    this.setState({
      isShowTheme:false,
    })
  }

  getChildContext() {
    const { location, routerData } = this.props;
    return {
      location,
      breadcrumbNameMap: getBreadcrumbNameMap(getMenuData(), routerData),
    };
  }

  componentWillMount() {}
  componentDidMount() {
    this.nologin();
    const _this=this;
    // sessionStorage.setItem('flag', 1);
    //   this.getPageTitle();
    document.onkeydown = function(e){
      if (e.keyCode === 27) {
        _this.exitfullScreen()
        e.returnValue = false;
      }
    }
  }

  componentWillUnmount() {
    unenquireScreen(this.enquireHandler);
  }

  getPageTitle() {
    const { routerData, location } = this.props;
    const { pathname } = location;
    let title = comJs.projectTit;
    let currRouterData = null;
    // console.log('名字',location)
    // match params path
    Object.keys(routerData).forEach(key => {
      if (pathToRegexp(key).test(pathname)) {
        currRouterData = routerData[key];

        this.setState({
          clear:false,
        })
        // 浏览历史数组
        // console.log('加',pathnameArr.indexOf(location.pathname.split('/')[2]) === -1)
        if (pathnameArr.indexOf(location.pathname.split('/')[2]) === -1) {
          if(location.pathname!='/'){
            pathnameArr.push(location.pathname.split('/')[2]);
            this.state.pathArr.push({ name: currRouterData.name, routerName: pathname })
            // console.log('加',this.state.pathArr)
          }
        }
        // 浏览历史的长度
        this.state.heavyArrLen = this.state.pathArr.length;
      }
    });


    if (currRouterData && currRouterData.name) {
      title = `${currRouterData.name} - ${comJs.projectTit}`;
    }
    return title;
  }
  getBashRedirect = () => {
    // According to the url parameter to redirect
    // 这里是重定向的,重定向到 url 的 redirect 参数所示地址
    const urlParams = new URL(window.location.href);

    const redirect = urlParams.searchParams.get('redirect');
    // Remove the parameters in the url
    if (redirect) {
      urlParams.searchParams.delete('redirect');
      window.history.replaceState(null, 'redirect', urlParams.href);
    } else {
      const { routerData } = this.props;
      // get the first authorized route path in routerData
      const authorizedPath = Object.keys(routerData).find(
        item => check(routerData[item].authority, item) && item !== '/'
      );
      return authorizedPath;
    }
    return redirect;
  };
  handleMenuCollapse = collapsed => {
    this.props.dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: collapsed,
    });
  };
  handleNoticeClear = type => {
    message.success(`清空了${type}`);
    this.props.dispatch({
      type: 'global/clearNotices',
      payload: type,
    });
  };
  handleMenuClick = ({ key }) => {
    if (key === 'triggerError') {
      this.props.dispatch(routerRedux.push('/exception/trigger'));
      return;
    }
    if (key === 'logout') {
      this.props.dispatch({
        type: 'login/logout',
      });
    }
  };
  handleNoticeVisibleChange = visible => {
    if (visible) {
      this.props.dispatch({
        type: 'global/fetchNotices',
      });
    }
  };

  handleMouseLeave = () => {
    this.setState({
      isSetBody: false,
    })
  }

  // 横向菜单、左侧菜单、树形菜单切换
  // isSideMenu-左侧菜单，isTransverse-横向菜单，isTree-树形菜单
  switchMenu = (key) => {
    this.setState({
      index: key,
    });
    switch (key) {
      case 1:// 左侧菜单
        this.state.isSideMenu = true;
        this.state.isTransverse = false;
        this.state.isTree = false;
        this.state.isLogoShow = false;
        break;
      case 2:// 横向菜单
        this.state.isSideMenu = false;
        this.state.isTransverse = true;
        this.state.isTree = false;
        this.state.isLogoShow = true;
        break;
      case 3:// 树形菜单
        this.state.isSideMenu = false;
        this.state.isTransverse = false;
        this.state.isTree = true;
        this.state.isLogoShow = true;
        break;
    }
  }

  render() {
    // 浏览历史菜单
    historyMenu = (
      <Menu className={`${animate.animated} ${animate.flipInY} ${styles.closeMenu}`} style={{top:10}}>
        {
          this.state.pathArr.map((item, i) => {
            return (
              <Menu.Item key={i}>
                <Link to={item.routerName}>{item.name}</Link><Icon type="close" theme="outlined" onClick={this.removeHistory.bind(this,i)} />
              </Menu.Item>
            )
          })
        }
      </Menu>
    )

    const text = this.state.isFixed ? "fixed" : "static"
    const style = { position: text, padding: 0, zIndex: 100, width: "100%" }
    const textf = this.state.isFixedFoot ? "fixed" : "static"
    const widthf = !this.state.isWide?this.state.isSideMenu?this.props.collapsed? "calc(1200px - 70px)":"calc(1200px - 180px)":this.props.collapsed? "1200px":"1200px":"100%"
    const stylef = { position: textf, padding: 0, zIndex: 100, width: widthf, bottom: 0 }
    const index = this.state.index;
    const {
      // currentUser,
      collapsed,
      theme,
      // fetchingNotices,
      notices,
      routerData,
      match,
      location,
    } = this.props;
    const bashRedirect = this.getBashRedirect();
    const layout = (
      <Layout style={{minWidth:'100%'}}>
        <Content>
          <Switch>
            {redirectData.map(item => (
              <Redirect key={item.from} exact from={item.from} to={item.to} />
            ))}
            {getRoutes(match.path, routerData).map(item => (
              <AuthorizedRoute
                key={item.key}
                path={item.path}
                component={item.component}
                exact={item.exact}
                authority={item.authority}
                redirectPath="/exception/403"
              />
            ))}
            <Redirect exact from="/" to={bashRedirect} />
            <Route render={NotFound} />
          </Switch>
        </Content>
      </Layout>
    );

    return (
      <DocumentTitle title={this.getPageTitle()}>
        <div className="default">
          {layout}
        </div>
      </DocumentTitle>
    );
  }
}

export default connect(({ user, global, loading }) => ({
  // currentUser: user.currentUser,
  collapsed: global.collapsed,
  theme: global.theme,
  // theme:"glassOrange",
  // theme:"default",
  // fetchingNotices: loading.effects['global/fetchNotices'],
  notices: global.notices,
}))(BlankLayout);
