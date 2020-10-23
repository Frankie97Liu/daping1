/*
 * @Author: your name
 * @Date: 2020-10-22 15:12:48
 * @LastEditTime: 2020-10-23 14:07:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /reactDemo/demo03/admin/src/components/news_autoRun.js
 */
import React from 'react';
import { Row, Col} from 'antd'
import styles from './index.less'

let list = [
    { content: 'text1', date: '2020-04-20 18:28:02' },
    { content: 'text1text1text1text1text1text1text1', date: '2020-04-20 18:28:02' },
    { content: 'text1', date: '2020-04-20 18:28:02' },
    { content: 'text1', date: '2020-04-20 18:28:02' },
    { content: 'text1', date: '2020-04-20 18:28:02' },
    { content: 'text1', date: '2020-04-20 18:28:02' },
    { content: 'text1', date: '2020-04-20 18:28:02' },
]

let box;
let con1;
let con2;
let speed;
let i;

class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startStopOnOff: false
        }
    }
    componentDidMount() {
        box = this.con;
        con1 = this.con1;
        con2 = this.con2;
        speed = 80;
        this.roll();
    }
    
    scroll = ()=>{
        if (box.scrollTop + 165 >= con1.scrollHeight) {
            con2.innerHTML = con1.innerHTML;
            box.scrollTop = 0;
            con2.innerHTML = '';
        } else {
            box.scrollTop++ 
        }
    }

    roll = () => {
        if (!this.state.startStopOnOff) {
            i = setInterval(this.scroll, speed);
        }
    }
    //移入某一条新闻--停止滚动
    stop = () => {
        clearInterval(i);
    }

    render() {
      return (
        <div className={styles.news}>
          <div className={styles.macro} ref={(c)=>{ this.con = c}}>
              <ul id='con1' ref={(c)=>{ this.con1 = c}} onMouseOut={this.roll} onMouseOver={this.stop}>
                  {list.map((item,index)=>
                      <li key={index}>
                              <Row>
                                  <Col span={24}>                               
                                        <span className={styles.date}>{item.date}</span>
                                  </Col>
                                  {/* <Col span={4}>
                                      <span className='yearMonth'>{item.date}</span>
                                  </Col> */}
                              </Row>    
                              <Row style={{backgroundColor:'rgba(239,232,232,0.5)',height: '18px',lineHeight: '18px'}}>
                                  <Col span={24}>
                                        <span className='content'>
                                        {item.content}
                                        </span>
                                  </Col>
                              </Row>
                      </li>
                  )}
              </ul>
              <ul id='con2' ref={(c)=>{ this.con2 = c }}></ul>
          </div>
        </div>
      )
    };
}

export default News;