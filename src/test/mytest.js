import React, { Fragment } from 'react';
import styles from './index.less';
import $ from '../assets/jquery-1.10.1.min.js';

import playa from '../assets/images/play-a.jpg';
import playb from '../assets/images/play-b.jpg';
import playc from '../assets/images/play-c.jpg';
import playd from '../assets/images/play-d.jpg';
import playe from '../assets/images/play-e.png';
import playf from '../assets/images/play-f.png';
import playg from '../assets/images/play-g.png';

export default class mytest extends React.PureComponent {

  componentDidMount(){
    var cArr=["p7","p6","p5","p4","p3","p2","p1"];
    var index=0;
    $(".colornext").click(
      function(){
        nextimg();
      }
    )
    $(".prev").click(
      function(){
        previmg();
      }
    )
// 上一张
    function previmg(){
      cArr.unshift(cArr[6]);
      cArr.pop();
      $(".colorul li").each(function(i,e){
        $(e).removeClass().addClass(cArr[i]);
      })
      index--;
      if (index<0) {
        index=6;
      }
    }
// 下一张
    function nextimg(){
      cArr.push(cArr[0]);
      cArr.shift();
      $(".colorul li").each(function(i,e){
        $(e).removeClass().addClass(cArr[i]);
      })
      index++;
      if (index>6) {
        index=0;
      }
    }
// 点击class为p2的元素触发上一张照片的函数
    $(document).on("click",".p2",function(){
      previmg();
      return false;
    });
// 点击class为p4的元素触发下一张照片的函数
    $(document).on("click",".p4",function(){
      nextimg();
      return false;
    });
  }
  componentWillUnmount(){}
  render(){

    return(
      <div className={styles.colorbox}>
        <div className={styles.colorlist}>
          <ul className={`${styles.colorul} colorul`}>
            <li className={`${styles.p7} p7`}><a href="javascript:;"><img src={playa} alt="" /></a></li>
            <li className={`${styles.p6} p6`}><a href="javascript:;"><img src={playb} alt="" /></a></li>
            <li className={`${styles.p5} p5`}><a href="javascript:;"><img src={playc} alt="" /></a></li>
            <li className={`${styles.p4} p4`}><a href="javascript:;"><img src={playd} alt="" /></a></li>
            <li className={`${styles.p3} p3`}><a href="javascript:;"><img src={playe} alt="" /></a></li>
            <li className={`${styles.p2} p2`}><a href="javascript:;"><img src={playf} alt="" /></a></li>
            <li className={`${styles.p1} p1`}><a href="javascript:;"><img src={playg} alt="" /></a></li>
          </ul>
        </div>

        <a href="javascript:;" className={`prev ${styles.colorbtn}`}>123</a>
        <a href="javascript:;" className={`colornext ${styles.colornext} ${styles.colorbtn}`}>234</a>
      </div>
    )
  }
}
