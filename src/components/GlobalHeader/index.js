import React, { Fragment } from 'react';
import { Menu, Icon, Spin, Tag, Dropdown, Avatar, Divider, Input, Modal,Popconfirm } from 'antd';
import moment from 'moment';
import groupBy from 'lodash/groupBy';
import Debounce from 'lodash-decorators/debounce';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Redirect } from 'react-router-dom';
import styles from "./index.less";
import animate from "../../assets/css/antmo.less";

// 横向菜单
import Transverse from "../Transverse";
// 我的信息
import MyInfo from "../MyInfo/MyInfo";
// 修改密码
import ChangePassword from "../ChangePassword"

const confirm = Modal.confirm;
const Search = Input.Search;


let historyMenu;

class GlobalHeader extends React.PureComponent {
  constructor(props){
    super(props);
    this.menus = props.menuData;
    console.log(this.menus)
    this.state={
      myInfo:false, // 我的信息
      password:false, // 修改密码
      redirect: false,
      visible:false, // 控制“探索”按钮显示隐藏弹出框
    }
  }

  componentWillUnmount() {
    this.triggerResizeEvent.cancel();
  }

  getNoticeData() {
        const { notices = [] } = this.props;
        if (notices.length === 0) {
            return {};
        }
        const newNotices = notices.map(notice => {
            const newNotice = { ...notice };
            if (newNotice.datetime) {
                newNotice.datetime = moment(notice.datetime).fromNow();
            }
            // transform id to item key
            if (newNotice.id) {
                newNotice.key = newNotice.id;
            }
            if (newNotice.extra && newNotice.status) {
                const color = {
                    todo: '',
                    processing: 'blue',
                    urgent: 'red',
                    doing: 'gold',
                }[newNotice.status];
                newNotice.extra = (
                    <Tag color={color} style={{ marginRight: 0 }}>
                        {newNotice.extra}
                    </Tag>
                );
            }
            return newNotice;
        });
        return groupBy(newNotices, 'type');
  }

  getFlatMenuKeys(menus) {
    let keys = [];
    menus.forEach(item => {
      if (item.children) {
        keys = keys.concat(this.getFlatMenuKeys(item.children));
      }
      keys.push(item.path);
    });
    return keys;
  }

  handleEmail(){
    this.setState({myInfo:false});
  }
  change(){
    this.setState({password:false});
  }
  toggle = () => {
      const { collapsed, onCollapse } = this.props;
      onCollapse(!collapsed);
      this.triggerResizeEvent();
  };

  confirm=()=> {
    this.setState({visible:false});
  };

  cancel=()=> {
    this.setState({visible:false});
  };

  handleButtonClick = (key) => {
    let that = this;
    switch (key.key) {
      case "info":
        that.setState({
          myInfo: true,
          password:false
        });
        break;
        case "pass":
          that.setState({
            myInfo: false,
            password: true
          });
          break;
          case "logout":
            confirm({
              title: '是否退出当前用户?',
              okText:"确认",
              cancelText:"取消",
              onOk() {
                that.setState({
                  redirect: true,
                });
                sessionStorage.clear();
                },
              onCancel() {
                console.log('Cancel');
                },
            });
            break;
    }
  };

