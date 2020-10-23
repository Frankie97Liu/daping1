import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Layout, Icon, message, Menu, Dropdown } from "antd";
import DocumentTitle from "react-document-title";
import { connect } from "dva";
import { Route, Redirect, Switch, routerRedux, Link } from "dva/router";
import { ContainerQuery } from "react-container-query";
import pathToRegexp from "path-to-regexp";
import { enquireScreen, unenquireScreen } from "enquire-js";
import axios from "axios";
import createHistory from "history/createHashHistory";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";
import SiderMenu from "../components/SiderMenu";
import NotFound from "../routes/Exception/404";
import { getRoutes } from "../utils/utils";
import Authorized from "../utils/Authorized";
import { getMenuData } from "../common/menu";
import styles from "./BasicLayout.less";
import animate from "../assets/css/antmo.less";
import comJs from "../assets/js/common.js"
import title from "../assets/images/title.png";
import title1 from "../assets/images/titleLogo.png";
import Appmenus from "./Appmenus";

const webbase = comJs.webbase();
const { Content, Header, Footer } = Layout;
const { AuthorizedRoute, check } = Authorized;
/**
 * 根据菜单取得重定向地址.
 */
const redirectData = [

];
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

enquireScreen(b => {
  isMobile = b;
});

// 播放页面计时器
let timer = null;

// react-dva 历史
let historyDva = createHistory();

// pathnameArr
let pathnameArr = [];

@Appmenus
class BasicLayout extends React.PureComponent {
  static childContextTypes = {
    location: PropTypes.object,
    breadcrumbNameMap: PropTypes.object,
  };
  state = {
    isMobile,
    isFooter: false,
    isHeader: false,
    isFixed: false,
    isFixedFoot: false,
    isWide: true,
    isPlay: true,
    isMainMenu: true,
    isListMenu: true,
    isSetMenu: false,
    index:2,
    isSideMenu: false,// 左侧菜单
    isTransverse: false,// 横向菜单
    isTree: false, // 树形菜单
    isSetBody: false,
    isShowTheme: false,
    clear:false,
    allPath:[],
    historyArry:[],
    heavyArrLen:'',
    heavyArrLenre:'',
    intName:[],
  };

  componentWillMount() {}
  componentDidMount() {
    this.currentRoute();
    const _this=this;
    // this.getLogo();
    document.onkeydown = function(e){
      if (e.keyCode === 27) {
        _this.exitfullScreen();
        e.returnValue = false;
      }
    }
  }

  componentWillUnmount() {
    unenquireScreen(this.enquireHandler);
  }

  // 当前页面的路由信息
  currentRoute = () => {
    const { location } = this.props;
    const { allPath } = this.state;
    let historyArry = [];
    // 获取所有的菜单
    this.getPath(this.props.menus);
    const getCurrent = allPath.filter(item=>item.path === location.pathname.substr(1));
    historyArry.push(getCurrent[0]);
    this.setState({
      historyArry,
      heavyArrLen:historyArry.length,
    })
  };

  // 获取全部菜单信息
  getPath = (path) => {
    const { allPath } = this.state;
    path.map(item => {
      allPath.push(item);
      if(item.children){
        this.getPath(item.children);
      }
    })
  };

  //页面名称
  getPageTitle() {
    const { routerData, location } = this.props;
    const { pathname } = location;
    let title = comJs.projectTit;
    let currRouterData = null;
    Object.keys(routerData).forEach(key => {
      if (pathToRegexp(key).test(pathname)) {
        currRouterData = routerData[key];
      }
    });
    if (currRouterData && currRouterData.name) {
      title = `${currRouterData.name} - ${comJs.projectTit}`;
    }
    return title;
  }

  //页面地址
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
      const { routerData, menus } = this.props;
      let myPath = "";
      if(menus && menus.length !== 0) {
        const getRedictPath = item => {
          if(item.children && item.children.length !== 0) {
            return getRedictPath(item.children[0]);
          }else {
            return item.path;
          }
        };
        myPath = getRedictPath(menus[0]);
      }
      return myPath;
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
  };

  render() {
    const index = this.state.index;
    const {
      collapsed,
      theme,
      notices,
      routerData,
      match,
      location,
      } = this.props;
    const bashRedirect = this.getBashRedirect();
    const layout = (
      <Layout style={{height:'100%'}}>
        {/*
         <div className={styles.bgBox}>
         <div>
         <img src={title} alt=""/>
         </div>
         </div>
        */}

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
            <Redirect exact from="/" to='/index' />
            <Route render={NotFound} />
          </Switch>
      </Content>
    </Layout>
  );

    return (
      <DocumentTitle title={this.getPageTitle()}>
  <ContainerQuery query={query}>
      {params => (
    <div style={{minHeight:'100%',position:'relative'}}>
    {layout}

  </div>)}
  </ContainerQuery>
    </DocumentTitle>
  );
  }
}

export default connect(({ global }) => ({
  //collapsed: global.collapsed,
  //theme: global.theme,
  //notices: global.notices,
}))(BasicLayout);
