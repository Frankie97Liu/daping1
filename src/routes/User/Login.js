/* eslint-disable */
import React, {Component} from 'react';
import {connect} from 'dva';
import {Link} from 'dva/router';
import {Col, Row ,Input,Tooltip} from 'antd';

import Login from 'components/Login';
import axios from 'axios';
import styles from './Login.less';
import comJs from '../../assets/js/common.js';
import Verificode from '../../components/SecurityCode/SecurityCode';

const webpath = comJs.webpath();
const webbase = comJs.webbase();
const webtoken = comJs.webtoken();

const {UserName, Password, Submit} = Login;

let menuData = [{
  name:'国优介绍',
  icon: 'dashboard',
  path: '/index',
  itempath: '/index',
  children:[]
},{
  name:'奖项介绍',
  icon: 'dashboard',
  path: '/',
  itempath: '/',
  children:[]
},{
  name:'评审规则',
  icon: 'dashboard',
  path: '/',
  itempath: '/',
  children:[]
},{
  name:'获奖名单',
  icon: 'dashboard',
  path: '/',
  itempath: '/',
  children:[]
},{
  name:'动态列表',
  icon: 'dashboard',
  path: '/',
  itempath: '/',
  children:[]
},{
  name:'通知列表',
  icon: 'dashboard',
  path: '/',
  itempath: '/',
  children:[]
},{
  name:'资料管理',
  icon: 'dashboard',
  path: '/',
  itempath: '/',
  children:[]
},{
  name:'banner管理',
  icon: 'dashboard',
  path: '/',
  itempath: '/',
  children:[]
}];
@connect(({login, loading}) => ({
  login,
}))
export default class LoginPage extends Component {

  constructor(props){
    super(props);
    this.refreshCode=this.refreshCode.bind(this);
    this.state={
      code:[],
      inputValue:'',
      flip: 'flipOut',
      authShow: 'authentHide',
      authWord: '登录认证中...',
      login: {
        type: '',
        status: '',
      },
      text:'请输入验证码',
      flag:true
    }
  }
  refreshCode(){
    this.GetVerifiCode();
  }
  GetVerifiCode(){
    this.setState({
      code:this.genRandomString(4)
    });
  }
  genRandomString = len => {
    const text = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const rdmIndex = text => Math.random() * text.length | 0;
    let rdmString = '';
    for(; rdmString.length < len; rdmString += text.charAt(rdmIndex(text)));
    return rdmString;
  }
  componentDidMount()
  {
    this.GetVerifiCode();
  }



  handleSubmit = (err, values) => {
    // const { type } = this.state;
    const {dispatch} = this.props;
    const uername = values.username;
    const password = values.password;
    const _this = this;

    // token验证  当res.status==200 通过验证
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    const url = webtoken + 'oauth2/oauth/token?grant_type=password&client_id=web_app&client_secret=secret&username=' + uername + '&password=' + password + '';

    axios.post(url, {}).then(function (res) {
      // 通过验证,可以访问菜单 用户信息等内容
      const access_token = res.data.access_token;
      sessionStorage.setItem('access_token', access_token);
      // 执行动画
      _this.setState({
        flip: 'flipIn',
        authShow: 'authentShow',
        authWord: '登录认证中...',
      });
      setTimeout(() => {
        _this.setState({
          flip: 'flipOut',
          authWord: '登录成功',
        });
      }, 1000);
      setTimeout(() => {
        _this.setState({
          authShow: 'authentHide',
        }, () => _this.getUser(uername, access_token, values));
      }, 2000);

    }).catch(() => {
      // 不通过验证，禁止登陆
      if (uername !== undefined && password !== undefined) {
        _this.setState({
          authWord: '用户名密码错误',
          authShow: 'authentShow',
        });
        setTimeout(() => {
          _this.setState({
            flip: 'flipOut',
            authWord: '用户名密码错误',
          });
        }, 1000);
        setTimeout(() => {
          _this.setState({
            authShow: 'authentHide',
          });
        }, 2000);
      }
    });
  };

