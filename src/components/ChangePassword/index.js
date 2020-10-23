import React, {Component,Fragment} from 'react';
import { Drawer, Input, Icon, message, Menu, Dropdown, Button,Tag, Divider} from 'antd';
import styles from "./index.less";
import animate from '../../assets/css/antmo.less';
import axios from 'axios';
import comJs from '../../assets/js/common.js'
const webpath = comJs.webpath();
const webbase = comJs.webbase();

export default class ChangePassword extends Component{
  constructor(props) {
    super(props);
    this.state = {oldcode: '',newcode: '',newcode2: ''};

    this.handleChangeold = this.handleChangeold.bind(this);
    this.handleChangenew = this.handleChangenew.bind(this);
    this.handleChangenew2 = this.handleChangenew2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeold(event) {
    this.setState({oldcode: event.target.value});
  }
  handleChangenew(event) {
    this.setState({newcode: event.target.value});
  }
  handleChangenew2(event) {
    this.setState({newcode2: event.target.value});
  }

  handleSubmit(event) {
    const oldcode = this.state.oldcode;
    const newcode = this.state.newcode;
    const newcode2 = this.state.newcode2;
    const loginId  =sessionStorage.loginId;
    const access_token = sessionStorage.access_token;
    console.log(loginId)
    if(newcode===newcode2){
    axios.get(`${webbase}server/base/updatePassword`,{
      params: {
        access_token:access_token,
        oldPassword: oldcode,
        loginId: loginId,
        newPassword: newcode,
      },
    }).then(function(res){
     console.log(res.code)
      if(res.code===1){
        message.info('修改失败，请输入正确的旧密码');
      }else{
        message.info('修改成功');

      }

    }).catch(function(error){
      if(error.request.response === ""){
        sessionStorage.clear();
        window.location.reload();
      }
    })
    }else{
      message.info('两次密码不一致');
    }


    event.preventDefault();
  }

  render() {
    return (
      <Fragment>
      {
          this.props.message?
          <Drawer
                className={`${sessionStorage.getItem('userStyleName')}`}
                title="修改密码"
                placement="right"
                visible='true'
                onClose={this.props.change}
          >
          <div className={`${styles.change}`}>
              {/* <div className={styles.header}>
                  <span>修改密码</span>
                  <Icon onClick={this.props.change} className={styles.close} type="close" />
              </div> */}
              <div className={styles.main}>
              <form onSubmit={this.handleSubmit}>
                  <ul>
                      <li>
                          <span className={`titfontsw`}>旧密码<b>*</b></span>
                            <Input  value={this.state.oldcode} onChange={this.handleChangeold} id="oldPassword" placeholder="请输入旧密码" />
                      </li>
                      <li>
                          <span className={`titfontsw`}>新密码<b>*</b></span>
                          <Input value={this.state.newcode} onChange={this.handleChangenew} id="newPassword" placeholder="请输入新密码" />
                      </li>
                      <li>
                          <span className={`titfontsw`}>再次输入<b>*</b></span>
                          <Input  value={this.state.newcode2} onChange={this.handleChangenew2} id="again" placeholder="请与新密码保持一致" />
                      </li>
                  </ul>
                  </form>
                  <div>
                  <Button type="primary" value="Submit">确定</Button>
                  <Button onClick={this.props.change}>取消</Button>
                  </div>
              </div>
          </div></Drawer>:""
      }
      </Fragment>
    );
  }
}
