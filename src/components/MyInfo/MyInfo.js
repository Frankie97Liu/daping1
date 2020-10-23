/*
 * @Author: your name
 * @Date: 2020-07-22 16:37:26
 * @LastEditTime: 2020-10-23 09:53:57
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /daping/src/components/MyInfo/MyInfo.js
 */
import React, {Component,Fragment} from 'react';
import { Drawer, Icon} from 'antd';
import styles from "./MyInfo.less";

export default class MyInfo extends Component{

    render(){
      return (
        <Fragment>
          {
            this.props.msg?
              <Drawer
                className={`${sessionStorage.getItem('userStyleName')}`}
                title="对象信息"
                placement="right"
                visible='true'
                onClose={this.props.handleEmail}
              >
                <div className={`${styles.myInfo}`}>
                  {/* <div className={styles.header}>
                       <span>我的信息</span>
                       <Icon onClick={this.props.handleEmail} className={styles.close} type="close" />
                   </div> */}
                   <ul className={styles.main}>
                     <li>
                       {/* <Icon type="user" /> */}
                       <span className={styles.login}></span>
                       <div>
                         <div className={`titfontsw`}>登录账号</div>
                         <span>{sessionStorage.loginId!=null?sessionStorage.loginId:""}</span>
                       </div>
                     </li>
                     {/* <li>
                           <Icon type="user" />
                           <div>
                               <div>所属角色</div>
                               <span>{sessionStorage.orgId}</span>
                           </div>
                       </li> */}
                       <li>
                        <span className={styles.phone}></span>
                         <div>
                           <div className={`titfontsw`}>手机号码</div>
                           <span>{sessionStorage.mobile!=null?sessionStorage.mobile:""}</span>
                         </div>
                       </li>
                     <li>
                      <span className={styles.email}></span>
                       <div>
                         <div className={`titfontsw`}>电子邮箱</div>
                         <span>{sessionStorage.email!=null?sessionStorage.email:""}</span>
                       </div>
                     </li>
                     <li>
                      <span className={styles.organ}></span>
                       <div>
                         <div className={`titfontsw`}>行政机构</div>
                         <span>{sessionStorage.orgName!=null?sessionStorage.orgName:""}</span>
                       </div>
                     </li>
                     <li>
                     <span className={styles.business}></span>
                       <div>
                         <div className={`titfontsw`}>业务机构</div>
                         <span>{sessionStorage.orgBuiName!=null?sessionStorage.orgBuiName:""}</span>
                       </div>
                     </li>
                     <li>
                        <span className={styles.loginTime}></span>
                        <div>
                          <div className={`titfontsw`}>注册时间</div>
                          <span>{sessionStorage.regDate!=null?sessionStorage.regDate:""}</span>
                        </div>
                     </li>
                     <li>
                      <span className={styles.update}></span>
                       <div>
                         <div className={`titfontsw`}>上次更新时间</div>
                         <span>{sessionStorage.updateDate!=null?sessionStorage.updateDate:""}</span>
                       </div>
                     </li>
                   </ul>
                </div>
              </Drawer>:""
            }
          </Fragment>
        )
    }
}