  // 退出
  exitClick = () => {
    let that = this;
    confirm({
      title: '是否退出当前用户?',
      okText:"确认",
      cancelText:"取消",
      onOk() {
        that.setState({
          redirect: true,
        });
        sessionStorage.clear();
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

    /* eslint-disable*/
    @Debounce(600)
    triggerResizeEvent() {
      const event = document.createEvent('HTMLEvents');
      event.initEvent('resize', true, false);
      window.dispatchEvent(event);
    }

    render() {
      const {
        collapsed,
        isMobile,
        logo,
        historyArry,
        heavyArrLen
      } = this.props;
      const noticeData = this.getNoticeData();
      const SubMenu = Menu.SubMenu;
      const MenuItemGroup = Menu.ItemGroup;

      const menu = (
        <Menu className={`${styles.menu} ${animate.animated} ${animate.flipInY} ${sessionStorage.getItem('userStyleName')} admin `} onClick={this.handleButtonClick}>
          <Menu.Item key="info">
            <Icon type="user" />我的信息
          </Menu.Item>
          {/*<Menu.Item key="pass">*/}
            {/*<Icon type="lock" />修改密码*/}
          {/*</Menu.Item>*/}
          <Menu.Item key="logout">
            <Icon type="logout" />退出登录
          </Menu.Item>
        </Menu>
      );

      // 树形菜单
      let treeMenu = (
        <Menu>
          {this.menus.map((item,i)=>{
            return (
              item.name !=="账户"?(
                <SubMenu key={i} title={<span><Icon type={item.icon} className={styles.icon11} />{item.name}</span>}>
                  {item.children.map((child,j)=>{
                    return (
                      child.children?(
                        <SubMenu title={child.name} key={j}>
                          {child.children.map((third,k)=>{
                            return <Menu.Item key={k}><a rel="noopener noreferrer" href={`#${third.path}`}>111{third.name}</a></Menu.Item>
                          })}
                        </SubMenu>
                      ):(
                        <Menu.Item key={j}><a rel="noopener noreferrer" href={`#${child.path}`}>{child.name}</a></Menu.Item>
                      )
                    )
                  })}
                </SubMenu>
              ):""
            )})
          }
        </Menu>
      );

      if (this.state.redirect) {
        return <Redirect push to="/user/login" />;
      }
      const allWidth = this.props.isWide?"100%":"1200px";

      // 浏览历史菜单
      historyMenu = (
        <Menu  style={{top:10}}>
          {
            historyArry.map((item, i) => {
              return (
                <Menu.Item key={i}>
                  <p style={{marginBottom:0}}>
                    {
                      item && item.path?(
                        <Fragment>
                          <Link className={styles.myLink} to={"/"+`${item.path}`}>{item.name}</Link>
                          <Icon type="close" theme="outlined"  onClick={()=>this.props.removeHistory(i)}/>
                        </Fragment>
                      ):''
                    }

                  </p>
                </Menu.Item>
              )
            })
          }
        </Menu>
      );

      return (
        <div
          className={styles.header}
          style={
            this.props.isSideMenu ?
              this.props.isFixed ?
                this.props.collapsed ? {width: 'calc('+ allWidth +' - 40px)' } : {width: 'calc('+ allWidth +' - 180px)' } : {}
                : this.props.isFixed? {width: allWidth }:{}
          }
        >

          {isMobile && [
            <Link to="/" className={styles.logo} key="logo">
              <img src={logo} alt="logo" />
            </Link>,
          ]}
          {this.props.isSideMenu ?
            <Icon
              className={styles.trigger}
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
              style={{ float: 'left',color:'#fff',display:'none'}}
            />
            : ""}

          {this.props.isSideMenu?"":(
            <div className={styles.logo} key="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
          )}

          {/* 横向菜单 */}
          {this.props.isTransverse ? (
            <Transverse
              menuData={this.menus}
              location={this.props.location}
              timeout={this.state.timeout}
            />
          ): ""}

          {/* 我的信息 */}
          {this.state.myInfo ? <MyInfo msg={this.state.myInfo} handleEmail={this.handleEmail.bind(this)} />:""}

          {/* 修改密码 */}
          {this.state.password ? <ChangePassword message={this.state.password} change={this.change.bind(this)} />:""}

          <div className={styles.right}>

            {/* 树形菜单 */}
            {this.props.isTree ?
            <Dropdown overlay={treeMenu} trigger={['click']} className={styles.rightMenu} id="treeMenu">
              <a className="ant-dropdown-link" href="#" style={{color:"#fff",textDecoration:'none'}}>
                <Icon type="profile" className={styles.treeIcon} />
              </a>
            </Dropdown>
            : ""}

          <div className={styles.userLogo}>
            <img src={require('../../assets/admin.png')} alt="admin" />
            <span className="headWhite">{sessionStorage.userName}</span>
            <span style={{marginLeft:30}} onClick={this.exitClick}>退出</span>
          </div>
          </div>
        </div>
      );
    }
}

export default connect(({ global }) => ({
    collapsed: global.collapsed,
}))(GlobalHeader);