  getUser = (uername, access_token, values) => {
    const _this = this;
    // 获取用户信息
    const userhref = `${webbase}server/base/getUserInfo`;
    axios.get(userhref, {
      params: {
        access_token: access_token,
        loginId: uername,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(function (res) {
      console.log(res);
      const userId = res.data.datas.userId;
      const mobile = res.data.datas.mobile;
      const email = res.data.datas.email;
      const orgName = res.data.datas.orgName;
      const orgBuiName = res.data.datas.orgBuiName;
      const regDate = res.data.datas.regDate;
      const updateDate = res.data.datas.updateDate;
      const userStyle = res.data.datas.userStyle;
      const loginId = res.data.datas.loginId;
      const userName = res.data.datas.userName;
      let userStyleName;
      //换肤
      //接口： 1 green ; 2 red ; 3 blue ; 4 orange 默认;   5 black ; 6 babyBlue
      //本地： 1CyanBlue; 2glassBlue ;3glassOrange  ;4default;
      let theme = '';
      if (userStyle == 1) {
        theme = 'CyanBlue';
        userStyleName = 'CyanBlue';
      } else if (userStyle == 2) {
        theme = 'glassBlue';
        userStyleName = 'glassBlue';
      } else if (userStyle == 3) {
        theme = 'glassOrange';
        userStyleName = 'glassOrange';
      } else if (userStyle == 4) {
        theme = 'default';
        userStyleName = 'default';
      }
      sessionStorage.setItem('userName', userName);
      sessionStorage.setItem('userId', userId);
      sessionStorage.setItem('mobile', mobile);
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('orgName', orgName);
      sessionStorage.setItem('orgBuiName', orgBuiName);
      sessionStorage.setItem('regDate', regDate);
      sessionStorage.setItem('updateDate', updateDate);
      sessionStorage.setItem('userStyle', userStyle);
      sessionStorage.setItem('loginId', loginId);
      sessionStorage.setItem('userStyleName', userStyleName);
      _this.props.dispatch({
        type: 'blackManage/setSession',
        payload: {loginId},
      });

      _this.props.dispatch({
        type: 'global/changeTheme',
        payload: theme,
      });
      sessionStorage.setItem('menuData', JSON.stringify(menuData))
      const loginMenu = JSON.parse(sessionStorage.getItem('menuData'));
      let pushMenu = menuData[0].path;
      _this.props.dispatch({
        type: 'login/login',
        payload: {
          ...values,
          res,
          pushMenu,
        },
      });
    });
  };

  onChange(e) {
    if(e.target.value==this.state.code){
      console.log("tongguo")
      this.setState({
        text:'验证通过',
        flag:false
      });

    }else{
      console.log("butongguo")
      this.setState({
        text:'验证不通过',
        flag:true

      });
    }
    //设置数据的值，用this.setState({})
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    const ownStyle={
      width: '100%',
      height: '50px',
      margin: '15px 0',
      backgroundColor: '#ffffff'
    };
    const {code}=this.state;


    const {type} = this.state;
    return (
      <div className={styles.state}>
  <div className={styles.stateBox}>
  <div className={`${styles[this.state.flip]} ${styles.content}`}>
  <div className={styles.top}>

  <div className={styles.header}>
  <Link to="/">
      <span className={styles.title}>{comJs.logoTit}</span>
    <span className={styles.desc}>{comJs.projectTit}</span>
    </Link>
    </div>
    </div>
    <div className={styles.main}>
  <Login defaultActiveKey={type} onTabChange={this.onTabChange} onSubmit={this.handleSubmit}
    ref={'loginBox'}>
      {/*
                <Tab key="account"> /!*tab="账户密码登录"*!/
                {this.state.login.status === 'error' &&
                  this.state.login.type === 'account' &&
                  !this.state.submitting &&
                  this.renderMessage('账户或密码错误（admin/bonc）')
                }
                */}
      <span style={{height: '15px', width: '100%', display: 'block'}}/>
    <UserName name="username" placeholder="输入账号" autoComplete="off"/>
      <span style={{height: '25px', width: '100%', display: 'block'}}/>
    <Password name="password" placeholder="输入密码" autoComplete="off"/>
      {console.log(code)}
  <Row gutter={16}>
      <Col className="gutter-row" span={12}>
      <div className="gutter-box">
      <Tooltip placement="bottom" title={this.state.text}>
  <Input style={{margin:'15px 0',height:'50px'}} placeholder="请输入验证码" value={this.state.inputValue}
    onChange={this.onChange.bind(this)}/>
    </Tooltip>
    </div>
    </Col>
    <Col className="gutter-row" span={12}>
      <div className="gutter-box">
      <Verificode ownStyle={ownStyle} onGetRefresh={this.refreshCode} data={code}></Verificode>
      </div>
      </Col>

      </Row>

      <Submit disabled={this.state.flag} style={{background: '#00dffe', borderColor: '#00dffe', height: 40}}>登录</Submit>
    </Login>
    </div>
    </div>
    {this.state.authShow === 'authentShow' ? (
      <div className={`${styles[this.state.authShow]} ${styles.authent}`}>
    <div className="loader"
      style={{height: '60px', width: '60px', marginLeft: '28px', marginTop: '80px'}}></div>
    <p>{this.state.authWord}</p>
    </div>
    ) : ''}

    {/* {this.state.authShow==="authentShow"?<div className={styles.zhe} />:""} */}

  </div>
    </div>
  );
  }
}
