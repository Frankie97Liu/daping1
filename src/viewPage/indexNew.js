import React, {Component, Fragment} from 'react';
import {connect} from 'dva';
import {Carousel, Col, Row,Table,Radio,Timeline} from 'antd';
import {push} from "connected-react-router";
import styles from './indexNew.less';
import pic from '../assets/images/pic.png';
import ReactEcharts from 'echarts-for-react';
import '../assets/js/china';
import News from '../../src/components/news_AutoRuns'
import list from '../assets/images/list.png'
import virus from '../assets/images/virus.jpg'

const dataSource = [
  {
    key: '1',
    name: '北京',
    age: 32,
    address: 22,
    dead:12,
  },
  {
    key: '2',
    name: '天津',
    age: 42,
    address: 22,
    dead:12,
  },
  {
    key: '3',
    name: '上海',
    age: 42,
    address: 22,
    dead:12,
  },
  {
    key: '4',
    name: '河北',
    age: 42,
    address: 22,
    dead:12,
  },
  {
    key: '5',
    name: '山东',
    age: 42,
    address: 22,
    dead:12,
  },
];
const columns = [
  {
    title: '地区',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '确诊',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '治愈',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '死亡',
    dataIndex: 'dead',
    key: 'dead',
  },
];
class start extends Component {

  constructor(props) {
     super(props);
     this.state = {
       num: 1
     };
  }


  componentDidMount(){

  }

  getOption1 = () => {
    return {
      title: {
        text: '本日新增用户',
        textStyle: {
          align: 'left',
          color: '#849ad6',
          fontSize: 12,
        },
      },
      grid: {
        left: '5%',
        right: '5%',
        top: '20%',
        bottom: '1%',
        containLabel: true
      },
      xAxis: {
        axisLabel: {
          textStyle: {
            color:'#849ad6',
            fontSize:12

          },
        },
        axisLine: {
          lineStyle: {
            color: "#849ad6"
          }
        },
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      },
      yAxis: {
        axisLabel: {
          textStyle: {
            color:'#849ad6',
            fontSize:12

          },
        },
        axisLine: {
          lineStyle: {
            color: "#849ad6"
          }
        }
      },
      series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
      }, {
        type: 'line',
        data:[230, 192, 201, 244, 300, 310, 300]
      }]
    };
  };
  getOption2 = () => {
    return {
      title: {
        text: '全国疑似新增',
        textStyle: {
          align: 'left',
          color: '#849ad6',
          fontSize: 12,
        },
      },
      color: ['#fa0021','#7364e9'],
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        top:'18%',
        left: '5%',
        right: '4%',
        bottom: '1%',
        containLabel: true
      },

      xAxis: [{
        type: 'category',
        data: ['09-22', '09-22', '09-22', '09-22', '09-22', '09-22', '09-22'],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          textStyle: {
            color:'#849ad6',
            fontSize:12
          },
        },
        axisLine: {
          lineStyle: {
            color: "#849ad6"
          }
        }
      }],
      yAxis: [{
        type: 'value',
        axisLabel: {
          textStyle: {
            color:'#849ad6',
            fontSize:12

          },
        },
        axisLine: {
          lineStyle: {
            color: "#849ad6"
          }
        }
      }],
      barMaxWidth: '20',
      // label:{
      //   show:true,
      //   position:'top',
      //   formatter:function(params){
      //     debugger
      //     return params.value+'%'
      //   }
      // },
      series: [

        {
          name: '去年',
          type: 'bar',
          data: [90, 52, 90, 80, 90, 70, 90]
        },
        {
          name: '今年',
          type: 'bar',
          data: [10, 52, 90, 70, 90, 70, 90]
        },
      ]
    };
  };
  getOption3 = () => {
    return {
      title: {
        text: '客户端及SDK用户活跃对比情况',
        textStyle: {
          align: 'left',
          color: '#849ad6',
          fontSize: 12,
        },
      },
      grid: {
        left: '5%',
        right: '5%',
        top: '20%',
        bottom: '1%',
        containLabel: true
      },
      xAxis: {
        axisLabel: {
          textStyle: {
            color:'#849ad6',
            fontSize:12

          },
        },
        axisLine: {
          lineStyle: {
            color: "#849ad6"
          }
        },
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      },
      yAxis: {
        axisLabel: {
          textStyle: {
            color:'#849ad6',
            fontSize:12

          },
        },
        axisLine: {
          lineStyle: {
            color: "#849ad6"
          }
        }
      },
      series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
      }, {
        type: 'line',
        data:[230, 192, 201, 244, 300, 310, 300]
      }]
    };
  };
  getOption4 = () => {
    const data = [{
      name: '数据1',
      value: 36,
      rate: 12
    },
      {
        name: '数据2',
        value: 20,
        rate: 20
      },
      {
        name: '数据3',
        value: 16,
        rate: -40
      },

    ]
    return {
      title: {
        textAlign: 'left',
        left: '49%',
        top: '10%',
        textStyle: {
          color: '#ccc',
          rich: {
            header1: {
              width: 130,
              fontSize: 15
            },
          }
        }
      },
      legend: {
        // selectedMode: false, // 取消图例上的点击事件
        type: 'plain',
        icon: 'rect',
        orient: 'vertical',
        left: '60%',
        top: '30%',
        align: 'left',
        itemGap: 10,
        itemWidth: 10, // 设置宽度
        itemHeight: 10, // 设置高度
        symbolKeepAspect: false,
        textStyle: {
          color: '#000',
          rich: {
            name: {
              verticalAlign: 'right',
              align: 'left',
              width: 35,
              fontSize: 12
            },
            value: {
              align: 'left',
              width: 60,
              fontSize: 12
            },

          }
        },
        data: data.map(item => item.name),
        formatter: function(name) {
          if (data && data.length) {
            for (var i = 0; i < data.length; i++) {
              if (name === data[i].name) {
                return (
                  '{name| ' +
                  name +
                  '}  | ' +
                  '{value| ' +
                  data[i].value +
                  '%}'
                )
              }
            }
          }
        }
      },
      series: [{
        name: '数量',
        type: 'pie',
        radius: ['40%', '60%'],
        center: ['35%', '54%'],
        data: data,
        label: {
          normal: {
            show: false,
            position: 'center',
            formatter: '{text|{c}}\n{b}',
            rich: {
              text: {
                align: 'center',
                verticalAlign: 'middle',
                padding: 5,
                fontSize: 20
              },
              value: {
                align: 'center',
                verticalAlign: 'middle',
                fontSize: 20
              }
            }
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '12'
            }
          }
        },
        labelLine: {
          normal: {
            show: true
          }
        }
      }]


    };
  };

  getOptionmap = () => {
    const cured = [

      24,

      25,

      25,

      25,

      25,

      34,

      38,

      49,

      51,

      60,

      103,

      124,

      171,

      243,

      328,

      475,

      632,

      892,

      1153,

      1540,

      2052,

      2651,

      3283,

      3998,

      4742,

      5646,

      6728,

      8101,

      9425,

      10860,

      12561,

      14387,

      16168,

      18277,

      20672,

      22907,

      24757,

      27353,

      29775,

      32531,

      36157,

      39049,

      41675,

      44518,

      47260,

      49914,

      52109,

      53793,

      55477,

      57143,

      58684,

      59982,

      61567,

      62887,

      64216,

      64224,67022,67863

    ];

    const dead = [

      3,

      4,

      6,

      9,

      17,

      25,

      41,

      56,

      80,

      106,

      132,

      170,

      213,

      259,

      304,

      361,

      425,

      490,

      563,

      636,

      723,

      812,

      909,

      1017,

      1114,

      1260,

      1381,

      1524,

      1666,

      1772,

      1870,

      2006,

      2121,

      2239,

      2348,

      2445,

      2595,

      2666,

      2718,

      2747,

      2791,

      2838,

      2873,

      2915,

      2946,

      2984,

      3015,

      3045,

      3073,

      3100,

      3123,

      3140,

      3162,

      3173,

      3180,

      3181,3204,3218

    ];

    const data = [
      [{
        "date": "2020-01-18",
        "name": "湖北",
        "value": "94"
      }],
      [{
        "date": "2020-01-19",
        "name": "湖北",
        "value": "170"
      },
        {
          "date": "2020-01-19",
          "name": "广东",
          "value": "1"
        }
      ],
      [{
        "date": "2020-01-20",
        "name": "北京",
        "value": "5"
      },
        {
          "date": "2020-01-20",
          "name": "吉林",
          "value": "0"
        },
        {
          "date": "2020-01-20",
          "name": "上海",
          "value": "1"
        },
        {
          "date": "2020-01-20",
          "name": "浙江",
          "value": "0"
        },
        {
          "date": "2020-01-20",
          "name": "安徽",
          "value": "0"
        },
        {
          "date": "2020-01-20",
          "name": "江西",
          "value": "0"
        },
        {
          "date": "2020-01-20",
          "name": "山东",
          "value": "0"
        },
        {
          "date": "2020-01-20",
          "name": "湖北",
          "value": "239"
        },
        {
          "date": "2020-01-20",
          "name": "广东",
          "value": "14"
        },
        {
          "date": "2020-01-20",
          "name": "广西",
          "value": "0"
        },
        {
          "date": "2020-01-20",
          "name": "海南",
          "value": "0"
        },
        {
          "date": "2020-01-20",
          "name": "四川",
          "value": "0"
        },
        {
          "date": "2020-01-20",
          "name": "贵州",
          "value": "0"
        },
        {
          "date": "2020-01-20",
          "name": "云南",
          "value": "0"
        },
        {
          "date": "2020-01-20",
          "name": "宁夏",
          "value": "0"
        }
      ],
      [{
        "date": "2020-01-21",
        "name": "北京",
        "value": "10"
      },
        {
          "date": "2020-01-21",
          "name": "天津",
          "value": "2"
        },
        {
          "date": "2020-01-21",
          "name": "山西",
          "value": "0"
        },
        {
          "date": "2020-01-21",
          "name": "吉林",
          "value": "0"
        },
        {
          "date": "2020-01-21",
          "name": "黑龙江",
          "value": "0"
        },
        {
          "date": "2020-01-21",
          "name": "上海",
          "value": "6"
        },
        {
          "date": "2020-01-21",
          "name": "浙江",
          "value": "5"
        },
        {
          "date": "2020-01-21",
          "name": "安徽",
          "value": "0"
        },
        {
          "date": "2020-01-21",
          "name": "江西",
          "value": "2"
        },
        {
          "date": "2020-01-21",
          "name": "山东",
          "value": "1"
        },
        {
          "date": "2020-01-21",
          "name": "河南",
          "value": "1"
        },
        {
          "date": "2020-01-21",
          "name": "湖北",
          "value": "338"
        },
        {
          "date": "2020-01-21",
          "name": "湖南",
          "value": "1"
        },
        {
          "date": "2020-01-21",
          "name": "广东",
          "value": "26"
        },
        {
          "date": "2020-01-21",
          "name": "广西",
          "value": "0"
        },
        {
          "date": "2020-01-21",
          "name": "海南",
          "value": "0"
        },
        {
          "date": "2020-01-21",
          "name": "重庆",
          "value": "5"
        },
        {
          "date": "2020-01-21",
          "name": "四川",
          "value": "2"
        },
        {
          "date": "2020-01-21",
          "name": "贵州",
          "value": "0"
        },
        {
          "date": "2020-01-21",
          "name": "云南",
          "value": "1"
        },
        {
          "date": "2020-01-21",
          "name": "宁夏",
          "value": "0"
        }
      ],
      [{
        "date": "2020-01-22",
        "name": "北京",
        "value": "14"
      },
        {
          "date": "2020-01-22",
          "name": "天津",
          "value": "4"
        },
        {
          "date": "2020-01-22",
          "name": "河北",
          "value": "1"
        },
        {
          "date": "2020-01-22",
          "name": "山西",
          "value": "1"
        },
        {
          "date": "2020-01-22",
          "name": "辽宁",
          "value": "2"
        },
        {
          "date": "2020-01-22",
          "name": "吉林",
          "value": "1"
        },
        {
          "date": "2020-01-22",
          "name": "黑龙江",
          "value": "1"
        },
        {
          "date": "2020-01-22",
          "name": "上海",
          "value": "16"
        },
        {
          "date": "2020-01-22",
          "name": "江苏",
          "value": "1"
        },
        {
          "date": "2020-01-22",
          "name": "浙江",
          "value": "10"
        },
        {
          "date": "2020-01-22",
          "name": "安徽",
          "value": "1"
        },
        {
          "date": "2020-01-22",
          "name": "福建",
          "value": "1"
        },
        {
          "date": "2020-01-22",
          "name": "江西",
          "value": "3"
        },
        {
          "date": "2020-01-22",
          "name": "山东",
          "value": "6"
        },
        {
          "date": "2020-01-22",
          "name": "河南",
          "value": "5"
        },
        {
          "date": "2020-01-22",
          "name": "湖北",
          "value": "399"
        },
        {
          "date": "2020-01-22",
          "name": "湖南",
          "value": "4"
        },
        {
          "date": "2020-01-22",
          "name": "广东",
          "value": "32"
        },
        {
          "date": "2020-01-22",
          "name": "广西",
          "value": "2"
        },
        {
          "date": "2020-01-22",
          "name": "海南",
          "value": "5"
        },
        {
          "date": "2020-01-22",
          "name": "重庆",
          "value": "9"
        },
        {
          "date": "2020-01-22",
          "name": "四川",
          "value": "5"
        },
        {
          "date": "2020-01-22",
          "name": "贵州",
          "value": "3"
        },
        {
          "date": "2020-01-22",
          "name": "陕西",
          "value": "4"
        },
        {
          "date": "2020-01-22",
          "name": "宁夏",
          "value": "1"
        },
        {
          "date": "2020-01-22",
          "name": "台湾",
          "value": "1"
        },
        {
          "date": "2020-01-22",
          "name": "香港",
          "value": "1"
        },
        {
          "date": "2020-01-22",
          "name": "澳门",
          "value": "1"
        }
      ],
      [{
        "date": "2020-01-23",
        "name": "北京",
        "value": "22"
      },
        {
          "date": "2020-01-23",
          "name": "天津",
          "value": "5"
        },
        {
          "date": "2020-01-23",
          "name": "河北",
          "value": "1"
        },
        {
          "date": "2020-01-23",
          "name": "山西",
          "value": "1"
        },
        {
          "date": "2020-01-23",
          "name": "内蒙古",
          "value": "1"
        },
        {
          "date": "2020-01-23",
          "name": "辽宁",
          "value": "4"
        },
        {
          "date": "2020-01-23",
          "name": "吉林",
          "value": "3"
        },
        {
          "date": "2020-01-23",
          "name": "黑龙江",
          "value": "3"
        },
        {
          "date": "2020-01-23",
          "name": "上海",
          "value": "20"
        },
        {
          "date": "2020-01-23",
          "name": "江苏",
          "value": "9"
        },
        {
          "date": "2020-01-23",
          "name": "浙江",
          "value": "42"
        },
        {
          "date": "2020-01-23",
          "name": "安徽",
          "value": "15"
        },
        {
          "date": "2020-01-23",
          "name": "福建",
          "value": "4"
        },
        {
          "date": "2020-01-23",
          "name": "江西",
          "value": "7"
        },
        {
          "date": "2020-01-23",
          "name": "山东",
          "value": "9"
        },
        {
          "date": "2020-01-23",
          "name": "河南",
          "value": "9"
        },
        {
          "date": "2020-01-23",
          "name": "湖北",
          "value": "494"
        },
        {
          "date": "2020-01-23",
          "name": "湖南",
          "value": "24"
        },
        {
          "date": "2020-01-23",
          "name": "广东",
          "value": "51"
        },
        {
          "date": "2020-01-23",
          "name": "广西",
          "value": "13"
        },
        {
          "date": "2020-01-23",
          "name": "海南",
          "value": "8"
        },
        {
          "date": "2020-01-23",
          "name": "重庆",
          "value": "27"
        },
        {
          "date": "2020-01-23",
          "name": "四川",
          "value": "15"
        },
        {
          "date": "2020-01-23",
          "name": "贵州",
          "value": "3"
        },
        {
          "date": "2020-01-23",
          "name": "云南",
          "value": "2"
        },
        {
          "date": "2020-01-23",
          "name": "陕西",
          "value": "5"
        },
        {
          "date": "2020-01-23",
          "name": "甘肃",
          "value": "2"
        },
        {
          "date": "2020-01-23",
          "name": "宁夏",
          "value": "2"
        },
        {
          "date": "2020-01-23",
          "name": "新疆",
          "value": "2"
        },
        {
          "date": "2020-01-23",
          "name": "台湾",
          "value": "1"
        },
        {
          "date": "2020-01-23",
          "name": "香港",
          "value": "2"
        },
        {
          "date": "2020-01-23",
          "name": "澳门",
          "value": "2"
        }
      ],
      [{
        "date": "2020-01-24",
        "name": "北京",
        "value": "36"
      },
        {
          "date": "2020-01-24",
          "name": "天津",
          "value": "8"
        },
        {
          "date": "2020-01-24",
          "name": "河北",
          "value": "7"
        },
        {
          "date": "2020-01-24",
          "name": "山西",
          "value": "6"
        },
        {
          "date": "2020-01-24",
          "name": "内蒙古",
          "value": "2"
        },
        {
          "date": "2020-01-24",
          "name": "辽宁",
          "value": "12"
        },
        {
          "date": "2020-01-24",
          "name": "吉林",
          "value": "4"
        },
        {
          "date": "2020-01-24",
          "name": "黑龙江",
          "value": "8"
        },
        {
          "date": "2020-01-24",
          "name": "上海",
          "value": "32"
        },
        {
          "date": "2020-01-24",
          "name": "江苏",
          "value": "17"
        },
        {
          "date": "2020-01-24",
          "name": "浙江",
          "value": "61"
        },
        {
          "date": "2020-01-24",
          "name": "安徽",
          "value": "39"
        },
        {
          "date": "2020-01-24",
          "name": "福建",
          "value": "10"
        },
        {
          "date": "2020-01-24",
          "name": "江西",
          "value": "18"
        },
        {
          "date": "2020-01-24",
          "name": "山东",
          "value": "21"
        },
        {
          "date": "2020-01-24",
          "name": "河南",
          "value": "32"
        },
        {
          "date": "2020-01-24",
          "name": "湖北",
          "value": "658"
        },
        {
          "date": "2020-01-24",
          "name": "湖南",
          "value": "43"
        },
        {
          "date": "2020-01-24",
          "name": "广东",
          "value": "76"
        },
        {
          "date": "2020-01-24",
          "name": "广西",
          "value": "23"
        },
        {
          "date": "2020-01-24",
          "name": "海南",
          "value": "17"
        },
        {
          "date": "2020-01-24",
          "name": "重庆",
          "value": "57"
        },
        {
          "date": "2020-01-24",
          "name": "四川",
          "value": "28"
        },
        {
          "date": "2020-01-24",
          "name": "贵州",
          "value": "4"
        },
        {
          "date": "2020-01-24",
          "name": "云南",
          "value": "5"
        },
        {
          "date": "2020-01-24",
          "name": "陕西",
          "value": "15"
        },
        {
          "date": "2020-01-24",
          "name": "甘肃",
          "value": "4"
        },
        {
          "date": "2020-01-24",
          "name": "青海",
          "value": "0"
        },
        {
          "date": "2020-01-24",
          "name": "宁夏",
          "value": "3"
        },
        {
          "date": "2020-01-24",
          "name": "新疆",
          "value": "3"
        },
        {
          "date": "2020-01-24",
          "name": "台湾",
          "value": "3"
        },
        {
          "date": "2020-01-24",
          "name": "香港",
          "value": "5"
        },
        {
          "date": "2020-01-24",
          "name": "澳门",
          "value": "2"
        }
      ],
      [{
        "date": "2020-01-25",
        "name": "北京",
        "value": "41"
      },
        {
          "date": "2020-01-25",
          "name": "天津",
          "value": "10"
        },
        {
          "date": "2020-01-25",
          "name": "河北",
          "value": "12"
        },
        {
          "date": "2020-01-25",
          "name": "山西",
          "value": "9"
        },
        {
          "date": "2020-01-25",
          "name": "内蒙古",
          "value": "7"
        },
        {
          "date": "2020-01-25",
          "name": "辽宁",
          "value": "16"
        },
        {
          "date": "2020-01-25",
          "name": "吉林",
          "value": "4"
        },
        {
          "date": "2020-01-25",
          "name": "黑龙江",
          "value": "14"
        },
        {
          "date": "2020-01-25",
          "name": "上海",
          "value": "38"
        },
        {
          "date": "2020-01-25",
          "name": "江苏",
          "value": "30"
        },
        {
          "date": "2020-01-25",
          "name": "浙江",
          "value": "103"
        },
        {
          "date": "2020-01-25",
          "name": "安徽",
          "value": "60"
        },
        {
          "date": "2020-01-25",
          "name": "福建",
          "value": "18"
        },
        {
          "date": "2020-01-25",
          "name": "江西",
          "value": "36"
        },
        {
          "date": "2020-01-25",
          "name": "山东",
          "value": "39"
        },
        {
          "date": "2020-01-25",
          "name": "河南",
          "value": "82"
        },
        {
          "date": "2020-01-25",
          "name": "湖北",
          "value": "958"
        },
        {
          "date": "2020-01-25",
          "name": "湖南",
          "value": "69"
        },
        {
          "date": "2020-01-25",
          "name": "广东",
          "value": "96"
        },
        {
          "date": "2020-01-25",
          "name": "广西",
          "value": "33"
        },
        {
          "date": "2020-01-25",
          "name": "海南",
          "value": "22"
        },
        {
          "date": "2020-01-25",
          "name": "重庆",
          "value": "75"
        },
        {
          "date": "2020-01-25",
          "name": "四川",
          "value": "44"
        },
        {
          "date": "2020-01-25",
          "name": "贵州",
          "value": "5"
        },
        {
          "date": "2020-01-25",
          "name": "云南",
          "value": "11"
        },
        {
          "date": "2020-01-25",
          "name": "陕西",
          "value": "22"
        },
        {
          "date": "2020-01-25",
          "name": "甘肃",
          "value": "7"
        },
        {
          "date": "2020-01-25",
          "name": "青海",
          "value": "1"
        },
        {
          "date": "2020-01-25",
          "name": "宁夏",
          "value": "4"
        },
        {
          "date": "2020-01-25",
          "name": "新疆",
          "value": "4"
        },
        {
          "date": "2020-01-25",
          "name": "台湾",
          "value": "3"
        },
        {
          "date": "2020-01-25",
          "name": "香港",
          "value": "5"
        },
        {
          "date": "2020-01-25",
          "name": "澳门",
          "value": "2"
        }
      ],
      [{
        "date": "2020-01-26",
        "name": "北京",
        "value": "68"
      },
        {
          "date": "2020-01-26",
          "name": "天津",
          "value": "14"
        },
        {
          "date": "2020-01-26",
          "name": "河北",
          "value": "17"
        },
        {
          "date": "2020-01-26",
          "name": "山西",
          "value": "13"
        },
        {
          "date": "2020-01-26",
          "name": "内蒙古",
          "value": "11"
        },
        {
          "date": "2020-01-26",
          "name": "辽宁",
          "value": "22"
        },
        {
          "date": "2020-01-26",
          "name": "吉林",
          "value": "6"
        },
        {
          "date": "2020-01-26",
          "name": "黑龙江",
          "value": "20"
        },
        {
          "date": "2020-01-26",
          "name": "上海",
          "value": "51"
        },
        {
          "date": "2020-01-26",
          "name": "江苏",
          "value": "46"
        },
        {
          "date": "2020-01-26",
          "name": "浙江",
          "value": "127"
        },
        {
          "date": "2020-01-26",
          "name": "安徽",
          "value": "70"
        },
        {
          "date": "2020-01-26",
          "name": "福建",
          "value": "35"
        },
        {
          "date": "2020-01-26",
          "name": "江西",
          "value": "48"
        },
        {
          "date": "2020-01-26",
          "name": "山东",
          "value": "63"
        },
        {
          "date": "2020-01-26",
          "name": "河南",
          "value": "127"
        },
        {
          "date": "2020-01-26",
          "name": "湖北",
          "value": "1303"
        },
        {
          "date": "2020-01-26",
          "name": "湖南",
          "value": "100"
        },
        {
          "date": "2020-01-26",
          "name": "广东",
          "value": "144"
        },
        {
          "date": "2020-01-26",
          "name": "广西",
          "value": "46"
        },
        {
          "date": "2020-01-26",
          "name": "海南",
          "value": "30"
        },
        {
          "date": "2020-01-26",
          "name": "重庆",
          "value": "110"
        },
        {
          "date": "2020-01-26",
          "name": "四川",
          "value": "69"
        },
        {
          "date": "2020-01-26",
          "name": "贵州",
          "value": "7"
        },
        {
          "date": "2020-01-26",
          "name": "云南",
          "value": "19"
        },
        {
          "date": "2020-01-26",
          "name": "陕西",
          "value": "35"
        },
        {
          "date": "2020-01-26",
          "name": "甘肃",
          "value": "14"
        },
        {
          "date": "2020-01-26",
          "name": "青海",
          "value": "4"
        },
        {
          "date": "2020-01-26",
          "name": "宁夏",
          "value": "7"
        },
        {
          "date": "2020-01-26",
          "name": "新疆",
          "value": "5"
        },
        {
          "date": "2020-01-26",
          "name": "台湾",
          "value": "4"
        },
        {
          "date": "2020-01-26",
          "name": "香港",
          "value": "8"
        },
        {
          "date": "2020-01-26",
          "name": "澳门",
          "value": "5"
        }
      ],
      [{
        "date": "2020-01-27",
        "name": "北京",
        "value": "77"
      },
        {
          "date": "2020-01-27",
          "name": "天津",
          "value": "23"
        },
        {
          "date": "2020-01-27",
          "name": "河北",
          "value": "32"
        },
        {
          "date": "2020-01-27",
          "name": "山西",
          "value": "20"
        },
        {
          "date": "2020-01-27",
          "name": "内蒙古",
          "value": "13"
        },
        {
          "date": "2020-01-27",
          "name": "辽宁",
          "value": "27"
        },
        {
          "date": "2020-01-27",
          "name": "吉林",
          "value": "8"
        },
        {
          "date": "2020-01-27",
          "name": "黑龙江",
          "value": "29"
        },
        {
          "date": "2020-01-27",
          "name": "上海",
          "value": "62"
        },
        {
          "date": "2020-01-27",
          "name": "江苏",
          "value": "69"
        },
        {
          "date": "2020-01-27",
          "name": "浙江",
          "value": "172"
        },
        {
          "date": "2020-01-27",
          "name": "安徽",
          "value": "106"
        },
        {
          "date": "2020-01-27",
          "name": "福建",
          "value": "59"
        },
        {
          "date": "2020-01-27",
          "name": "江西",
          "value": "72"
        },
        {
          "date": "2020-01-27",
          "name": "山东",
          "value": "63"
        },
        {
          "date": "2020-01-27",
          "name": "河南",
          "value": "167"
        },
        {
          "date": "2020-01-27",
          "name": "湖北",
          "value": "2567"
        },
        {
          "date": "2020-01-27",
          "name": "湖南",
          "value": "143"
        },
        {
          "date": "2020-01-27",
          "name": "广东",
          "value": "184"
        },
        {
          "date": "2020-01-27",
          "name": "广西",
          "value": "51"
        },
        {
          "date": "2020-01-27",
          "name": "海南",
          "value": "39"
        },
        {
          "date": "2020-01-27",
          "name": "重庆",
          "value": "132"
        },
        {
          "date": "2020-01-27",
          "name": "四川",
          "value": "90"
        },
        {
          "date": "2020-01-27",
          "name": "贵州",
          "value": "9"
        },
        {
          "date": "2020-01-27",
          "name": "云南",
          "value": "44"
        },
        {
          "date": "2020-01-27",
          "name": "陕西",
          "value": "46"
        },
        {
          "date": "2020-01-27",
          "name": "甘肃",
          "value": "19"
        },
        {
          "date": "2020-01-27",
          "name": "青海",
          "value": "6"
        },
        {
          "date": "2020-01-27",
          "name": "宁夏",
          "value": "11"
        },
        {
          "date": "2020-01-27",
          "name": "新疆",
          "value": "10"
        },
        {
          "date": "2020-01-27",
          "name": "台湾",
          "value": "5"
        },
        {
          "date": "2020-01-27",
          "name": "香港",
          "value": "8"
        },
        {
          "date": "2020-01-27",
          "name": "澳门",
          "value": "7"
        }
      ],
      [{
        "date": "2020-01-28",
        "name": "北京",
        "value": "86"
      },
        {
          "date": "2020-01-28",
          "name": "天津",
          "value": "24"
        },
        {
          "date": "2020-01-28",
          "name": "河北",
          "value": "47"
        },
        {
          "date": "2020-01-28",
          "name": "山西",
          "value": "27"
        },
        {
          "date": "2020-01-28",
          "name": "内蒙古",
          "value": "16"
        },
        {
          "date": "2020-01-28",
          "name": "辽宁",
          "value": "34"
        },
        {
          "date": "2020-01-28",
          "name": "吉林",
          "value": "9"
        },
        {
          "date": "2020-01-28",
          "name": "黑龙江",
          "value": "36"
        },
        {
          "date": "2020-01-28",
          "name": "上海",
          "value": "75"
        },
        {
          "date": "2020-01-28",
          "name": "江苏",
          "value": "98"
        },
        {
          "date": "2020-01-28",
          "name": "浙江",
          "value": "293"
        },
        {
          "date": "2020-01-28",
          "name": "安徽",
          "value": "152"
        },
        {
          "date": "2020-01-28",
          "name": "福建",
          "value": "80"
        },
        {
          "date": "2020-01-28",
          "name": "江西",
          "value": "106"
        },
        {
          "date": "2020-01-28",
          "name": "山东",
          "value": "121"
        },
        {
          "date": "2020-01-28",
          "name": "河南",
          "value": "203"
        },
        {
          "date": "2020-01-28",
          "name": "湖北",
          "value": "3349"
        },
        {
          "date": "2020-01-28",
          "name": "湖南",
          "value": "221"
        },
        {
          "date": "2020-01-28",
          "name": "广东",
          "value": "236"
        },
        {
          "date": "2020-01-28",
          "name": "广西",
          "value": "56"
        },
        {
          "date": "2020-01-28",
          "name": "海南",
          "value": "42"
        },
        {
          "date": "2020-01-28",
          "name": "重庆",
          "value": "147"
        },
        {
          "date": "2020-01-28",
          "name": "四川",
          "value": "108"
        },
        {
          "date": "2020-01-28",
          "name": "贵州",
          "value": "8"
        },
        {
          "date": "2020-01-28",
          "name": "云南",
          "value": "51"
        },
        {
          "date": "2020-01-28",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-01-28",
          "name": "陕西",
          "value": "56"
        },
        {
          "date": "2020-01-28",
          "name": "甘肃",
          "value": "24"
        },
        {
          "date": "2020-01-28",
          "name": "青海",
          "value": "6"
        },
        {
          "date": "2020-01-28",
          "name": "宁夏",
          "value": "12"
        },
        {
          "date": "2020-01-28",
          "name": "新疆",
          "value": "13"
        },
        {
          "date": "2020-01-28",
          "name": "台湾",
          "value": "8"
        },
        {
          "date": "2020-01-28",
          "name": "香港",
          "value": "8"
        },
        {
          "date": "2020-01-28",
          "name": "澳门",
          "value": "7"
        }
      ],
      [{
        "date": "2020-01-29",
        "name": "北京",
        "value": "109"
      },
        {
          "date": "2020-01-29",
          "name": "天津",
          "value": "27"
        },
        {
          "date": "2020-01-29",
          "name": "河北",
          "value": "64"
        },
        {
          "date": "2020-01-29",
          "name": "山西",
          "value": "34"
        },
        {
          "date": "2020-01-29",
          "name": "内蒙古",
          "value": "18"
        },
        {
          "date": "2020-01-29",
          "name": "辽宁",
          "value": "40"
        },
        {
          "date": "2020-01-29",
          "name": "吉林",
          "value": "14"
        },
        {
          "date": "2020-01-29",
          "name": "黑龙江",
          "value": "42"
        },
        {
          "date": "2020-01-29",
          "name": "上海",
          "value": "95"
        },
        {
          "date": "2020-01-29",
          "name": "江苏",
          "value": "128"
        },
        {
          "date": "2020-01-29",
          "name": "浙江",
          "value": "424"
        },
        {
          "date": "2020-01-29",
          "name": "安徽",
          "value": "198"
        },
        {
          "date": "2020-01-29",
          "name": "福建",
          "value": "101"
        },
        {
          "date": "2020-01-29",
          "name": "江西",
          "value": "159"
        },
        {
          "date": "2020-01-29",
          "name": "山东",
          "value": "144"
        },
        {
          "date": "2020-01-29",
          "name": "河南",
          "value": "202"
        },
        {
          "date": "2020-01-29",
          "name": "湖北",
          "value": "4334"
        },
        {
          "date": "2020-01-29",
          "name": "湖南",
          "value": "277"
        },
        {
          "date": "2020-01-29",
          "name": "广东",
          "value": "305"
        },
        {
          "date": "2020-01-29",
          "name": "广西",
          "value": "76"
        },
        {
          "date": "2020-01-29",
          "name": "海南",
          "value": "44"
        },
        {
          "date": "2020-01-29",
          "name": "重庆",
          "value": "164"
        },
        {
          "date": "2020-01-29",
          "name": "四川",
          "value": "140"
        },
        {
          "date": "2020-01-29",
          "name": "贵州",
          "value": "11"
        },
        {
          "date": "2020-01-29",
          "name": "云南",
          "value": "70"
        },
        {
          "date": "2020-01-29",
          "name": "西藏",
          "value": "1"
        },
        {
          "date": "2020-01-29",
          "name": "陕西",
          "value": "63"
        },
        {
          "date": "2020-01-29",
          "name": "甘肃",
          "value": "26"
        },
        {
          "date": "2020-01-29",
          "name": "青海",
          "value": "6"
        },
        {
          "date": "2020-01-29",
          "name": "宁夏",
          "value": "17"
        },
        {
          "date": "2020-01-29",
          "name": "新疆",
          "value": "14"
        },
        {
          "date": "2020-01-29",
          "name": "台湾",
          "value": "8"
        },
        {
          "date": "2020-01-29",
          "name": "香港",
          "value": "10"
        },
        {
          "date": "2020-01-29",
          "name": "澳门",
          "value": "7"
        }
      ],
      [{
        "date": "2020-01-30",
        "name": "北京",
        "value": "126"
      },
        {
          "date": "2020-01-30",
          "name": "天津",
          "value": "31"
        },
        {
          "date": "2020-01-30",
          "name": "河北",
          "value": "81"
        },
        {
          "date": "2020-01-30",
          "name": "山西",
          "value": "38"
        },
        {
          "date": "2020-01-30",
          "name": "内蒙古",
          "value": "20"
        },
        {
          "date": "2020-01-30",
          "name": "辽宁",
          "value": "44"
        },
        {
          "date": "2020-01-30",
          "name": "吉林",
          "value": "13"
        },
        {
          "date": "2020-01-30",
          "name": "黑龙江",
          "value": "57"
        },
        {
          "date": "2020-01-30",
          "name": "上海",
          "value": "122"
        },
        {
          "date": "2020-01-30",
          "name": "江苏",
          "value": "166"
        },
        {
          "date": "2020-01-30",
          "name": "浙江",
          "value": "528"
        },
        {
          "date": "2020-01-30",
          "name": "安徽",
          "value": "234"
        },
        {
          "date": "2020-01-30",
          "name": "福建",
          "value": "120"
        },
        {
          "date": "2020-01-30",
          "name": "江西",
          "value": "233"
        },
        {
          "date": "2020-01-30",
          "name": "山东",
          "value": "176"
        },
        {
          "date": "2020-01-30",
          "name": "河南",
          "value": "347"
        },
        {
          "date": "2020-01-30",
          "name": "湖北",
          "value": "5486"
        },
        {
          "date": "2020-01-30",
          "name": "湖南",
          "value": "330"
        },
        {
          "date": "2020-01-30",
          "name": "广东",
          "value": "384"
        },
        {
          "date": "2020-01-30",
          "name": "广西",
          "value": "85"
        },
        {
          "date": "2020-01-30",
          "name": "海南",
          "value": "47"
        },
        {
          "date": "2020-01-30",
          "name": "重庆",
          "value": "205"
        },
        {
          "date": "2020-01-30",
          "name": "四川",
          "value": "175"
        },
        {
          "date": "2020-01-30",
          "name": "贵州",
          "value": "14"
        },
        {
          "date": "2020-01-30",
          "name": "云南",
          "value": "80"
        },
        {
          "date": "2020-01-30",
          "name": "西藏",
          "value": "1"
        },
        {
          "date": "2020-01-30",
          "name": "陕西",
          "value": "87"
        },
        {
          "date": "2020-01-30",
          "name": "甘肃",
          "value": "29"
        },
        {
          "date": "2020-01-30",
          "name": "青海",
          "value": "8"
        },
        {
          "date": "2020-01-30",
          "name": "宁夏",
          "value": "21"
        },
        {
          "date": "2020-01-30",
          "name": "新疆",
          "value": "17"
        },
        {
          "date": "2020-01-30",
          "name": "台湾",
          "value": "9"
        },
        {
          "date": "2020-01-30",
          "name": "香港",
          "value": "12"
        },
        {
          "date": "2020-01-30",
          "name": "澳门",
          "value": "7"
        }
      ],
      [{
        "date": "2020-01-31",
        "name": "北京",
        "value": "150"
      },
        {
          "date": "2020-01-31",
          "name": "天津",
          "value": "32"
        },
        {
          "date": "2020-01-31",
          "name": "河北",
          "value": "95"
        },
        {
          "date": "2020-01-31",
          "name": "山西",
          "value": "46"
        },
        {
          "date": "2020-01-31",
          "name": "内蒙古",
          "value": "22"
        },
        {
          "date": "2020-01-31",
          "name": "辽宁",
          "value": "59"
        },
        {
          "date": "2020-01-31",
          "name": "吉林",
          "value": "16"
        },
        {
          "date": "2020-01-31",
          "name": "黑龙江",
          "value": "78"
        },
        {
          "date": "2020-01-31",
          "name": "上海",
          "value": "143"
        },
        {
          "date": "2020-01-31",
          "name": "江苏",
          "value": "197"
        },
        {
          "date": "2020-01-31",
          "name": "浙江",
          "value": "584"
        },
        {
          "date": "2020-01-31",
          "name": "安徽",
          "value": "294"
        },
        {
          "date": "2020-01-31",
          "name": "福建",
          "value": "144"
        },
        {
          "date": "2020-01-31",
          "name": "江西",
          "value": "277"
        },
        {
          "date": "2020-01-31",
          "name": "山东",
          "value": "200"
        },
        {
          "date": "2020-01-31",
          "name": "河南",
          "value": "417"
        },
        {
          "date": "2020-01-31",
          "name": "湖北",
          "value": "6738"
        },
        {
          "date": "2020-01-31",
          "name": "湖南",
          "value": "386"
        },
        {
          "date": "2020-01-31",
          "name": "广东",
          "value": "520"
        },
        {
          "date": "2020-01-31",
          "name": "广西",
          "value": "98"
        },
        {
          "date": "2020-01-31",
          "name": "海南",
          "value": "55"
        },
        {
          "date": "2020-01-31",
          "name": "重庆",
          "value": "236"
        },
        {
          "date": "2020-01-31",
          "name": "四川",
          "value": "203"
        },
        {
          "date": "2020-01-31",
          "name": "贵州",
          "value": "27"
        },
        {
          "date": "2020-01-31",
          "name": "云南",
          "value": "90"
        },
        {
          "date": "2020-01-31",
          "name": "西藏",
          "value": "1"
        },
        {
          "date": "2020-01-31",
          "name": "陕西",
          "value": "101"
        },
        {
          "date": "2020-01-31",
          "name": "甘肃",
          "value": "35"
        },
        {
          "date": "2020-01-31",
          "name": "青海",
          "value": "9"
        },
        {
          "date": "2020-01-31",
          "name": "宁夏",
          "value": "26"
        },
        {
          "date": "2020-01-31",
          "name": "新疆",
          "value": "18"
        },
        {
          "date": "2020-01-31",
          "name": "台湾",
          "value": "10"
        },
        {
          "date": "2020-01-31",
          "name": "香港",
          "value": "13"
        },
        {
          "date": "2020-01-31",
          "name": "澳门",
          "value": "7"
        }
      ],
      [{
        "date": "2020-02-01",
        "name": "北京",
        "value": "173"
      },
        {
          "date": "2020-02-01",
          "name": "天津",
          "value": "41"
        },
        {
          "date": "2020-02-01",
          "name": "河北",
          "value": "100"
        },
        {
          "date": "2020-02-01",
          "name": "山西",
          "value": "55"
        },
        {
          "date": "2020-02-01",
          "name": "内蒙古",
          "value": "26"
        },
        {
          "date": "2020-02-01",
          "name": "辽宁",
          "value": "63"
        },
        {
          "date": "2020-02-01",
          "name": "吉林",
          "value": "22"
        },
        {
          "date": "2020-02-01",
          "name": "黑龙江",
          "value": "93"
        },
        {
          "date": "2020-02-01",
          "name": "上海",
          "value": "166"
        },
        {
          "date": "2020-02-01",
          "name": "江苏",
          "value": "230"
        },
        {
          "date": "2020-02-01",
          "name": "浙江",
          "value": "638"
        },
        {
          "date": "2020-02-01",
          "name": "安徽",
          "value": "335"
        },
        {
          "date": "2020-02-01",
          "name": "福建",
          "value": "159"
        },
        {
          "date": "2020-02-01",
          "name": "江西",
          "value": "323"
        },
        {
          "date": "2020-02-01",
          "name": "山东",
          "value": "220"
        },
        {
          "date": "2020-02-01",
          "name": "河南",
          "value": "487"
        },
        {
          "date": "2020-02-01",
          "name": "湖北",
          "value": "8565"
        },
        {
          "date": "2020-02-01",
          "name": "湖南",
          "value": "455"
        },
        {
          "date": "2020-02-01",
          "name": "广东",
          "value": "592"
        },
        {
          "date": "2020-02-01",
          "name": "广西",
          "value": "109"
        },
        {
          "date": "2020-02-01",
          "name": "海南",
          "value": "61"
        },
        {
          "date": "2020-02-01",
          "name": "重庆",
          "value": "258"
        },
        {
          "date": "2020-02-01",
          "name": "四川",
          "value": "227"
        },
        {
          "date": "2020-02-01",
          "name": "贵州",
          "value": "36"
        },
        {
          "date": "2020-02-01",
          "name": "云南",
          "value": "97"
        },
        {
          "date": "2020-02-01",
          "name": "西藏",
          "value": "1"
        },
        {
          "date": "2020-02-01",
          "name": "陕西",
          "value": "116"
        },
        {
          "date": "2020-02-01",
          "name": "甘肃",
          "value": "40"
        },
        {
          "date": "2020-02-01",
          "name": "青海",
          "value": "9"
        },
        {
          "date": "2020-02-01",
          "name": "宁夏",
          "value": "28"
        },
        {
          "date": "2020-02-01",
          "name": "新疆",
          "value": "21"
        },
        {
          "date": "2020-02-01",
          "name": "台湾",
          "value": "10"
        },
        {
          "date": "2020-02-01",
          "name": "香港",
          "value": "14"
        },
        {
          "date": "2020-02-01",
          "name": "澳门",
          "value": "7"
        }
      ],
      [{
        "date": "2020-02-02",
        "name": "北京",
        "value": "199"
      },
        {
          "date": "2020-02-02",
          "name": "天津",
          "value": "47"
        },
        {
          "date": "2020-02-02",
          "name": "河北",
          "value": "109"
        },
        {
          "date": "2020-02-02",
          "name": "山西",
          "value": "64"
        },
        {
          "date": "2020-02-02",
          "name": "内蒙古",
          "value": "33"
        },
        {
          "date": "2020-02-02",
          "name": "辽宁",
          "value": "69"
        },
        {
          "date": "2020-02-02",
          "name": "吉林",
          "value": "30"
        },
        {
          "date": "2020-02-02",
          "name": "黑龙江",
          "value": "114"
        },
        {
          "date": "2020-02-02",
          "name": "上海",
          "value": "182"
        },
        {
          "date": "2020-02-02",
          "name": "江苏",
          "value": "264"
        },
        {
          "date": "2020-02-02",
          "name": "浙江",
          "value": "688"
        },
        {
          "date": "2020-02-02",
          "name": "安徽",
          "value": "401"
        },
        {
          "date": "2020-02-02",
          "name": "福建",
          "value": "179"
        },
        {
          "date": "2020-02-02",
          "name": "江西",
          "value": "373"
        },
        {
          "date": "2020-02-02",
          "name": "山东",
          "value": "240"
        },
        {
          "date": "2020-02-02",
          "name": "河南",
          "value": "550"
        },
        {
          "date": "2020-02-02",
          "name": "湖北",
          "value": "10532"
        },
        {
          "date": "2020-02-02",
          "name": "湖南",
          "value": "505"
        },
        {
          "date": "2020-02-02",
          "name": "广东",
          "value": "669"
        },
        {
          "date": "2020-02-02",
          "name": "广西",
          "value": "125"
        },
        {
          "date": "2020-02-02",
          "name": "海南",
          "value": "65"
        },
        {
          "date": "2020-02-02",
          "name": "重庆",
          "value": "291"
        },
        {
          "date": "2020-02-02",
          "name": "四川",
          "value": "241"
        },
        {
          "date": "2020-02-02",
          "name": "贵州",
          "value": "44"
        },
        {
          "date": "2020-02-02",
          "name": "云南",
          "value": "106"
        },
        {
          "date": "2020-02-02",
          "name": "西藏",
          "value": "1"
        },
        {
          "date": "2020-02-02",
          "name": "陕西",
          "value": "128"
        },
        {
          "date": "2020-02-02",
          "name": "甘肃",
          "value": "48"
        },
        {
          "date": "2020-02-02",
          "name": "青海",
          "value": "13"
        },
        {
          "date": "2020-02-02",
          "name": "宁夏",
          "value": "31"
        },
        {
          "date": "2020-02-02",
          "name": "新疆",
          "value": "24"
        },
        {
          "date": "2020-02-02",
          "name": "台湾",
          "value": "10"
        },
        {
          "date": "2020-02-02",
          "name": "香港",
          "value": "15"
        },
        {
          "date": "2020-02-02",
          "name": "澳门",
          "value": "8"
        }
      ],
      [{
        "date": "2020-02-03",
        "name": "北京",
        "value": "204"
      },
        {
          "date": "2020-02-03",
          "name": "天津",
          "value": "59"
        },
        {
          "date": "2020-02-03",
          "name": "河北",
          "value": "122"
        },
        {
          "date": "2020-02-03",
          "name": "山西",
          "value": "72"
        },
        {
          "date": "2020-02-03",
          "name": "内蒙古",
          "value": "34"
        },
        {
          "date": "2020-02-03",
          "name": "辽宁",
          "value": "73"
        },
        {
          "date": "2020-02-03",
          "name": "吉林",
          "value": "41"
        },
        {
          "date": "2020-02-03",
          "name": "黑龙江",
          "value": "151"
        },
        {
          "date": "2020-02-03",
          "name": "上海",
          "value": "197"
        },
        {
          "date": "2020-02-03",
          "name": "江苏",
          "value": "300"
        },
        {
          "date": "2020-02-03",
          "name": "浙江",
          "value": "781"
        },
        {
          "date": "2020-02-03",
          "name": "安徽",
          "value": "466"
        },
        {
          "date": "2020-02-03",
          "name": "福建",
          "value": "193"
        },
        {
          "date": "2020-02-03",
          "name": "江西",
          "value": "457"
        },
        {
          "date": "2020-02-03",
          "name": "山东",
          "value": "263"
        },
        {
          "date": "2020-02-03",
          "name": "河南",
          "value": "653"
        },
        {
          "date": "2020-02-03",
          "name": "湖北",
          "value": "12712"
        },
        {
          "date": "2020-02-03",
          "name": "湖南",
          "value": "571"
        },
        {
          "date": "2020-02-03",
          "name": "广东",
          "value": "777"
        },
        {
          "date": "2020-02-03",
          "name": "广西",
          "value": "132"
        },
        {
          "date": "2020-02-03",
          "name": "海南",
          "value": "74"
        },
        {
          "date": "2020-02-03",
          "name": "重庆",
          "value": "326"
        },
        {
          "date": "2020-02-03",
          "name": "四川",
          "value": "267"
        },
        {
          "date": "2020-02-03",
          "name": "贵州",
          "value": "54"
        },
        {
          "date": "2020-02-03",
          "name": "云南",
          "value": "112"
        },
        {
          "date": "2020-02-03",
          "name": "西藏",
          "value": "1"
        },
        {
          "date": "2020-02-03",
          "name": "陕西",
          "value": "141"
        },
        {
          "date": "2020-02-03",
          "name": "甘肃",
          "value": "52"
        },
        {
          "date": "2020-02-03",
          "name": "青海",
          "value": "15"
        },
        {
          "date": "2020-02-03",
          "name": "宁夏",
          "value": "34"
        },
        {
          "date": "2020-02-03",
          "name": "新疆",
          "value": "29"
        },
        {
          "date": "2020-02-03",
          "name": "台湾",
          "value": "10"
        },
        {
          "date": "2020-02-03",
          "name": "香港",
          "value": "15"
        },
        {
          "date": "2020-02-03",
          "name": "澳门",
          "value": "8"
        }
      ],
      [{
        "date": "2020-02-04",
        "name": "北京",
        "value": "228"
      },
        {
          "date": "2020-02-04",
          "name": "天津",
          "value": "65"
        },
        {
          "date": "2020-02-04",
          "name": "河北",
          "value": "130"
        },
        {
          "date": "2020-02-04",
          "name": "山西",
          "value": "77"
        },
        {
          "date": "2020-02-04",
          "name": "内蒙古",
          "value": "41"
        },
        {
          "date": "2020-02-04",
          "name": "辽宁",
          "value": "79"
        },
        {
          "date": "2020-02-04",
          "name": "吉林",
          "value": "53"
        },
        {
          "date": "2020-02-04",
          "name": "黑龙江",
          "value": "184"
        },
        {
          "date": "2020-02-04",
          "name": "上海",
          "value": "220"
        },
        {
          "date": "2020-02-04",
          "name": "江苏",
          "value": "328"
        },
        {
          "date": "2020-02-04",
          "name": "浙江",
          "value": "832"
        },
        {
          "date": "2020-02-04",
          "name": "安徽",
          "value": "510"
        },
        {
          "date": "2020-02-04",
          "name": "福建",
          "value": "198"
        },
        {
          "date": "2020-02-04",
          "name": "江西",
          "value": "521"
        },
        {
          "date": "2020-02-04",
          "name": "山东",
          "value": "285"
        },
        {
          "date": "2020-02-04",
          "name": "河南",
          "value": "721"
        },
        {
          "date": "2020-02-04",
          "name": "湖北",
          "value": "15679"
        },
        {
          "date": "2020-02-04",
          "name": "湖南",
          "value": "626"
        },
        {
          "date": "2020-02-04",
          "name": "广东",
          "value": "838"
        },
        {
          "date": "2020-02-04",
          "name": "广西",
          "value": "140"
        },
        {
          "date": "2020-02-04",
          "name": "海南",
          "value": "84"
        },
        {
          "date": "2020-02-04",
          "name": "重庆",
          "value": "350"
        },
        {
          "date": "2020-02-04",
          "name": "四川",
          "value": "277"
        },
        {
          "date": "2020-02-04",
          "name": "贵州",
          "value": "59"
        },
        {
          "date": "2020-02-04",
          "name": "云南",
          "value": "117"
        },
        {
          "date": "2020-02-04",
          "name": "西藏",
          "value": "1"
        },
        {
          "date": "2020-02-04",
          "name": "陕西",
          "value": "163"
        },
        {
          "date": "2020-02-04",
          "name": "甘肃",
          "value": "53"
        },
        {
          "date": "2020-02-04",
          "name": "青海",
          "value": "17"
        },
        {
          "date": "2020-02-04",
          "name": "宁夏",
          "value": "34"
        },
        {
          "date": "2020-02-04",
          "name": "新疆",
          "value": "32"
        },
        {
          "date": "2020-02-04",
          "name": "台湾",
          "value": "11"
        },
        {
          "date": "2020-02-04",
          "name": "香港",
          "value": "17"
        },
        {
          "date": "2020-02-04",
          "name": "澳门",
          "value": "10"
        }
      ],
      [{
        "date": "2020-02-05",
        "name": "北京",
        "value": "242"
      },
        {
          "date": "2020-02-05",
          "name": "天津",
          "value": "66"
        },
        {
          "date": "2020-02-05",
          "name": "河北",
          "value": "149"
        },
        {
          "date": "2020-02-05",
          "name": "山西",
          "value": "84"
        },
        {
          "date": "2020-02-05",
          "name": "内蒙古",
          "value": "42"
        },
        {
          "date": "2020-02-05",
          "name": "辽宁",
          "value": "85"
        },
        {
          "date": "2020-02-05",
          "name": "吉林",
          "value": "57"
        },
        {
          "date": "2020-02-05",
          "name": "黑龙江",
          "value": "217"
        },
        {
          "date": "2020-02-05",
          "name": "上海",
          "value": "238"
        },
        {
          "date": "2020-02-05",
          "name": "江苏",
          "value": "347"
        },
        {
          "date": "2020-02-05",
          "name": "浙江",
          "value": "873"
        },
        {
          "date": "2020-02-05",
          "name": "安徽",
          "value": "568"
        },
        {
          "date": "2020-02-05",
          "name": "福建",
          "value": "204"
        },
        {
          "date": "2020-02-05",
          "name": "江西",
          "value": "563"
        },
        {
          "date": "2020-02-05",
          "name": "山东",
          "value": "325"
        },
        {
          "date": "2020-02-05",
          "name": "河南",
          "value": "795"
        },
        {
          "date": "2020-02-05",
          "name": "湖北",
          "value": "18483"
        },
        {
          "date": "2020-02-05",
          "name": "湖南",
          "value": "655"
        },
        {
          "date": "2020-02-05",
          "name": "广东",
          "value": "895"
        },
        {
          "date": "2020-02-05",
          "name": "广西",
          "value": "154"
        },
        {
          "date": "2020-02-05",
          "name": "海南",
          "value": "94"
        },
        {
          "date": "2020-02-05",
          "name": "重庆",
          "value": "372"
        },
        {
          "date": "2020-02-05",
          "name": "四川",
          "value": "293"
        },
        {
          "date": "2020-02-05",
          "name": "贵州",
          "value": "63"
        },
        {
          "date": "2020-02-05",
          "name": "云南",
          "value": "123"
        },
        {
          "date": "2020-02-05",
          "name": "西藏",
          "value": "1"
        },
        {
          "date": "2020-02-05",
          "name": "陕西",
          "value": "167"
        },
        {
          "date": "2020-02-05",
          "name": "甘肃",
          "value": "56"
        },
        {
          "date": "2020-02-05",
          "name": "青海",
          "value": "15"
        },
        {
          "date": "2020-02-05",
          "name": "宁夏",
          "value": "39"
        },
        {
          "date": "2020-02-05",
          "name": "新疆",
          "value": "36"
        },
        {
          "date": "2020-02-05",
          "name": "台湾",
          "value": "11"
        },
        {
          "date": "2020-02-05",
          "name": "香港",
          "value": "20"
        },
        {
          "date": "2020-02-05",
          "name": "澳门",
          "value": "10"
        }
      ],
      [{
        "date": "2020-02-06",
        "name": "北京",
        "value": "263"
      },
        {
          "date": "2020-02-06",
          "name": "天津",
          "value": "77"
        },
        {
          "date": "2020-02-06",
          "name": "河北",
          "value": "154"
        },
        {
          "date": "2020-02-06",
          "name": "山西",
          "value": "84"
        },
        {
          "date": "2020-02-06",
          "name": "内蒙古",
          "value": "50"
        },
        {
          "date": "2020-02-06",
          "name": "辽宁",
          "value": "89"
        },
        {
          "date": "2020-02-06",
          "name": "吉林",
          "value": "60"
        },
        {
          "date": "2020-02-06",
          "name": "黑龙江",
          "value": "266"
        },
        {
          "date": "2020-02-06",
          "name": "上海",
          "value": "243"
        },
        {
          "date": "2020-02-06",
          "name": "江苏",
          "value": "370"
        },
        {
          "date": "2020-02-06",
          "name": "浙江",
          "value": "908"
        },
        {
          "date": "2020-02-06",
          "name": "安徽",
          "value": "631"
        },
        {
          "date": "2020-02-06",
          "name": "福建",
          "value": "209"
        },
        {
          "date": "2020-02-06",
          "name": "江西",
          "value": "616"
        },
        {
          "date": "2020-02-06",
          "name": "山东",
          "value": "348"
        },
        {
          "date": "2020-02-06",
          "name": "河南",
          "value": "843"
        },
        {
          "date": "2020-02-06",
          "name": "湖北",
          "value": "20677"
        },
        {
          "date": "2020-02-06",
          "name": "湖南",
          "value": "681"
        },
        {
          "date": "2020-02-06",
          "name": "广东",
          "value": "950"
        },
        {
          "date": "2020-02-06",
          "name": "广西",
          "value": "155"
        },
        {
          "date": "2020-02-06",
          "name": "海南",
          "value": "101"
        },
        {
          "date": "2020-02-06",
          "name": "重庆",
          "value": "385"
        },
        {
          "date": "2020-02-06",
          "name": "四川",
          "value": "306"
        },
        {
          "date": "2020-02-06",
          "name": "贵州",
          "value": "71"
        },
        {
          "date": "2020-02-06",
          "name": "云南",
          "value": "128"
        },
        {
          "date": "2020-02-06",
          "name": "西藏",
          "value": "1"
        },
        {
          "date": "2020-02-06",
          "name": "陕西",
          "value": "173"
        },
        {
          "date": "2020-02-06",
          "name": "甘肃",
          "value": "58"
        },
        {
          "date": "2020-02-06",
          "name": "青海",
          "value": "15"
        },
        {
          "date": "2020-02-06",
          "name": "宁夏",
          "value": "42"
        },
        {
          "date": "2020-02-06",
          "name": "新疆",
          "value": "39"
        },
        {
          "date": "2020-02-06",
          "name": "台湾",
          "value": "15"
        },
        {
          "date": "2020-02-06",
          "name": "香港",
          "value": "23"
        },
        {
          "date": "2020-02-06",
          "name": "澳门",
          "value": "9"
        }
      ],
      [{
        "date": "2020-02-07",
        "name": "北京",
        "value": "279"
      },
        {
          "date": "2020-02-07",
          "name": "天津",
          "value": "78"
        },
        {
          "date": "2020-02-07",
          "name": "河北",
          "value": "169"
        },
        {
          "date": "2020-02-07",
          "name": "山西",
          "value": "89"
        },
        {
          "date": "2020-02-07",
          "name": "内蒙古",
          "value": "47"
        },
        {
          "date": "2020-02-07",
          "name": "辽宁",
          "value": "92"
        },
        {
          "date": "2020-02-07",
          "name": "吉林",
          "value": "64"
        },
        {
          "date": "2020-02-07",
          "name": "黑龙江",
          "value": "264"
        },
        {
          "date": "2020-02-07",
          "name": "上海",
          "value": "250"
        },
        {
          "date": "2020-02-07",
          "name": "江苏",
          "value": "396"
        },
        {
          "date": "2020-02-07",
          "name": "浙江",
          "value": "921"
        },
        {
          "date": "2020-02-07",
          "name": "安徽",
          "value": "686"
        },
        {
          "date": "2020-02-07",
          "name": "福建",
          "value": "219"
        },
        {
          "date": "2020-02-07",
          "name": "江西",
          "value": "643"
        },
        {
          "date": "2020-02-07",
          "name": "山东",
          "value": "369"
        },
        {
          "date": "2020-02-07",
          "name": "河南",
          "value": "879"
        },
        {
          "date": "2020-02-07",
          "name": "湖北",
          "value": "23139"
        },
        {
          "date": "2020-02-07",
          "name": "湖南",
          "value": "684"
        },
        {
          "date": "2020-02-07",
          "name": "广东",
          "value": "977"
        },
        {
          "date": "2020-02-07",
          "name": "广西",
          "value": "166"
        },
        {
          "date": "2020-02-07",
          "name": "海南",
          "value": "109"
        },
        {
          "date": "2020-02-07",
          "name": "重庆",
          "value": "393"
        },
        {
          "date": "2020-02-07",
          "name": "四川",
          "value": "312"
        },
        {
          "date": "2020-02-07",
          "name": "贵州",
          "value": "82"
        },
        {
          "date": "2020-02-07",
          "name": "云南",
          "value": "126"
        },
        {
          "date": "2020-02-07",
          "name": "西藏",
          "value": "1"
        },
        {
          "date": "2020-02-07",
          "name": "陕西",
          "value": "175"
        },
        {
          "date": "2020-02-07",
          "name": "甘肃",
          "value": "61"
        },
        {
          "date": "2020-02-07",
          "name": "青海",
          "value": "15"
        },
        {
          "date": "2020-02-07",
          "name": "宁夏",
          "value": "39"
        },
        {
          "date": "2020-02-07",
          "name": "新疆",
          "value": "42"
        },
        {
          "date": "2020-02-07",
          "name": "台湾",
          "value": "15"
        },
        {
          "date": "2020-02-07",
          "name": "香港",
          "value": "25"
        },
        {
          "date": "2020-02-07",
          "name": "澳门",
          "value": "9"
        }
      ],
      [{
        "date": "2020-02-08",
        "name": "北京",
        "value": "287"
      },
        {
          "date": "2020-02-08",
          "name": "天津",
          "value": "83"
        },
        {
          "date": "2020-02-08",
          "name": "河北",
          "value": "174"
        },
        {
          "date": "2020-02-08",
          "name": "山西",
          "value": "94"
        },
        {
          "date": "2020-02-08",
          "name": "内蒙古",
          "value": "49"
        },
        {
          "date": "2020-02-08",
          "name": "辽宁",
          "value": "94"
        },
        {
          "date": "2020-02-08",
          "name": "吉林",
          "value": "72"
        },
        {
          "date": "2020-02-08",
          "name": "黑龙江",
          "value": "288"
        },
        {
          "date": "2020-02-08",
          "name": "上海",
          "value": "250"
        },
        {
          "date": "2020-02-08",
          "name": "江苏",
          "value": "417"
        },
        {
          "date": "2020-02-08",
          "name": "浙江",
          "value": "902"
        },
        {
          "date": "2020-02-08",
          "name": "安徽",
          "value": "719"
        },
        {
          "date": "2020-02-08",
          "name": "福建",
          "value": "226"
        },
        {
          "date": "2020-02-08",
          "name": "江西",
          "value": "667"
        },
        {
          "date": "2020-02-08",
          "name": "山东",
          "value": "384"
        },
        {
          "date": "2020-02-08",
          "name": "河南",
          "value": "896"
        },
        {
          "date": "2020-02-08",
          "name": "湖北",
          "value": "24794"
        },
        {
          "date": "2020-02-08",
          "name": "湖南",
          "value": "678"
        },
        {
          "date": "2020-02-08",
          "name": "广东",
          "value": "994"
        },
        {
          "date": "2020-02-08",
          "name": "广西",
          "value": "176"
        },
        {
          "date": "2020-02-08",
          "name": "海南",
          "value": "111"
        },
        {
          "date": "2020-02-08",
          "name": "重庆",
          "value": "405"
        },
        {
          "date": "2020-02-08",
          "name": "四川",
          "value": "325"
        },
        {
          "date": "2020-02-08",
          "name": "贵州",
          "value": "88"
        },
        {
          "date": "2020-02-08",
          "name": "云南",
          "value": "123"
        },
        {
          "date": "2020-02-08",
          "name": "西藏",
          "value": "1"
        },
        {
          "date": "2020-02-08",
          "name": "陕西",
          "value": "178"
        },
        {
          "date": "2020-02-08",
          "name": "甘肃",
          "value": "66"
        },
        {
          "date": "2020-02-08",
          "name": "青海",
          "value": "15"
        },
        {
          "date": "2020-02-08",
          "name": "宁夏",
          "value": "32"
        },
        {
          "date": "2020-02-08",
          "name": "新疆",
          "value": "45"
        },
        {
          "date": "2020-02-08",
          "name": "台湾",
          "value": "16"
        },
        {
          "date": "2020-02-08",
          "name": "香港",
          "value": "25"
        },
        {
          "date": "2020-02-08",
          "name": "澳门",
          "value": "9"
        }
      ],
      [{
        "date": "2020-02-09",
        "name": "北京",
        "value": "291"
      },
        {
          "date": "2020-02-09",
          "name": "天津",
          "value": "86"
        },
        {
          "date": "2020-02-09",
          "name": "河北",
          "value": "181"
        },
        {
          "date": "2020-02-09",
          "name": "山西",
          "value": "94"
        },
        {
          "date": "2020-02-09",
          "name": "内蒙古",
          "value": "53"
        },
        {
          "date": "2020-02-09",
          "name": "辽宁",
          "value": "96"
        },
        {
          "date": "2020-02-09",
          "name": "吉林",
          "value": "67"
        },
        {
          "date": "2020-02-09",
          "name": "黑龙江",
          "value": "309"
        },
        {
          "date": "2020-02-09",
          "name": "上海",
          "value": "250"
        },
        {
          "date": "2020-02-09",
          "name": "江苏",
          "value": "420"
        },
        {
          "date": "2020-02-09",
          "name": "浙江",
          "value": "892"
        },
        {
          "date": "2020-02-09",
          "name": "安徽",
          "value": "754"
        },
        {
          "date": "2020-02-09",
          "name": "福建",
          "value": "226"
        },
        {
          "date": "2020-02-09",
          "name": "江西",
          "value": "669"
        },
        {
          "date": "2020-02-09",
          "name": "山东",
          "value": "395"
        },
        {
          "date": "2020-02-09",
          "name": "河南",
          "value": "898"
        },
        {
          "date": "2020-02-09",
          "name": "湖北",
          "value": "26965"
        },
        {
          "date": "2020-02-09",
          "name": "湖南",
          "value": "692"
        },
        {
          "date": "2020-02-09",
          "name": "广东",
          "value": "1007"
        },
        {
          "date": "2020-02-09",
          "name": "广西",
          "value": "191"
        },
        {
          "date": "2020-02-09",
          "name": "海南",
          "value": "114"
        },
        {
          "date": "2020-02-09",
          "name": "重庆",
          "value": "415"
        },
        {
          "date": "2020-02-09",
          "name": "四川",
          "value": "328"
        },
        {
          "date": "2020-02-09",
          "name": "贵州",
          "value": "101"
        },
        {
          "date": "2020-02-09",
          "name": "云南",
          "value": "123"
        },
        {
          "date": "2020-02-09",
          "name": "西藏",
          "value": "1"
        },
        {
          "date": "2020-02-09",
          "name": "陕西",
          "value": "188"
        },
        {
          "date": "2020-02-09",
          "name": "甘肃",
          "value": "65"
        },
        {
          "date": "2020-02-09",
          "name": "青海",
          "value": "15"
        },
        {
          "date": "2020-02-09",
          "name": "宁夏",
          "value": "36"
        },
        {
          "date": "2020-02-09",
          "name": "新疆",
          "value": "49"
        },
        {
          "date": "2020-02-09",
          "name": "台湾",
          "value": "17"
        },
        {
          "date": "2020-02-09",
          "name": "香港",
          "value": "35"
        },
        {
          "date": "2020-02-09",
          "name": "澳门",
          "value": "9"
        }
      ],
      [{
        "date": "2020-02-10",
        "name": "北京",
        "value": "291"
      },
        {
          "date": "2020-02-10",
          "name": "天津",
          "value": "85"
        },
        {
          "date": "2020-02-10",
          "name": "河北",
          "value": "196"
        },
        {
          "date": "2020-02-10",
          "name": "山西",
          "value": "96"
        },
        {
          "date": "2020-02-10",
          "name": "内蒙古",
          "value": "53"
        },
        {
          "date": "2020-02-10",
          "name": "辽宁",
          "value": "91"
        },
        {
          "date": "2020-02-10",
          "name": "吉林",
          "value": "67"
        },
        {
          "date": "2020-02-10",
          "name": "黑龙江",
          "value": "325"
        },
        {
          "date": "2020-02-10",
          "name": "上海",
          "value": "253"
        },
        {
          "date": "2020-02-10",
          "name": "江苏",
          "value": "431"
        },
        {
          "date": "2020-02-10",
          "name": "浙江",
          "value": "867"
        },
        {
          "date": "2020-02-10",
          "name": "安徽",
          "value": "768"
        },
        {
          "date": "2020-02-10",
          "name": "福建",
          "value": "228"
        },
        {
          "date": "2020-02-10",
          "name": "江西",
          "value": "676"
        },
        {
          "date": "2020-02-10",
          "name": "山东",
          "value": "414"
        },
        {
          "date": "2020-02-10",
          "name": "河南",
          "value": "900"
        },
        {
          "date": "2020-02-10",
          "name": "湖北",
          "value": "28532"
        },
        {
          "date": "2020-02-10",
          "name": "湖南",
          "value": "698"
        },
        {
          "date": "2020-02-10",
          "name": "广东",
          "value": "995"
        },
        {
          "date": "2020-02-10",
          "name": "广西",
          "value": "184"
        },
        {
          "date": "2020-02-10",
          "name": "海南",
          "value": "120"
        },
        {
          "date": "2020-02-10",
          "name": "重庆",
          "value": "418"
        },
        {
          "date": "2020-02-10",
          "name": "四川",
          "value": "334"
        },
        {
          "date": "2020-02-10",
          "name": "贵州",
          "value": "107"
        },
        {
          "date": "2020-02-10",
          "name": "云南",
          "value": "130"
        },
        {
          "date": "2020-02-10",
          "name": "西藏",
          "value": "1"
        },
        {
          "date": "2020-02-10",
          "name": "陕西",
          "value": "187"
        },
        {
          "date": "2020-02-10",
          "name": "甘肃",
          "value": "63"
        },
        {
          "date": "2020-02-10",
          "name": "青海",
          "value": "15"
        },
        {
          "date": "2020-02-10",
          "name": "宁夏",
          "value": "39"
        },
        {
          "date": "2020-02-10",
          "name": "新疆",
          "value": "55"
        },
        {
          "date": "2020-02-10",
          "name": "台湾",
          "value": "17"
        },
        {
          "date": "2020-02-10",
          "name": "香港",
          "value": "41"
        },
        {
          "date": "2020-02-10",
          "name": "澳门",
          "value": "9"
        }
      ],
      [{
        "date": "2020-02-11",
        "name": "北京",
        "value": "293"
      },
        {
          "date": "2020-02-11",
          "name": "天津",
          "value": "94"
        },
        {
          "date": "2020-02-11",
          "name": "河北",
          "value": "201"
        },
        {
          "date": "2020-02-11",
          "name": "山西",
          "value": "94"
        },
        {
          "date": "2020-02-11",
          "name": "内蒙古",
          "value": "55"
        },
        {
          "date": "2020-02-11",
          "name": "辽宁",
          "value": "97"
        },
        {
          "date": "2020-02-11",
          "name": "吉林",
          "value": "64"
        },
        {
          "date": "2020-02-11",
          "name": "黑龙江",
          "value": "342"
        },
        {
          "date": "2020-02-11",
          "name": "上海",
          "value": "252"
        },
        {
          "date": "2020-02-11",
          "name": "江苏",
          "value": "449"
        },
        {
          "date": "2020-02-11",
          "name": "浙江",
          "value": "852"
        },
        {
          "date": "2020-02-11",
          "name": "安徽",
          "value": "776"
        },
        {
          "date": "2020-02-11",
          "name": "福建",
          "value": "226"
        },
        {
          "date": "2020-02-11",
          "name": "江西",
          "value": "691"
        },
        {
          "date": "2020-02-11",
          "name": "山东",
          "value": "416"
        },
        {
          "date": "2020-02-11",
          "name": "河南",
          "value": "896"
        },
        {
          "date": "2020-02-11",
          "name": "湖北",
          "value": "29659"
        },
        {
          "date": "2020-02-11",
          "name": "湖南",
          "value": "681"
        },
        {
          "date": "2020-02-11",
          "name": "广东",
          "value": "977"
        },
        {
          "date": "2020-02-11",
          "name": "广西",
          "value": "190"
        },
        {
          "date": "2020-02-11",
          "name": "海南",
          "value": "122"
        },
        {
          "date": "2020-02-11",
          "name": "重庆",
          "value": "423"
        },
        {
          "date": "2020-02-11",
          "name": "四川",
          "value": "350"
        },
        {
          "date": "2020-02-11",
          "name": "贵州",
          "value": "113"
        },
        {
          "date": "2020-02-11",
          "name": "云南",
          "value": "134"
        },
        {
          "date": "2020-02-11",
          "name": "西藏",
          "value": "1"
        },
        {
          "date": "2020-02-11",
          "name": "陕西",
          "value": "188"
        },
        {
          "date": "2020-02-11",
          "name": "甘肃",
          "value": "60"
        },
        {
          "date": "2020-02-11",
          "name": "青海",
          "value": "13"
        },
        {
          "date": "2020-02-11",
          "name": "宁夏",
          "value": "36"
        },
        {
          "date": "2020-02-11",
          "name": "新疆",
          "value": "56"
        },
        {
          "date": "2020-02-11",
          "name": "台湾",
          "value": "17"
        },
        {
          "date": "2020-02-11",
          "name": "香港",
          "value": "48"
        },
        {
          "date": "2020-02-11",
          "name": "澳门",
          "value": "9"
        }
      ],
      [{
        "date": "2020-02-12",
        "name": "北京",
        "value": "295"
      },
        {
          "date": "2020-02-12",
          "name": "天津",
          "value": "99"
        },
        {
          "date": "2020-02-12",
          "name": "河北",
          "value": "208"
        },
        {
          "date": "2020-02-12",
          "name": "山西",
          "value": "93"
        },
        {
          "date": "2020-02-12",
          "name": "内蒙古",
          "value": "55"
        },
        {
          "date": "2020-02-12",
          "name": "辽宁",
          "value": "94"
        },
        {
          "date": "2020-02-12",
          "name": "吉林",
          "value": "61"
        },
        {
          "date": "2020-02-12",
          "name": "黑龙江",
          "value": "355"
        },
        {
          "date": "2020-02-12",
          "name": "上海",
          "value": "255"
        },
        {
          "date": "2020-02-12",
          "name": "江苏",
          "value": "439"
        },
        {
          "date": "2020-02-12",
          "name": "浙江",
          "value": "818"
        },
        {
          "date": "2020-02-12",
          "name": "安徽",
          "value": "777"
        },
        {
          "date": "2020-02-12",
          "name": "福建",
          "value": "225"
        },
        {
          "date": "2020-02-12",
          "name": "江西",
          "value": "701"
        },
        {
          "date": "2020-02-12",
          "name": "山东",
          "value": "406"
        },
        {
          "date": "2020-02-12",
          "name": "河南",
          "value": "901"
        },
        {
          "date": "2020-02-12",
          "name": "湖北",
          "value": "42789"
        },
        {
          "date": "2020-02-12",
          "name": "湖南",
          "value": "654"
        },
        {
          "date": "2020-02-12",
          "name": "广东",
          "value": "955"
        },
        {
          "date": "2020-02-12",
          "name": "广西",
          "value": "187"
        },
        {
          "date": "2020-02-12",
          "name": "海南",
          "value": "126"
        },
        {
          "date": "2020-02-12",
          "name": "重庆",
          "value": "413"
        },
        {
          "date": "2020-02-12",
          "name": "四川",
          "value": "357"
        },
        {
          "date": "2020-02-12",
          "name": "贵州",
          "value": "114"
        },
        {
          "date": "2020-02-12",
          "name": "云南",
          "value": "132"
        },
        {
          "date": "2020-02-12",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-02-12",
          "name": "陕西",
          "value": "189"
        },
        {
          "date": "2020-02-12",
          "name": "甘肃",
          "value": "54"
        },
        {
          "date": "2020-02-12",
          "name": "青海",
          "value": "9"
        },
        {
          "date": "2020-02-12",
          "name": "宁夏",
          "value": "40"
        },
        {
          "date": "2020-02-12",
          "name": "新疆",
          "value": "59"
        },
        {
          "date": "2020-02-12",
          "name": "台湾",
          "value": "17"
        },
        {
          "date": "2020-02-12",
          "name": "香港",
          "value": "48"
        },
        {
          "date": "2020-02-12",
          "name": "澳门",
          "value": "8"
        }
      ],
      [{
        "date": "2020-02-13",
        "name": "北京",
        "value": "290"
      },
        {
          "date": "2020-02-13",
          "name": "天津",
          "value": "95"
        },
        {
          "date": "2020-02-13",
          "name": "河北",
          "value": "211"
        },
        {
          "date": "2020-02-13",
          "name": "山西",
          "value": "90"
        },
        {
          "date": "2020-02-13",
          "name": "内蒙古",
          "value": "59"
        },
        {
          "date": "2020-02-13",
          "name": "辽宁",
          "value": "93"
        },
        {
          "date": "2020-02-13",
          "name": "吉林",
          "value": "60"
        },
        {
          "date": "2020-02-13",
          "name": "黑龙江",
          "value": "370"
        },
        {
          "date": "2020-02-13",
          "name": "上海",
          "value": "255"
        },
        {
          "date": "2020-02-13",
          "name": "江苏",
          "value": "456"
        },
        {
          "date": "2020-02-13",
          "name": "浙江",
          "value": "788"
        },
        {
          "date": "2020-02-13",
          "name": "安徽",
          "value": "762"
        },
        {
          "date": "2020-02-13",
          "name": "福建",
          "value": "222"
        },
        {
          "date": "2020-02-13",
          "name": "江西",
          "value": "712"
        },
        {
          "date": "2020-02-13",
          "name": "山东",
          "value": "406"
        },
        {
          "date": "2020-02-13",
          "name": "河南",
          "value": "860"
        },
        {
          "date": "2020-02-13",
          "name": "湖北",
          "value": "46806"
        },
        {
          "date": "2020-02-13",
          "name": "湖南",
          "value": "634"
        },
        {
          "date": "2020-02-13",
          "name": "广东",
          "value": "927"
        },
        {
          "date": "2020-02-13",
          "name": "广西",
          "value": "189"
        },
        {
          "date": "2020-02-13",
          "name": "海南",
          "value": "123"
        },
        {
          "date": "2020-02-13",
          "name": "重庆",
          "value": "397"
        },
        {
          "date": "2020-02-13",
          "name": "四川",
          "value": "357"
        },
        {
          "date": "2020-02-13",
          "name": "贵州",
          "value": "111"
        },
        {
          "date": "2020-02-13",
          "name": "云南",
          "value": "135"
        },
        {
          "date": "2020-02-13",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-02-13",
          "name": "陕西",
          "value": "185"
        },
        {
          "date": "2020-02-13",
          "name": "甘肃",
          "value": "49"
        },
        {
          "date": "2020-02-13",
          "name": "青海",
          "value": "7"
        },
        {
          "date": "2020-02-13",
          "name": "宁夏",
          "value": "43"
        },
        {
          "date": "2020-02-13",
          "name": "新疆",
          "value": "58"
        },
        {
          "date": "2020-02-13",
          "name": "台湾",
          "value": "17"
        },
        {
          "date": "2020-02-13",
          "name": "香港",
          "value": "51"
        },
        {
          "date": "2020-02-13",
          "name": "澳门",
          "value": "7"
        }
      ],
      [{
        "date": "2020-02-14",
        "name": "北京",
        "value": "274"
      },
        {
          "date": "2020-02-14",
          "name": "天津",
          "value": "85"
        },
        {
          "date": "2020-02-14",
          "name": "河北",
          "value": "202"
        },
        {
          "date": "2020-02-14",
          "name": "山西",
          "value": "89"
        },
        {
          "date": "2020-02-14",
          "name": "内蒙古",
          "value": "62"
        },
        {
          "date": "2020-02-14",
          "name": "辽宁",
          "value": "89"
        },
        {
          "date": "2020-02-14",
          "name": "吉林",
          "value": "62"
        },
        {
          "date": "2020-02-14",
          "name": "黑龙江",
          "value": "366"
        },
        {
          "date": "2020-02-14",
          "name": "上海",
          "value": "235"
        },
        {
          "date": "2020-02-14",
          "name": "江苏",
          "value": "444"
        },
        {
          "date": "2020-02-14",
          "name": "浙江",
          "value": "753"
        },
        {
          "date": "2020-02-14",
          "name": "安徽",
          "value": "746"
        },
        {
          "date": "2020-02-14",
          "name": "福建",
          "value": "219"
        },
        {
          "date": "2020-02-14",
          "name": "江西",
          "value": "702"
        },
        {
          "date": "2020-02-14",
          "name": "山东",
          "value": "389"
        },
        {
          "date": "2020-02-14",
          "name": "河南",
          "value": "843"
        },
        {
          "date": "2020-02-14",
          "name": "湖北",
          "value": "48175"
        },
        {
          "date": "2020-02-14",
          "name": "湖南",
          "value": "610"
        },
        {
          "date": "2020-02-14",
          "name": "广东",
          "value": "906"
        },
        {
          "date": "2020-02-14",
          "name": "广西",
          "value": "193"
        },
        {
          "date": "2020-02-14",
          "name": "海南",
          "value": "120"
        },
        {
          "date": "2020-02-14",
          "name": "重庆",
          "value": "380"
        },
        {
          "date": "2020-02-14",
          "name": "四川",
          "value": "354"
        },
        {
          "date": "2020-02-14",
          "name": "贵州",
          "value": "109"
        },
        {
          "date": "2020-02-14",
          "name": "云南",
          "value": "133"
        },
        {
          "date": "2020-02-14",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-02-14",
          "name": "陕西",
          "value": "181"
        },
        {
          "date": "2020-02-14",
          "name": "甘肃",
          "value": "44"
        },
        {
          "date": "2020-02-14",
          "name": "青海",
          "value": "7"
        },
        {
          "date": "2020-02-14",
          "name": "宁夏",
          "value": "43"
        },
        {
          "date": "2020-02-14",
          "name": "新疆",
          "value": "63"
        },
        {
          "date": "2020-02-14",
          "name": "台湾",
          "value": "17"
        },
        {
          "date": "2020-02-14",
          "name": "香港",
          "value": "54"
        },
        {
          "date": "2020-02-14",
          "name": "澳门",
          "value": "7"
        }
      ],
      [{
        "date": "2020-02-15",
        "name": "北京",
        "value": "271"
      },
        {
          "date": "2020-02-15",
          "name": "天津",
          "value": "82"
        },
        {
          "date": "2020-02-15",
          "name": "河北",
          "value": "197"
        },
        {
          "date": "2020-02-15",
          "name": "山西",
          "value": "82"
        },
        {
          "date": "2020-02-15",
          "name": "内蒙古",
          "value": "63"
        },
        {
          "date": "2020-02-15",
          "name": "辽宁",
          "value": "87"
        },
        {
          "date": "2020-02-15",
          "name": "吉林",
          "value": "60"
        },
        {
          "date": "2020-02-15",
          "name": "黑龙江",
          "value": "364"
        },
        {
          "date": "2020-02-15",
          "name": "上海",
          "value": "203"
        },
        {
          "date": "2020-02-15",
          "name": "江苏",
          "value": "427"
        },
        {
          "date": "2020-02-15",
          "name": "浙江",
          "value": "730"
        },
        {
          "date": "2020-02-15",
          "name": "安徽",
          "value": "724"
        },
        {
          "date": "2020-02-15",
          "name": "福建",
          "value": "210"
        },
        {
          "date": "2020-02-15",
          "name": "江西",
          "value": "685"
        },
        {
          "date": "2020-02-15",
          "name": "山东",
          "value": "371"
        },
        {
          "date": "2020-02-15",
          "name": "河南",
          "value": "821"
        },
        {
          "date": "2020-02-15",
          "name": "湖北",
          "value": "49030"
        },
        {
          "date": "2020-02-15",
          "name": "湖南",
          "value": "571"
        },
        {
          "date": "2020-02-15",
          "name": "广东",
          "value": "878"
        },
        {
          "date": "2020-02-15",
          "name": "广西",
          "value": "189"
        },
        {
          "date": "2020-02-15",
          "name": "海南",
          "value": "119"
        },
        {
          "date": "2020-02-15",
          "name": "重庆",
          "value": "355"
        },
        {
          "date": "2020-02-15",
          "name": "四川",
          "value": "351"
        },
        {
          "date": "2020-02-15",
          "name": "贵州",
          "value": "106"
        },
        {
          "date": "2020-02-15",
          "name": "云南",
          "value": "127"
        },
        {
          "date": "2020-02-15",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-02-15",
          "name": "陕西",
          "value": "179"
        },
        {
          "date": "2020-02-15",
          "name": "甘肃",
          "value": "39"
        },
        {
          "date": "2020-02-15",
          "name": "青海",
          "value": "5"
        },
        {
          "date": "2020-02-15",
          "name": "宁夏",
          "value": "37"
        },
        {
          "date": "2020-02-15",
          "name": "新疆",
          "value": "59"
        },
        {
          "date": "2020-02-15",
          "name": "台湾",
          "value": "16"
        },
        {
          "date": "2020-02-15",
          "name": "香港",
          "value": "54"
        },
        {
          "date": "2020-02-15",
          "name": "澳门",
          "value": "7"
        }
      ],
      [{
        "date": "2020-02-16",
        "name": "北京",
        "value": "263"
      },
        {
          "date": "2020-02-16",
          "name": "天津",
          "value": "76"
        },
        {
          "date": "2020-02-16",
          "name": "河北",
          "value": "189"
        },
        {
          "date": "2020-02-16",
          "name": "山西",
          "value": "79"
        },
        {
          "date": "2020-02-16",
          "name": "内蒙古",
          "value": "64"
        },
        {
          "date": "2020-02-16",
          "name": "辽宁",
          "value": "79"
        },
        {
          "date": "2020-02-16",
          "name": "吉林",
          "value": "58"
        },
        {
          "date": "2020-02-16",
          "name": "黑龙江",
          "value": "366"
        },
        {
          "date": "2020-02-16",
          "name": "上海",
          "value": "190"
        },
        {
          "date": "2020-02-16",
          "name": "江苏",
          "value": "400"
        },
        {
          "date": "2020-02-16",
          "name": "浙江",
          "value": "701"
        },
        {
          "date": "2020-02-16",
          "name": "安徽",
          "value": "701"
        },
        {
          "date": "2020-02-16",
          "name": "福建",
          "value": "206"
        },
        {
          "date": "2020-02-16",
          "name": "江西",
          "value": "654"
        },
        {
          "date": "2020-02-16",
          "name": "山东",
          "value": "364"
        },
        {
          "date": "2020-02-16",
          "name": "河南",
          "value": "792"
        },
        {
          "date": "2020-02-16",
          "name": "湖北",
          "value": "49847"
        },
        {
          "date": "2020-02-16",
          "name": "湖南",
          "value": "536"
        },
        {
          "date": "2020-02-16",
          "name": "广东",
          "value": "845"
        },
        {
          "date": "2020-02-16",
          "name": "广西",
          "value": "185"
        },
        {
          "date": "2020-02-16",
          "name": "海南",
          "value": "106"
        },
        {
          "date": "2020-02-16",
          "name": "重庆",
          "value": "339"
        },
        {
          "date": "2020-02-16",
          "name": "四川",
          "value": "356"
        },
        {
          "date": "2020-02-16",
          "name": "贵州",
          "value": "98"
        },
        {
          "date": "2020-02-16",
          "name": "云南",
          "value": "129"
        },
        {
          "date": "2020-02-16",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-02-16",
          "name": "陕西",
          "value": "172"
        },
        {
          "date": "2020-02-16",
          "name": "甘肃",
          "value": "34"
        },
        {
          "date": "2020-02-16",
          "name": "青海",
          "value": "5"
        },
        {
          "date": "2020-02-16",
          "name": "宁夏",
          "value": "37"
        },
        {
          "date": "2020-02-16",
          "name": "新疆",
          "value": "62"
        },
        {
          "date": "2020-02-16",
          "name": "台湾",
          "value": "17"
        },
        {
          "date": "2020-02-16",
          "name": "香港",
          "value": "54"
        },
        {
          "date": "2020-02-16",
          "name": "澳门",
          "value": "5"
        }
      ],
      [{
        "date": "2020-02-17",
        "name": "北京",
        "value": "261"
      },
        {
          "date": "2020-02-17",
          "name": "天津",
          "value": "76"
        },
        {
          "date": "2020-02-17",
          "name": "河北",
          "value": "175"
        },
        {
          "date": "2020-02-17",
          "name": "山西",
          "value": "77"
        },
        {
          "date": "2020-02-17",
          "name": "内蒙古",
          "value": "65"
        },
        {
          "date": "2020-02-17",
          "name": "辽宁",
          "value": "77"
        },
        {
          "date": "2020-02-17",
          "name": "吉林",
          "value": "54"
        },
        {
          "date": "2020-02-17",
          "name": "黑龙江",
          "value": "368"
        },
        {
          "date": "2020-02-17",
          "name": "上海",
          "value": "171"
        },
        {
          "date": "2020-02-17",
          "name": "江苏",
          "value": "366"
        },
        {
          "date": "2020-02-17",
          "name": "浙江",
          "value": "658"
        },
        {
          "date": "2020-02-17",
          "name": "安徽",
          "value": "683"
        },
        {
          "date": "2020-02-17",
          "name": "福建",
          "value": "201"
        },
        {
          "date": "2020-02-17",
          "name": "江西",
          "value": "622"
        },
        {
          "date": "2020-02-17",
          "name": "山东",
          "value": "348"
        },
        {
          "date": "2020-02-17",
          "name": "河南",
          "value": "733"
        },
        {
          "date": "2020-02-17",
          "name": "湖北",
          "value": "50338"
        },
        {
          "date": "2020-02-17",
          "name": "湖南",
          "value": "502"
        },
        {
          "date": "2020-02-17",
          "name": "广东",
          "value": "794"
        },
        {
          "date": "2020-02-17",
          "name": "广西",
          "value": "182"
        },
        {
          "date": "2020-02-17",
          "name": "海南",
          "value": "100"
        },
        {
          "date": "2020-02-17",
          "name": "重庆",
          "value": "323"
        },
        {
          "date": "2020-02-17",
          "name": "四川",
          "value": "342"
        },
        {
          "date": "2020-02-17",
          "name": "贵州",
          "value": "79"
        },
        {
          "date": "2020-02-17",
          "name": "云南",
          "value": "125"
        },
        {
          "date": "2020-02-17",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-02-17",
          "name": "陕西",
          "value": "161"
        },
        {
          "date": "2020-02-17",
          "name": "甘肃",
          "value": "31"
        },
        {
          "date": "2020-02-17",
          "name": "青海",
          "value": "5"
        },
        {
          "date": "2020-02-17",
          "name": "宁夏",
          "value": "35"
        },
        {
          "date": "2020-02-17",
          "name": "新疆",
          "value": "63"
        },
        {
          "date": "2020-02-17",
          "name": "台湾",
          "value": "19"
        },
        {
          "date": "2020-02-17",
          "name": "香港",
          "value": "57"
        },
        {
          "date": "2020-02-17",
          "name": "澳门",
          "value": "5"
        }
      ],
      [{
        "date": "2020-02-18",
        "name": "北京",
        "value": "244"
      },
        {
          "date": "2020-02-18",
          "name": "天津",
          "value": "77"
        },
        {
          "date": "2020-02-18",
          "name": "河北",
          "value": "166"
        },
        {
          "date": "2020-02-18",
          "name": "山西",
          "value": "70"
        },
        {
          "date": "2020-02-18",
          "name": "内蒙古",
          "value": "66"
        },
        {
          "date": "2020-02-18",
          "name": "辽宁",
          "value": "65"
        },
        {
          "date": "2020-02-18",
          "name": "吉林",
          "value": "53"
        },
        {
          "date": "2020-02-18",
          "name": "黑龙江",
          "value": "350"
        },
        {
          "date": "2020-02-18",
          "name": "上海",
          "value": "155"
        },
        {
          "date": "2020-02-18",
          "name": "江苏",
          "value": "335"
        },
        {
          "date": "2020-02-18",
          "name": "浙江",
          "value": "629"
        },
        {
          "date": "2020-02-18",
          "name": "安徽",
          "value": "619"
        },
        {
          "date": "2020-02-18",
          "name": "福建",
          "value": "197"
        },
        {
          "date": "2020-02-18",
          "name": "江西",
          "value": "570"
        },
        {
          "date": "2020-02-18",
          "name": "山东",
          "value": "326"
        },
        {
          "date": "2020-02-18",
          "name": "河南",
          "value": "690"
        },
        {
          "date": "2020-02-18",
          "name": "湖北",
          "value": "50633"
        },
        {
          "date": "2020-02-18",
          "name": "湖南",
          "value": "462"
        },
        {
          "date": "2020-02-18",
          "name": "广东",
          "value": "755"
        },
        {
          "date": "2020-02-18",
          "name": "广西",
          "value": "166"
        },
        {
          "date": "2020-02-18",
          "name": "海南",
          "value": "80"
        },
        {
          "date": "2020-02-18",
          "name": "重庆",
          "value": "296"
        },
        {
          "date": "2020-02-18",
          "name": "四川",
          "value": "334"
        },
        {
          "date": "2020-02-18",
          "name": "贵州",
          "value": "75"
        },
        {
          "date": "2020-02-18",
          "name": "云南",
          "value": "115"
        },
        {
          "date": "2020-02-18",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-02-18",
          "name": "陕西",
          "value": "151"
        },
        {
          "date": "2020-02-18",
          "name": "甘肃",
          "value": "27"
        },
        {
          "date": "2020-02-18",
          "name": "青海",
          "value": "3"
        },
        {
          "date": "2020-02-18",
          "name": "宁夏",
          "value": "29"
        },
        {
          "date": "2020-02-18",
          "name": "新疆",
          "value": "61"
        },
        {
          "date": "2020-02-18",
          "name": "台湾",
          "value": "19"
        },
        {
          "date": "2020-02-18",
          "name": "香港",
          "value": "57"
        },
        {
          "date": "2020-02-18",
          "name": "澳门",
          "value": "5"
        }
      ],
      [{
        "date": "2020-02-19",
        "name": "北京",
        "value": "238"
      },
        {
          "date": "2020-02-19",
          "name": "天津",
          "value": "73"
        },
        {
          "date": "2020-02-19",
          "name": "河北",
          "value": "150"
        },
        {
          "date": "2020-02-19",
          "name": "山西",
          "value": "63"
        },
        {
          "date": "2020-02-19",
          "name": "内蒙古",
          "value": "64"
        },
        {
          "date": "2020-02-19",
          "name": "辽宁",
          "value": "62"
        },
        {
          "date": "2020-02-19",
          "name": "吉林",
          "value": "50"
        },
        {
          "date": "2020-02-19",
          "name": "黑龙江",
          "value": "341"
        },
        {
          "date": "2020-02-19",
          "name": "上海",
          "value": "145"
        },
        {
          "date": "2020-02-19",
          "name": "江苏",
          "value": "306"
        },
        {
          "date": "2020-02-19",
          "name": "浙江",
          "value": "566"
        },
        {
          "date": "2020-02-19",
          "name": "安徽",
          "value": "557"
        },
        {
          "date": "2020-02-19",
          "name": "福建",
          "value": "180"
        },
        {
          "date": "2020-02-19",
          "name": "江西",
          "value": "501"
        },
        {
          "date": "2020-02-19",
          "name": "山东",
          "value": "304"
        },
        {
          "date": "2020-02-19",
          "name": "河南",
          "value": "632"
        },
        {
          "date": "2020-02-19",
          "name": "湖北",
          "value": "50091"
        },
        {
          "date": "2020-02-19",
          "name": "湖南",
          "value": "428"
        },
        {
          "date": "2020-02-19",
          "name": "广东",
          "value": "708"
        },
        {
          "date": "2020-02-19",
          "name": "广西",
          "value": "156"
        },
        {
          "date": "2020-02-19",
          "name": "海南",
          "value": "80"
        },
        {
          "date": "2020-02-19",
          "name": "重庆",
          "value": "281"
        },
        {
          "date": "2020-02-19",
          "name": "四川",
          "value": "319"
        },
        {
          "date": "2020-02-19",
          "name": "贵州",
          "value": "73"
        },
        {
          "date": "2020-02-19",
          "name": "云南",
          "value": "111"
        },
        {
          "date": "2020-02-19",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-02-19",
          "name": "陕西",
          "value": "153"
        },
        {
          "date": "2020-02-19",
          "name": "甘肃",
          "value": "24"
        },
        {
          "date": "2020-02-19",
          "name": "青海",
          "value": "2"
        },
        {
          "date": "2020-02-19",
          "name": "宁夏",
          "value": "29"
        },
        {
          "date": "2020-02-19",
          "name": "新疆",
          "value": "55"
        },
        {
          "date": "2020-02-19",
          "name": "台湾",
          "value": "21"
        },
        {
          "date": "2020-02-19",
          "name": "香港",
          "value": "58"
        },
        {
          "date": "2020-02-19",
          "name": "澳门",
          "value": "4"
        }
      ],
      [{
        "date": "2020-02-20",
        "name": "北京",
        "value": "223"
      },
        {
          "date": "2020-02-20",
          "name": "天津",
          "value": "69"
        },
        {
          "date": "2020-02-20",
          "name": "河北",
          "value": "133"
        },
        {
          "date": "2020-02-20",
          "name": "山西",
          "value": "56"
        },
        {
          "date": "2020-02-20",
          "name": "内蒙古",
          "value": "59"
        },
        {
          "date": "2020-02-20",
          "name": "辽宁",
          "value": "59"
        },
        {
          "date": "2020-02-20",
          "name": "吉林",
          "value": "46"
        },
        {
          "date": "2020-02-20",
          "name": "黑龙江",
          "value": "326"
        },
        {
          "date": "2020-02-20",
          "name": "上海",
          "value": "133"
        },
        {
          "date": "2020-02-20",
          "name": "江苏",
          "value": "279"
        },
        {
          "date": "2020-02-20",
          "name": "浙江",
          "value": "555"
        },
        {
          "date": "2020-02-20",
          "name": "安徽",
          "value": "482"
        },
        {
          "date": "2020-02-20",
          "name": "福建",
          "value": "158"
        },
        {
          "date": "2020-02-20",
          "name": "江西",
          "value": "444"
        },
        {
          "date": "2020-02-20",
          "name": "山东",
          "value": "474"
        },
        {
          "date": "2020-02-20",
          "name": "河南",
          "value": "531"
        },
        {
          "date": "2020-02-20",
          "name": "湖北",
          "value": "49156"
        },
        {
          "date": "2020-02-20",
          "name": "湖南",
          "value": "369"
        },
        {
          "date": "2020-02-20",
          "name": "广东",
          "value": "664"
        },
        {
          "date": "2020-02-20",
          "name": "广西",
          "value": "149"
        },
        {
          "date": "2020-02-20",
          "name": "海南",
          "value": "75"
        },
        {
          "date": "2020-02-20",
          "name": "重庆",
          "value": "262"
        },
        {
          "date": "2020-02-20",
          "name": "四川",
          "value": "300"
        },
        {
          "date": "2020-02-20",
          "name": "贵州",
          "value": "68"
        },
        {
          "date": "2020-02-20",
          "name": "云南",
          "value": "93"
        },
        {
          "date": "2020-02-20",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-02-20",
          "name": "陕西",
          "value": "134"
        },
        {
          "date": "2020-02-20",
          "name": "甘肃",
          "value": "18"
        },
        {
          "date": "2020-02-20",
          "name": "青海",
          "value": "2"
        },
        {
          "date": "2020-02-20",
          "name": "宁夏",
          "value": "27"
        },
        {
          "date": "2020-02-20",
          "name": "新疆",
          "value": "53"
        },
        {
          "date": "2020-02-20",
          "name": "台湾",
          "value": "21"
        },
        {
          "date": "2020-02-20",
          "name": "香港",
          "value": "61"
        },
        {
          "date": "2020-02-20",
          "name": "澳门",
          "value": "4"
        }
      ],
      [{
        "date": "2020-02-21",
        "name": "北京",
        "value": "217"
      },
        {
          "date": "2020-02-21",
          "name": "天津",
          "value": "68"
        },
        {
          "date": "2020-02-21",
          "name": "河北",
          "value": "119"
        },
        {
          "date": "2020-02-21",
          "name": "山西",
          "value": "54"
        },
        {
          "date": "2020-02-21",
          "name": "内蒙古",
          "value": "53"
        },
        {
          "date": "2020-02-21",
          "name": "辽宁",
          "value": "54"
        },
        {
          "date": "2020-02-21",
          "name": "吉林",
          "value": "44"
        },
        {
          "date": "2020-02-21",
          "name": "黑龙江",
          "value": "284"
        },
        {
          "date": "2020-02-21",
          "name": "上海",
          "value": "120"
        },
        {
          "date": "2020-02-21",
          "name": "江苏",
          "value": "244"
        },
        {
          "date": "2020-02-21",
          "name": "浙江",
          "value": "510"
        },
        {
          "date": "2020-02-21",
          "name": "安徽",
          "value": "417"
        },
        {
          "date": "2020-02-21",
          "name": "福建",
          "value": "142"
        },
        {
          "date": "2020-02-21",
          "name": "江西",
          "value": "389"
        },
        {
          "date": "2020-02-21",
          "name": "山东",
          "value": "453"
        },
        {
          "date": "2020-02-21",
          "name": "河南",
          "value": "449"
        },
        {
          "date": "2020-02-21",
          "name": "湖北",
          "value": "47647"
        },
        {
          "date": "2020-02-21",
          "name": "湖南",
          "value": "339"
        },
        {
          "date": "2020-02-21",
          "name": "广东",
          "value": "614"
        },
        {
          "date": "2020-02-21",
          "name": "广西",
          "value": "148"
        },
        {
          "date": "2020-02-21",
          "name": "海南",
          "value": "68"
        },
        {
          "date": "2020-02-21",
          "name": "重庆",
          "value": "250"
        },
        {
          "date": "2020-02-21",
          "name": "四川",
          "value": "281"
        },
        {
          "date": "2020-02-21",
          "name": "贵州",
          "value": "54"
        },
        {
          "date": "2020-02-21",
          "name": "云南",
          "value": "76"
        },
        {
          "date": "2020-02-21",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-02-21",
          "name": "陕西",
          "value": "127"
        },
        {
          "date": "2020-02-21",
          "name": "甘肃",
          "value": "13"
        },
        {
          "date": "2020-02-21",
          "name": "青海",
          "value": "0"
        },
        {
          "date": "2020-02-21",
          "name": "宁夏",
          "value": "23"
        },
        {
          "date": "2020-02-21",
          "name": "新疆",
          "value": "50"
        },
        {
          "date": "2020-02-21",
          "name": "台湾",
          "value": "23"
        },
        {
          "date": "2020-02-21",
          "name": "香港",
          "value": "60"
        },
        {
          "date": "2020-02-21",
          "name": "澳门",
          "value": "4"
        }
      ],
      [{
        "date": "2020-02-22",
        "name": "北京",
        "value": "206"
      },
        {
          "date": "2020-02-22",
          "name": "天津",
          "value": "67"
        },
        {
          "date": "2020-02-22",
          "name": "河北",
          "value": "101"
        },
        {
          "date": "2020-02-22",
          "name": "山西",
          "value": "51"
        },
        {
          "date": "2020-02-22",
          "name": "内蒙古",
          "value": "49"
        },
        {
          "date": "2020-02-22",
          "name": "辽宁",
          "value": "52"
        },
        {
          "date": "2020-02-22",
          "name": "吉林",
          "value": "38"
        },
        {
          "date": "2020-02-22",
          "name": "黑龙江",
          "value": "253"
        },
        {
          "date": "2020-02-22",
          "name": "上海",
          "value": "105"
        },
        {
          "date": "2020-02-22",
          "name": "江苏",
          "value": "220"
        },
        {
          "date": "2020-02-22",
          "name": "浙江",
          "value": "475"
        },
        {
          "date": "2020-02-22",
          "name": "安徽",
          "value": "363"
        },
        {
          "date": "2020-02-22",
          "name": "福建",
          "value": "127"
        },
        {
          "date": "2020-02-22",
          "name": "江西",
          "value": "322"
        },
        {
          "date": "2020-02-22",
          "name": "山东",
          "value": "439"
        },
        {
          "date": "2020-02-22",
          "name": "河南",
          "value": "391"
        },
        {
          "date": "2020-02-22",
          "name": "湖北",
          "value": "46244"
        },
        {
          "date": "2020-02-22",
          "name": "湖南",
          "value": "308"
        },
        {
          "date": "2020-02-22",
          "name": "广东",
          "value": "596"
        },
        {
          "date": "2020-02-22",
          "name": "广西",
          "value": "143"
        },
        {
          "date": "2020-02-22",
          "name": "海南",
          "value": "60"
        },
        {
          "date": "2020-02-22",
          "name": "重庆",
          "value": "239"
        },
        {
          "date": "2020-02-22",
          "name": "四川",
          "value": "267"
        },
        {
          "date": "2020-02-22",
          "name": "贵州",
          "value": "53"
        },
        {
          "date": "2020-02-22",
          "name": "云南",
          "value": "65"
        },
        {
          "date": "2020-02-22",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-02-22",
          "name": "陕西",
          "value": "104"
        },
        {
          "date": "2020-02-22",
          "name": "甘肃",
          "value": "13"
        },
        {
          "date": "2020-02-22",
          "name": "青海",
          "value": "0"
        },
        {
          "date": "2020-02-22",
          "name": "宁夏",
          "value": "23"
        },
        {
          "date": "2020-02-22",
          "name": "新疆",
          "value": "49"
        },
        {
          "date": "2020-02-22",
          "name": "台湾",
          "value": "23"
        },
        {
          "date": "2020-02-22",
          "name": "香港",
          "value": "56"
        },
        {
          "date": "2020-02-22",
          "name": "澳门",
          "value": "4"
        }
      ],
      [{
        "date": "2020-02-23",
        "name": "北京",
        "value": "197"
      },
        {
          "date": "2020-02-23",
          "name": "天津",
          "value": "51"
        },
        {
          "date": "2020-02-23",
          "name": "河北",
          "value": "84"
        },
        {
          "date": "2020-02-23",
          "name": "山西",
          "value": "44"
        },
        {
          "date": "2020-02-23",
          "name": "内蒙古",
          "value": "45"
        },
        {
          "date": "2020-02-23",
          "name": "辽宁",
          "value": "47"
        },
        {
          "date": "2020-02-23",
          "name": "吉林",
          "value": "38"
        },
        {
          "date": "2020-02-23",
          "name": "黑龙江",
          "value": "244"
        },
        {
          "date": "2020-02-23",
          "name": "上海",
          "value": "83"
        },
        {
          "date": "2020-02-23",
          "name": "江苏",
          "value": "204"
        },
        {
          "date": "2020-02-23",
          "name": "浙江",
          "value": "439"
        },
        {
          "date": "2020-02-23",
          "name": "安徽",
          "value": "335"
        },
        {
          "date": "2020-02-23",
          "name": "福建",
          "value": "118"
        },
        {
          "date": "2020-02-23",
          "name": "江西",
          "value": "288"
        },
        {
          "date": "2020-02-23",
          "name": "山东",
          "value": "426"
        },
        {
          "date": "2020-02-23",
          "name": "河南",
          "value": "322"
        },
        {
          "date": "2020-02-23",
          "name": "湖北",
          "value": "45054"
        },
        {
          "date": "2020-02-23",
          "name": "湖南",
          "value": "291"
        },
        {
          "date": "2020-02-23",
          "name": "广东",
          "value": "567"
        },
        {
          "date": "2020-02-23",
          "name": "广西",
          "value": "142"
        },
        {
          "date": "2020-02-23",
          "name": "海南",
          "value": "57"
        },
        {
          "date": "2020-02-23",
          "name": "重庆",
          "value": "234"
        },
        {
          "date": "2020-02-23",
          "name": "四川",
          "value": "261"
        },
        {
          "date": "2020-02-23",
          "name": "贵州",
          "value": "42"
        },
        {
          "date": "2020-02-23",
          "name": "云南",
          "value": "57"
        },
        {
          "date": "2020-02-23",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-02-23",
          "name": "陕西",
          "value": "91"
        },
        {
          "date": "2020-02-23",
          "name": "甘肃",
          "value": "11"
        },
        {
          "date": "2020-02-23",
          "name": "青海",
          "value": "0"
        },
        {
          "date": "2020-02-23",
          "name": "宁夏",
          "value": "14"
        },
        {
          "date": "2020-02-23",
          "name": "新疆",
          "value": "46"
        },
        {
          "date": "2020-02-23",
          "name": "台湾",
          "value": "22"
        },
        {
          "date": "2020-02-23",
          "name": "香港",
          "value": "60"
        },
        {
          "date": "2020-02-23",
          "name": "澳门",
          "value": "4"
        }
      ],
      [{
        "date": "2020-02-24",
        "name": "北京",
        "value": "181"
      },
        {
          "date": "2020-02-24",
          "name": "天津",
          "value": "45"
        },
        {
          "date": "2020-02-24",
          "name": "河北",
          "value": "64"
        },
        {
          "date": "2020-02-24",
          "name": "山西",
          "value": "39"
        },
        {
          "date": "2020-02-24",
          "name": "内蒙古",
          "value": "41"
        },
        {
          "date": "2020-02-24",
          "name": "辽宁",
          "value": "37"
        },
        {
          "date": "2020-02-24",
          "name": "吉林",
          "value": "32"
        },
        {
          "date": "2020-02-24",
          "name": "黑龙江",
          "value": "236"
        },
        {
          "date": "2020-02-24",
          "name": "上海",
          "value": "71"
        },
        {
          "date": "2020-02-24",
          "name": "江苏",
          "value": "173"
        },
        {
          "date": "2020-02-24",
          "name": "浙江",
          "value": "410"
        },
        {
          "date": "2020-02-24",
          "name": "安徽",
          "value": "291"
        },
        {
          "date": "2020-02-24",
          "name": "福建",
          "value": "105"
        },
        {
          "date": "2020-02-24",
          "name": "江西",
          "value": "251"
        },
        {
          "date": "2020-02-24",
          "name": "山东",
          "value": "406"
        },
        {
          "date": "2020-02-24",
          "name": "河南",
          "value": "263"
        },
        {
          "date": "2020-02-24",
          "name": "湖北",
          "value": "43369"
        },
        {
          "date": "2020-02-24",
          "name": "湖南",
          "value": "261"
        },
        {
          "date": "2020-02-24",
          "name": "广东",
          "value": "535"
        },
        {
          "date": "2020-02-24",
          "name": "广西",
          "value": "121"
        },
        {
          "date": "2020-02-24",
          "name": "海南",
          "value": "47"
        },
        {
          "date": "2020-02-24",
          "name": "重庆",
          "value": "221"
        },
        {
          "date": "2020-02-24",
          "name": "四川",
          "value": "248"
        },
        {
          "date": "2020-02-24",
          "name": "贵州",
          "value": "41"
        },
        {
          "date": "2020-02-24",
          "name": "云南",
          "value": "48"
        },
        {
          "date": "2020-02-24",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-02-24",
          "name": "陕西",
          "value": "69"
        },
        {
          "date": "2020-02-24",
          "name": "甘肃",
          "value": "9"
        },
        {
          "date": "2020-02-24",
          "name": "青海",
          "value": "0"
        },
        {
          "date": "2020-02-24",
          "name": "宁夏",
          "value": "13"
        },
        {
          "date": "2020-02-24",
          "name": "新疆",
          "value": "44"
        },
        {
          "date": "2020-02-24",
          "name": "台湾",
          "value": "24"
        },
        {
          "date": "2020-02-24",
          "name": "香港",
          "value": "61"
        },
        {
          "date": "2020-02-24",
          "name": "澳门",
          "value": "4"
        }
      ],
      [{
        "date": "2020-02-25",
        "name": "北京",
        "value": "161"
      },
        {
          "date": "2020-02-25",
          "name": "天津",
          "value": "41"
        },
        {
          "date": "2020-02-25",
          "name": "河北",
          "value": "58"
        },
        {
          "date": "2020-02-25",
          "name": "山西",
          "value": "35"
        },
        {
          "date": "2020-02-25",
          "name": "内蒙古",
          "value": "40"
        },
        {
          "date": "2020-02-25",
          "name": "辽宁",
          "value": "32"
        },
        {
          "date": "2020-02-25",
          "name": "吉林",
          "value": "29"
        },
        {
          "date": "2020-02-25",
          "name": "黑龙江",
          "value": "223"
        },
        {
          "date": "2020-02-25",
          "name": "上海",
          "value": "65"
        },
        {
          "date": "2020-02-25",
          "name": "江苏",
          "value": "168"
        },
        {
          "date": "2020-02-25",
          "name": "浙江",
          "value": "390"
        },
        {
          "date": "2020-02-25",
          "name": "安徽",
          "value": "256"
        },
        {
          "date": "2020-02-25",
          "name": "福建",
          "value": "88"
        },
        {
          "date": "2020-02-25",
          "name": "江西",
          "value": "214"
        },
        {
          "date": "2020-02-25",
          "name": "山东",
          "value": "393"
        },
        {
          "date": "2020-02-25",
          "name": "河南",
          "value": "229"
        },
        {
          "date": "2020-02-25",
          "name": "湖北",
          "value": "41660"
        },
        {
          "date": "2020-02-25",
          "name": "湖南",
          "value": "233"
        },
        {
          "date": "2020-02-25",
          "name": "广东",
          "value": "499"
        },
        {
          "date": "2020-02-25",
          "name": "广西",
          "value": "112"
        },
        {
          "date": "2020-02-25",
          "name": "海南",
          "value": "39"
        },
        {
          "date": "2020-02-25",
          "name": "重庆",
          "value": "198"
        },
        {
          "date": "2020-02-25",
          "name": "四川",
          "value": "236"
        },
        {
          "date": "2020-02-25",
          "name": "贵州",
          "value": "40"
        },
        {
          "date": "2020-02-25",
          "name": "云南",
          "value": "43"
        },
        {
          "date": "2020-02-25",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-02-25",
          "name": "陕西",
          "value": "58"
        },
        {
          "date": "2020-02-25",
          "name": "甘肃",
          "value": "9"
        },
        {
          "date": "2020-02-25",
          "name": "青海",
          "value": "0"
        },
        {
          "date": "2020-02-25",
          "name": "宁夏",
          "value": "10"
        },
        {
          "date": "2020-02-25",
          "name": "新疆",
          "value": "44"
        },
        {
          "date": "2020-02-25",
          "name": "台湾",
          "value": "25"
        },
        {
          "date": "2020-02-25",
          "name": "香港",
          "value": "65"
        },
        {
          "date": "2020-02-25",
          "name": "澳门",
          "value": "3"
        }
      ],
      [{
        "date": "2020-02-26",
        "name": "北京",
        "value": "157"
      },
        {
          "date": "2020-02-26",
          "name": "天津",
          "value": "36"
        },
        {
          "date": "2020-02-26",
          "name": "河北",
          "value": "50"
        },
        {
          "date": "2020-02-26",
          "name": "山西",
          "value": "29"
        },
        {
          "date": "2020-02-26",
          "name": "内蒙古",
          "value": "37"
        },
        {
          "date": "2020-02-26",
          "name": "辽宁",
          "value": "28"
        },
        {
          "date": "2020-02-26",
          "name": "吉林",
          "value": "27"
        },
        {
          "date": "2020-02-26",
          "name": "黑龙江",
          "value": "205"
        },
        {
          "date": "2020-02-26",
          "name": "上海",
          "value": "62"
        },
        {
          "date": "2020-02-26",
          "name": "江苏",
          "value": "137"
        },
        {
          "date": "2020-02-26",
          "name": "浙江",
          "value": "323"
        },
        {
          "date": "2020-02-26",
          "name": "安徽",
          "value": "219"
        },
        {
          "date": "2020-02-26",
          "name": "福建",
          "value": "70"
        },
        {
          "date": "2020-02-26",
          "name": "江西",
          "value": "179"
        },
        {
          "date": "2020-02-26",
          "name": "山东",
          "value": "369"
        },
        {
          "date": "2020-02-26",
          "name": "河南",
          "value": "190"
        },
        {
          "date": "2020-02-26",
          "name": "湖北",
          "value": "39755"
        },
        {
          "date": "2020-02-26",
          "name": "湖南",
          "value": "220"
        },
        {
          "date": "2020-02-26",
          "name": "广东",
          "value": "467"
        },
        {
          "date": "2020-02-26",
          "name": "广西",
          "value": "91"
        },
        {
          "date": "2020-02-26",
          "name": "海南",
          "value": "34"
        },
        {
          "date": "2020-02-26",
          "name": "重庆",
          "value": "186"
        },
        {
          "date": "2020-02-26",
          "name": "四川",
          "value": "221"
        },
        {
          "date": "2020-02-26",
          "name": "贵州",
          "value": "32"
        },
        {
          "date": "2020-02-26",
          "name": "云南",
          "value": "28"
        },
        {
          "date": "2020-02-26",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-02-26",
          "name": "陕西",
          "value": "50"
        },
        {
          "date": "2020-02-26",
          "name": "甘肃",
          "value": "8"
        },
        {
          "date": "2020-02-26",
          "name": "青海",
          "value": "0"
        },
        {
          "date": "2020-02-26",
          "name": "宁夏",
          "value": "7"
        },
        {
          "date": "2020-02-26",
          "name": "新疆",
          "value": "40"
        },
        {
          "date": "2020-02-26",
          "name": "台湾",
          "value": "26"
        },
        {
          "date": "2020-02-26",
          "name": "香港",
          "value": "65"
        },
        {
          "date": "2020-02-26",
          "name": "澳门",
          "value": "3"
        }
      ],
      [{
        "date": "2020-02-27",
        "name": "北京",
        "value": "146"
      },
        {
          "date": "2020-02-27",
          "name": "天津",
          "value": "31"
        },
        {
          "date": "2020-02-27",
          "name": "河北",
          "value": "38"
        },
        {
          "date": "2020-02-27",
          "name": "山西",
          "value": "26"
        },
        {
          "date": "2020-02-27",
          "name": "内蒙古",
          "value": "32"
        },
        {
          "date": "2020-02-27",
          "name": "辽宁",
          "value": "27"
        },
        {
          "date": "2020-02-27",
          "name": "吉林",
          "value": "24"
        },
        {
          "date": "2020-02-27",
          "name": "黑龙江",
          "value": "187"
        },
        {
          "date": "2020-02-27",
          "name": "上海",
          "value": "58"
        },
        {
          "date": "2020-02-27",
          "name": "江苏",
          "value": "125"
        },
        {
          "date": "2020-02-27",
          "name": "浙江",
          "value": "261"
        },
        {
          "date": "2020-02-27",
          "name": "安徽",
          "value": "170"
        },
        {
          "date": "2020-02-27",
          "name": "福建",
          "value": "63"
        },
        {
          "date": "2020-02-27",
          "name": "江西",
          "value": "144"
        },
        {
          "date": "2020-02-27",
          "name": "山东",
          "value": "360"
        },
        {
          "date": "2020-02-27",
          "name": "河南",
          "value": "149"
        },
        {
          "date": "2020-02-27",
          "name": "湖北",
          "value": "36829"
        },
        {
          "date": "2020-02-27",
          "name": "湖南",
          "value": "193"
        },
        {
          "date": "2020-02-27",
          "name": "广东",
          "value": "422"
        },
        {
          "date": "2020-02-27",
          "name": "广西",
          "value": "84"
        },
        {
          "date": "2020-02-27",
          "name": "海南",
          "value": "31"
        },
        {
          "date": "2020-02-27",
          "name": "重庆",
          "value": "169"
        },
        {
          "date": "2020-02-27",
          "name": "四川",
          "value": "209"
        },
        {
          "date": "2020-02-27",
          "name": "贵州",
          "value": "32"
        },
        {
          "date": "2020-02-27",
          "name": "云南",
          "value": "22"
        },
        {
          "date": "2020-02-27",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-02-27",
          "name": "陕西",
          "value": "47"
        },
        {
          "date": "2020-02-27",
          "name": "甘肃",
          "value": "7"
        },
        {
          "date": "2020-02-27",
          "name": "青海",
          "value": "0"
        },
        {
          "date": "2020-02-27",
          "name": "宁夏",
          "value": "4"
        },
        {
          "date": "2020-02-27",
          "name": "新疆",
          "value": "30"
        },
        {
          "date": "2020-02-27",
          "name": "台湾",
          "value": "25"
        },
        {
          "date": "2020-02-27",
          "name": "香港",
          "value": "65"
        },
        {
          "date": "2020-02-27",
          "name": "澳门",
          "value": "2"
        }
      ],
      [{
        "date": "2020-02-28",
        "name": "北京",
        "value": "132"
      },
        {
          "date": "2020-02-28",
          "name": "天津",
          "value": "28"
        },
        {
          "date": "2020-02-28",
          "name": "河北",
          "value": "35"
        },
        {
          "date": "2020-02-28",
          "name": "山西",
          "value": "21"
        },
        {
          "date": "2020-02-28",
          "name": "内蒙古",
          "value": "29"
        },
        {
          "date": "2020-02-28",
          "name": "辽宁",
          "value": "25"
        },
        {
          "date": "2020-02-28",
          "name": "吉林",
          "value": "19"
        },
        {
          "date": "2020-02-28",
          "name": "黑龙江",
          "value": "172"
        },
        {
          "date": "2020-02-28",
          "name": "上海",
          "value": "55"
        },
        {
          "date": "2020-02-28",
          "name": "江苏",
          "value": "112"
        },
        {
          "date": "2020-02-28",
          "name": "浙江",
          "value": "217"
        },
        {
          "date": "2020-02-28",
          "name": "安徽",
          "value": "142"
        },
        {
          "date": "2020-02-28",
          "name": "福建",
          "value": "54"
        },
        {
          "date": "2020-02-28",
          "name": "江西",
          "value": "123"
        },
        {
          "date": "2020-02-28",
          "name": "山东",
          "value": "339"
        },
        {
          "date": "2020-02-28",
          "name": "河南",
          "value": "90"
        },
        {
          "date": "2020-02-28",
          "name": "湖北",
          "value": "34715"
        },
        {
          "date": "2020-02-28",
          "name": "湖南",
          "value": "173"
        },
        {
          "date": "2020-02-28",
          "name": "广东",
          "value": "370"
        },
        {
          "date": "2020-02-28",
          "name": "广西",
          "value": "78"
        },
        {
          "date": "2020-02-28",
          "name": "海南",
          "value": "27"
        },
        {
          "date": "2020-02-28",
          "name": "重庆",
          "value": "148"
        },
        {
          "date": "2020-02-28",
          "name": "四川",
          "value": "185"
        },
        {
          "date": "2020-02-28",
          "name": "贵州",
          "value": "32"
        },
        {
          "date": "2020-02-28",
          "name": "云南",
          "value": "16"
        },
        {
          "date": "2020-02-28",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-02-28",
          "name": "陕西",
          "value": "44"
        },
        {
          "date": "2020-02-28",
          "name": "甘肃",
          "value": "7"
        },
        {
          "date": "2020-02-28",
          "name": "青海",
          "value": "0"
        },
        {
          "date": "2020-02-28",
          "name": "宁夏",
          "value": "5"
        },
        {
          "date": "2020-02-28",
          "name": "新疆",
          "value": "21"
        },
        {
          "date": "2020-02-28",
          "name": "台湾",
          "value": "24"
        },
        {
          "date": "2020-02-28",
          "name": "香港",
          "value": "62"
        },
        {
          "date": "2020-02-28",
          "name": "澳门",
          "value": "2"
        }
      ],
      [{
        "date": "2020-02-29",
        "name": "北京",
        "value": "129"
      },
        {
          "date": "2020-02-29",
          "name": "天津",
          "value": "24"
        },
        {
          "date": "2020-02-29",
          "name": "河北",
          "value": "29"
        },
        {
          "date": "2020-02-29",
          "name": "山西",
          "value": "19"
        },
        {
          "date": "2020-02-29",
          "name": "内蒙古",
          "value": "24"
        },
        {
          "date": "2020-02-29",
          "name": "辽宁",
          "value": "20"
        },
        {
          "date": "2020-02-29",
          "name": "吉林",
          "value": "17"
        },
        {
          "date": "2020-02-29",
          "name": "黑龙江",
          "value": "137"
        },
        {
          "date": "2020-02-29",
          "name": "上海",
          "value": "47"
        },
        {
          "date": "2020-02-29",
          "name": "江苏",
          "value": "102"
        },
        {
          "date": "2020-02-29",
          "name": "浙江",
          "value": "177"
        },
        {
          "date": "2020-02-29",
          "name": "安徽",
          "value": "116"
        },
        {
          "date": "2020-02-29",
          "name": "福建",
          "value": "52"
        },
        {
          "date": "2020-02-29",
          "name": "江西",
          "value": "103"
        },
        {
          "date": "2020-02-29",
          "name": "山东",
          "value": "319"
        },
        {
          "date": "2020-02-29",
          "name": "河南",
          "value": "65"
        },
        {
          "date": "2020-02-29",
          "name": "湖北",
          "value": "32959"
        },
        {
          "date": "2020-02-29",
          "name": "湖南",
          "value": "161"
        },
        {
          "date": "2020-02-29",
          "name": "广东",
          "value": "333"
        },
        {
          "date": "2020-02-29",
          "name": "广西",
          "value": "71"
        },
        {
          "date": "2020-02-29",
          "name": "海南",
          "value": "15"
        },
        {
          "date": "2020-02-29",
          "name": "重庆",
          "value": "132"
        },
        {
          "date": "2020-02-29",
          "name": "四川",
          "value": "172"
        },
        {
          "date": "2020-02-29",
          "name": "贵州",
          "value": "32"
        },
        {
          "date": "2020-02-29",
          "name": "云南",
          "value": "15"
        },
        {
          "date": "2020-02-29",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-02-29",
          "name": "陕西",
          "value": "37"
        },
        {
          "date": "2020-02-29",
          "name": "甘肃",
          "value": "7"
        },
        {
          "date": "2020-02-29",
          "name": "青海",
          "value": "0"
        },
        {
          "date": "2020-02-29",
          "name": "宁夏",
          "value": "4"
        },
        {
          "date": "2020-02-29",
          "name": "新疆",
          "value": "11"
        },
        {
          "date": "2020-02-29",
          "name": "台湾",
          "value": "29"
        },
        {
          "date": "2020-02-29",
          "name": "香港",
          "value": "60"
        },
        {
          "date": "2020-02-29",
          "name": "澳门",
          "value": "2"
        }
      ],
      [{
        "date": "2020-03-01",
        "name": "北京",
        "value": "124"
      },
        {
          "date": "2020-03-01",
          "name": "天津",
          "value": "22"
        },
        {
          "date": "2020-03-01",
          "name": "河北",
          "value": "18"
        },
        {
          "date": "2020-03-01",
          "name": "山西",
          "value": "17"
        },
        {
          "date": "2020-03-01",
          "name": "内蒙古",
          "value": "24"
        },
        {
          "date": "2020-03-01",
          "name": "辽宁",
          "value": "18"
        },
        {
          "date": "2020-03-01",
          "name": "吉林",
          "value": "14"
        },
        {
          "date": "2020-03-01",
          "name": "黑龙江",
          "value": "117"
        },
        {
          "date": "2020-03-01",
          "name": "上海",
          "value": "44"
        },
        {
          "date": "2020-03-01",
          "name": "江苏",
          "value": "95"
        },
        {
          "date": "2020-03-01",
          "name": "浙江",
          "value": "155"
        },
        {
          "date": "2020-03-01",
          "name": "安徽",
          "value": "96"
        },
        {
          "date": "2020-03-01",
          "name": "福建",
          "value": "48"
        },
        {
          "date": "2020-03-01",
          "name": "江西",
          "value": "84"
        },
        {
          "date": "2020-03-01",
          "name": "山东",
          "value": "297"
        },
        {
          "date": "2020-03-01",
          "name": "河南",
          "value": "45"
        },
        {
          "date": "2020-03-01",
          "name": "湖北",
          "value": "30543"
        },
        {
          "date": "2020-03-01",
          "name": "湖南",
          "value": "138"
        },
        {
          "date": "2020-03-01",
          "name": "广东",
          "value": "309"
        },
        {
          "date": "2020-03-01",
          "name": "广西",
          "value": "62"
        },
        {
          "date": "2020-03-01",
          "name": "海南",
          "value": "12"
        },
        {
          "date": "2020-03-01",
          "name": "重庆",
          "value": "120"
        },
        {
          "date": "2020-03-01",
          "name": "四川",
          "value": "157"
        },
        {
          "date": "2020-03-01",
          "name": "贵州",
          "value": "30"
        },
        {
          "date": "2020-03-01",
          "name": "云南",
          "value": "9"
        },
        {
          "date": "2020-03-01",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-03-01",
          "name": "陕西",
          "value": "35"
        },
        {
          "date": "2020-03-01",
          "name": "甘肃",
          "value": "5"
        },
        {
          "date": "2020-03-01",
          "name": "青海",
          "value": "0"
        },
        {
          "date": "2020-03-01",
          "name": "宁夏",
          "value": "5"
        },
        {
          "date": "2020-03-01",
          "name": "新疆",
          "value": "9"
        },
        {
          "date": "2020-03-01",
          "name": "台湾",
          "value": "27"
        },
        {
          "date": "2020-03-01",
          "name": "香港",
          "value": "60"
        },
        {
          "date": "2020-03-01",
          "name": "澳门",
          "value": "2"
        }
      ],
      [{
        "date": "2020-03-02",
        "name": "北京",
        "value": "118"
      },
        {
          "date": "2020-03-02",
          "name": "天津",
          "value": "15"
        },
        {
          "date": "2020-03-02",
          "name": "河北",
          "value": "15"
        },
        {
          "date": "2020-03-02",
          "name": "山西",
          "value": "14"
        },
        {
          "date": "2020-03-02",
          "name": "内蒙古",
          "value": "21"
        },
        {
          "date": "2020-03-02",
          "name": "辽宁",
          "value": "21"
        },
        {
          "date": "2020-03-02",
          "name": "吉林",
          "value": "9"
        },
        {
          "date": "2020-03-02",
          "name": "黑龙江",
          "value": "109"
        },
        {
          "date": "2020-03-02",
          "name": "上海",
          "value": "43"
        },
        {
          "date": "2020-03-02",
          "name": "江苏",
          "value": "76"
        },
        {
          "date": "2020-03-02",
          "name": "浙江",
          "value": "126"
        },
        {
          "date": "2020-03-02",
          "name": "安徽",
          "value": "67"
        },
        {
          "date": "2020-03-02",
          "name": "福建",
          "value": "40"
        },
        {
          "date": "2020-03-02",
          "name": "江西",
          "value": "64"
        },
        {
          "date": "2020-03-02",
          "name": "山东",
          "value": "255"
        },
        {
          "date": "2020-03-02",
          "name": "河南",
          "value": "27"
        },
        {
          "date": "2020-03-02",
          "name": "湖北",
          "value": "28216"
        },
        {
          "date": "2020-03-02",
          "name": "湖南",
          "value": "122"
        },
        {
          "date": "2020-03-02",
          "name": "广东",
          "value": "262"
        },
        {
          "date": "2020-03-02",
          "name": "广西",
          "value": "48"
        },
        {
          "date": "2020-03-02",
          "name": "海南",
          "value": "12"
        },
        {
          "date": "2020-03-02",
          "name": "重庆",
          "value": "101"
        },
        {
          "date": "2020-03-02",
          "name": "四川",
          "value": "146"
        },
        {
          "date": "2020-03-02",
          "name": "贵州",
          "value": "30"
        },
        {
          "date": "2020-03-02",
          "name": "云南",
          "value": "4"
        },
        {
          "date": "2020-03-02",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-03-02",
          "name": "陕西",
          "value": "28"
        },
        {
          "date": "2020-03-02",
          "name": "甘肃",
          "value": "4"
        },
        {
          "date": "2020-03-02",
          "name": "青海",
          "value": "0"
        },
        {
          "date": "2020-03-02",
          "name": "宁夏",
          "value": "5"
        },
        {
          "date": "2020-03-02",
          "name": "新疆",
          "value": "6"
        },
        {
          "date": "2020-03-02",
          "name": "台湾",
          "value": "28"
        },
        {
          "date": "2020-03-02",
          "name": "香港",
          "value": "62"
        },
        {
          "date": "2020-03-02",
          "name": "澳门",
          "value": "2"
        }
      ],
      [{
        "date": "2020-03-03",
        "name": "北京",
        "value": "115"
      },
        {
          "date": "2020-03-03",
          "name": "天津",
          "value": "9"
        },
        {
          "date": "2020-03-03",
          "name": "河北",
          "value": "12"
        },
        {
          "date": "2020-03-03",
          "name": "山西",
          "value": "9"
        },
        {
          "date": "2020-03-03",
          "name": "内蒙古",
          "value": "15"
        },
        {
          "date": "2020-03-03",
          "name": "辽宁",
          "value": "18"
        },
        {
          "date": "2020-03-03",
          "name": "吉林",
          "value": "8"
        },
        {
          "date": "2020-03-03",
          "name": "黑龙江",
          "value": "95"
        },
        {
          "date": "2020-03-03",
          "name": "上海",
          "value": "41"
        },
        {
          "date": "2020-03-03",
          "name": "江苏",
          "value": "66"
        },
        {
          "date": "2020-03-03",
          "name": "浙江",
          "value": "105"
        },
        {
          "date": "2020-03-03",
          "name": "安徽",
          "value": "43"
        },
        {
          "date": "2020-03-03",
          "name": "福建",
          "value": "34"
        },
        {
          "date": "2020-03-03",
          "name": "江西",
          "value": "50"
        },
        {
          "date": "2020-03-03",
          "name": "山东",
          "value": "241"
        },
        {
          "date": "2020-03-03",
          "name": "河南",
          "value": "16"
        },
        {
          "date": "2020-03-03",
          "name": "湖北",
          "value": "25905"
        },
        {
          "date": "2020-03-03",
          "name": "湖南",
          "value": "101"
        },
        {
          "date": "2020-03-03",
          "name": "广东",
          "value": "214"
        },
        {
          "date": "2020-03-03",
          "name": "广西",
          "value": "40"
        },
        {
          "date": "2020-03-03",
          "name": "海南",
          "value": "8"
        },
        {
          "date": "2020-03-03",
          "name": "重庆",
          "value": "80"
        },
        {
          "date": "2020-03-03",
          "name": "四川",
          "value": "135"
        },
        {
          "date": "2020-03-03",
          "name": "贵州",
          "value": "30"
        },
        {
          "date": "2020-03-03",
          "name": "云南",
          "value": "3"
        },
        {
          "date": "2020-03-03",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-03-03",
          "name": "陕西",
          "value": "26"
        },
        {
          "date": "2020-03-03",
          "name": "甘肃",
          "value": "3"
        },
        {
          "date": "2020-03-03",
          "name": "青海",
          "value": "0"
        },
        {
          "date": "2020-03-03",
          "name": "宁夏",
          "value": "6"
        },
        {
          "date": "2020-03-03",
          "name": "新疆",
          "value": "5"
        },
        {
          "date": "2020-03-03",
          "name": "台湾",
          "value": "29"
        },
        {
          "date": "2020-03-03",
          "name": "香港",
          "value": "61"
        },
        {
          "date": "2020-03-03",
          "name": "澳门",
          "value": "1"
        }
      ],
      [{
        "date": "2020-03-04",
        "name": "北京",
        "value": "113"
      },
        {
          "date": "2020-03-04",
          "name": "天津",
          "value": "5"
        },
        {
          "date": "2020-03-04",
          "name": "河北",
          "value": "11"
        },
        {
          "date": "2020-03-04",
          "name": "山西",
          "value": "9"
        },
        {
          "date": "2020-03-04",
          "name": "内蒙古",
          "value": "11"
        },
        {
          "date": "2020-03-04",
          "name": "辽宁",
          "value": "18"
        },
        {
          "date": "2020-03-04",
          "name": "吉林",
          "value": "6"
        },
        {
          "date": "2020-03-04",
          "name": "黑龙江",
          "value": "89"
        },
        {
          "date": "2020-03-04",
          "name": "上海",
          "value": "37"
        },
        {
          "date": "2020-03-04",
          "name": "江苏",
          "value": "51"
        },
        {
          "date": "2020-03-04",
          "name": "浙江",
          "value": "84"
        },
        {
          "date": "2020-03-04",
          "name": "安徽",
          "value": "28"
        },
        {
          "date": "2020-03-04",
          "name": "福建",
          "value": "25"
        },
        {
          "date": "2020-03-04",
          "name": "江西",
          "value": "33"
        },
        {
          "date": "2020-03-04",
          "name": "山东",
          "value": "176"
        },
        {
          "date": "2020-03-04",
          "name": "河南",
          "value": "11"
        },
        {
          "date": "2020-03-04",
          "name": "湖北",
          "value": "24085"
        },
        {
          "date": "2020-03-04",
          "name": "湖南",
          "value": "81"
        },
        {
          "date": "2020-03-04",
          "name": "广东",
          "value": "184"
        },
        {
          "date": "2020-03-04",
          "name": "广西",
          "value": "37"
        },
        {
          "date": "2020-03-04",
          "name": "海南",
          "value": "5"
        },
        {
          "date": "2020-03-04",
          "name": "重庆",
          "value": "68"
        },
        {
          "date": "2020-03-04",
          "name": "四川",
          "value": "118"
        },
        {
          "date": "2020-03-04",
          "name": "贵州",
          "value": "30"
        },
        {
          "date": "2020-03-04",
          "name": "云南",
          "value": "3"
        },
        {
          "date": "2020-03-04",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-03-04",
          "name": "陕西",
          "value": "22"
        },
        {
          "date": "2020-03-04",
          "name": "甘肃",
          "value": "2"
        },
        {
          "date": "2020-03-04",
          "name": "青海",
          "value": "0"
        },
        {
          "date": "2020-03-04",
          "name": "宁夏",
          "value": "6"
        },
        {
          "date": "2020-03-04",
          "name": "新疆",
          "value": "4"
        },
        {
          "date": "2020-03-04",
          "name": "台湾",
          "value": "29"
        },
        {
          "date": "2020-03-04",
          "name": "香港",
          "value": "59"
        },
        {
          "date": "2020-03-04",
          "name": "澳门",
          "value": "1"
        }
      ],
      [{
        "date": "2020-03-05",
        "name": "北京",
        "value": "116"
      },
        {
          "date": "2020-03-05",
          "name": "天津",
          "value": "5"
        },
        {
          "date": "2020-03-05",
          "name": "河北",
          "value": "8"
        },
        {
          "date": "2020-03-05",
          "name": "山西",
          "value": "7"
        },
        {
          "date": "2020-03-05",
          "name": "内蒙古",
          "value": "9"
        },
        {
          "date": "2020-03-05",
          "name": "辽宁",
          "value": "18"
        },
        {
          "date": "2020-03-05",
          "name": "吉林",
          "value": "4"
        },
        {
          "date": "2020-03-05",
          "name": "黑龙江",
          "value": "88"
        },
        {
          "date": "2020-03-05",
          "name": "上海",
          "value": "33"
        },
        {
          "date": "2020-03-05",
          "name": "江苏",
          "value": "43"
        },
        {
          "date": "2020-03-05",
          "name": "浙江",
          "value": "61"
        },
        {
          "date": "2020-03-05",
          "name": "安徽",
          "value": "14"
        },
        {
          "date": "2020-03-05",
          "name": "福建",
          "value": "17"
        },
        {
          "date": "2020-03-05",
          "name": "江西",
          "value": "26"
        },
        {
          "date": "2020-03-05",
          "name": "山东",
          "value": "150"
        },
        {
          "date": "2020-03-05",
          "name": "河南",
          "value": "9"
        },
        {
          "date": "2020-03-05",
          "name": "湖北",
          "value": "22695"
        },
        {
          "date": "2020-03-05",
          "name": "湖南",
          "value": "68"
        },
        {
          "date": "2020-03-05",
          "name": "广东",
          "value": "135"
        },
        {
          "date": "2020-03-05",
          "name": "广西",
          "value": "33"
        },
        {
          "date": "2020-03-05",
          "name": "海南",
          "value": "4"
        },
        {
          "date": "2020-03-05",
          "name": "重庆",
          "value": "58"
        },
        {
          "date": "2020-03-05",
          "name": "四川",
          "value": "108"
        },
        {
          "date": "2020-03-05",
          "name": "贵州",
          "value": "30"
        },
        {
          "date": "2020-03-05",
          "name": "云南",
          "value": "3"
        },
        {
          "date": "2020-03-05",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-03-05",
          "name": "陕西",
          "value": "20"
        },
        {
          "date": "2020-03-05",
          "name": "甘肃",
          "value": "13"
        },
        {
          "date": "2020-03-05",
          "name": "青海",
          "value": "0"
        },
        {
          "date": "2020-03-05",
          "name": "宁夏",
          "value": "6"
        },
        {
          "date": "2020-03-05",
          "name": "新疆",
          "value": "3"
        },
        {
          "date": "2020-03-05",
          "name": "台湾",
          "value": "31"
        },
        {
          "date": "2020-03-05",
          "name": "香港",
          "value": "56"
        },
        {
          "date": "2020-03-05",
          "name": "澳门",
          "value": "1"
        }
      ],
      [{
        "date": "2020-03-06",
        "name": "北京",
        "value": "115"
      },
        {
          "date": "2020-03-06",
          "name": "天津",
          "value": "5"
        },
        {
          "date": "2020-03-06",
          "name": "河北",
          "value": "7"
        },
        {
          "date": "2020-03-06",
          "name": "山西",
          "value": "7"
        },
        {
          "date": "2020-03-06",
          "name": "内蒙古",
          "value": "9"
        },
        {
          "date": "2020-03-06",
          "name": "辽宁",
          "value": "18"
        },
        {
          "date": "2020-03-06",
          "name": "吉林",
          "value": "2"
        },
        {
          "date": "2020-03-06",
          "name": "黑龙江",
          "value": "66"
        },
        {
          "date": "2020-03-06",
          "name": "上海",
          "value": "33"
        },
        {
          "date": "2020-03-06",
          "name": "江苏",
          "value": "30"
        },
        {
          "date": "2020-03-06",
          "name": "浙江",
          "value": "53"
        },
        {
          "date": "2020-03-06",
          "name": "安徽",
          "value": "5"
        },
        {
          "date": "2020-03-06",
          "name": "福建",
          "value": "11"
        },
        {
          "date": "2020-03-06",
          "name": "江西",
          "value": "18"
        },
        {
          "date": "2020-03-06",
          "name": "山东",
          "value": "127"
        },
        {
          "date": "2020-03-06",
          "name": "河南",
          "value": "7"
        },
        {
          "date": "2020-03-06",
          "name": "湖北",
          "value": "21239"
        },
        {
          "date": "2020-03-06",
          "name": "湖南",
          "value": "55"
        },
        {
          "date": "2020-03-06",
          "name": "广东",
          "value": "112"
        },
        {
          "date": "2020-03-06",
          "name": "广西",
          "value": "31"
        },
        {
          "date": "2020-03-06",
          "name": "海南",
          "value": "4"
        },
        {
          "date": "2020-03-06",
          "name": "重庆",
          "value": "50"
        },
        {
          "date": "2020-03-06",
          "name": "四川",
          "value": "88"
        },
        {
          "date": "2020-03-06",
          "name": "贵州",
          "value": "29"
        },
        {
          "date": "2020-03-06",
          "name": "云南",
          "value": "2"
        },
        {
          "date": "2020-03-06",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-03-06",
          "name": "陕西",
          "value": "18"
        },
        {
          "date": "2020-03-06",
          "name": "甘肃",
          "value": "30"
        },
        {
          "date": "2020-03-06",
          "name": "青海",
          "value": "0"
        },
        {
          "date": "2020-03-06",
          "name": "宁夏",
          "value": "4"
        },
        {
          "date": "2020-03-06",
          "name": "新疆",
          "value": "2"
        },
        {
          "date": "2020-03-06",
          "name": "台湾",
          "value": "32"
        },
        {
          "date": "2020-03-06",
          "name": "香港",
          "value": "54"
        },
        {
          "date": "2020-03-06",
          "name": "澳门",
          "value": "0"
        }
      ],
      [{
        "date": "2020-03-07",
        "name": "北京",
        "value": "112"
      },
        {
          "date": "2020-03-07",
          "name": "天津",
          "value": "5"
        },
        {
          "date": "2020-03-07",
          "name": "河北",
          "value": "5"
        },
        {
          "date": "2020-03-07",
          "name": "山西",
          "value": "7"
        },
        {
          "date": "2020-03-07",
          "name": "内蒙古",
          "value": "6"
        },
        {
          "date": "2020-03-07",
          "name": "辽宁",
          "value": "16"
        },
        {
          "date": "2020-03-07",
          "name": "吉林",
          "value": "2"
        },
        {
          "date": "2020-03-07",
          "name": "黑龙江",
          "value": "59"
        },
        {
          "date": "2020-03-07",
          "name": "上海",
          "value": "26"
        },
        {
          "date": "2020-03-07",
          "name": "江苏",
          "value": "21"
        },
        {
          "date": "2020-03-07",
          "name": "浙江",
          "value": "45"
        },
        {
          "date": "2020-03-07",
          "name": "安徽",
          "value": "3"
        },
        {
          "date": "2020-03-07",
          "name": "福建",
          "value": "0"
        },
        {
          "date": "2020-03-07",
          "name": "江西",
          "value": "16"
        },
        {
          "date": "2020-03-07",
          "name": "山东",
          "value": "115"
        },
        {
          "date": "2020-03-07",
          "name": "河南",
          "value": "4"
        },
        {
          "date": "2020-03-07",
          "name": "湖北",
          "value": "19710"
        },
        {
          "date": "2020-03-07",
          "name": "湖南",
          "value": "49"
        },
        {
          "date": "2020-03-07",
          "name": "广东",
          "value": "95"
        },
        {
          "date": "2020-03-07",
          "name": "广西",
          "value": "27"
        },
        {
          "date": "2020-03-07",
          "name": "海南",
          "value": "4"
        },
        {
          "date": "2020-03-07",
          "name": "重庆",
          "value": "44"
        },
        {
          "date": "2020-03-07",
          "name": "四川",
          "value": "79"
        },
        {
          "date": "2020-03-07",
          "name": "贵州",
          "value": "27"
        },
        {
          "date": "2020-03-07",
          "name": "云南",
          "value": "2"
        },
        {
          "date": "2020-03-07",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-03-07",
          "name": "陕西",
          "value": "18"
        },
        {
          "date": "2020-03-07",
          "name": "甘肃",
          "value": "31"
        },
        {
          "date": "2020-03-07",
          "name": "青海",
          "value": "0"
        },
        {
          "date": "2020-03-07",
          "name": "宁夏",
          "value": "4"
        },
        {
          "date": "2020-03-07",
          "name": "新疆",
          "value": "1"
        },
        {
          "date": "2020-03-07",
          "name": "台湾",
          "value": "31"
        },
        {
          "date": "2020-03-07",
          "name": "香港",
          "value": "52"
        },
        {
          "date": "2020-03-07",
          "name": "澳门",
          "value": "0"
        }
      ],
      [{
        "date": "2020-03-08",
        "name": "北京",
        "value": "105"
      },
        {
          "date": "2020-03-08",
          "name": "天津",
          "value": "4"
        },
        {
          "date": "2020-03-08",
          "name": "河北",
          "value": "5"
        },
        {
          "date": "2020-03-08",
          "name": "山西",
          "value": "7"
        },
        {
          "date": "2020-03-08",
          "name": "内蒙古",
          "value": "4"
        },
        {
          "date": "2020-03-08",
          "name": "辽宁",
          "value": "15"
        },
        {
          "date": "2020-03-08",
          "name": "吉林",
          "value": "2"
        },
        {
          "date": "2020-03-08",
          "name": "黑龙江",
          "value": "47"
        },
        {
          "date": "2020-03-08",
          "name": "上海",
          "value": "25"
        },
        {
          "date": "2020-03-08",
          "name": "江苏",
          "value": "13"
        },
        {
          "date": "2020-03-08",
          "name": "浙江",
          "value": "32"
        },
        {
          "date": "2020-03-08",
          "name": "安徽",
          "value": "0"
        },
        {
          "date": "2020-03-08",
          "name": "福建",
          "value": "0"
        },
        {
          "date": "2020-03-08",
          "name": "江西",
          "value": "11"
        },
        {
          "date": "2020-03-08",
          "name": "山东",
          "value": "105"
        },
        {
          "date": "2020-03-08",
          "name": "河南",
          "value": "3"
        },
        {
          "date": "2020-03-08",
          "name": "湖北",
          "value": "18303"
        },
        {
          "date": "2020-03-08",
          "name": "湖南",
          "value": "35"
        },
        {
          "date": "2020-03-08",
          "name": "广东",
          "value": "84"
        },
        {
          "date": "2020-03-08",
          "name": "广西",
          "value": "20"
        },
        {
          "date": "2020-03-08",
          "name": "海南",
          "value": "3"
        },
        {
          "date": "2020-03-08",
          "name": "重庆",
          "value": "43"
        },
        {
          "date": "2020-03-08",
          "name": "四川",
          "value": "71"
        },
        {
          "date": "2020-03-08",
          "name": "贵州",
          "value": "21"
        },
        {
          "date": "2020-03-08",
          "name": "云南",
          "value": "2"
        },
        {
          "date": "2020-03-08",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-03-08",
          "name": "陕西",
          "value": "17"
        },
        {
          "date": "2020-03-08",
          "name": "甘肃",
          "value": "35"
        },
        {
          "date": "2020-03-08",
          "name": "青海",
          "value": "0"
        },
        {
          "date": "2020-03-08",
          "name": "宁夏",
          "value": "4"
        },
        {
          "date": "2020-03-08",
          "name": "新疆",
          "value": "0"
        },
        {
          "date": "2020-03-08",
          "name": "台湾",
          "value": "29"
        },
        {
          "date": "2020-03-08",
          "name": "香港",
          "value": "52"
        },
        {
          "date": "2020-03-08",
          "name": "澳门",
          "value": "0"
        }
      ],
      [{
        "date": "2020-03-09",
        "name": "北京",
        "value": "101"
      },
        {
          "date": "2020-03-09",
          "name": "天津",
          "value": "3"
        },
        {
          "date": "2020-03-09",
          "name": "河北",
          "value": "5"
        },
        {
          "date": "2020-03-09",
          "name": "山西",
          "value": "6"
        },
        {
          "date": "2020-03-09",
          "name": "内蒙古",
          "value": "4"
        },
        {
          "date": "2020-03-09",
          "name": "辽宁",
          "value": "14"
        },
        {
          "date": "2020-03-09",
          "name": "吉林",
          "value": "1"
        },
        {
          "date": "2020-03-09",
          "name": "黑龙江",
          "value": "34"
        },
        {
          "date": "2020-03-09",
          "name": "上海",
          "value": "24"
        },
        {
          "date": "2020-03-09",
          "name": "江苏",
          "value": "9"
        },
        {
          "date": "2020-03-09",
          "name": "浙江",
          "value": "24"
        },
        {
          "date": "2020-03-09",
          "name": "安徽",
          "value": "0"
        },
        {
          "date": "2020-03-09",
          "name": "福建",
          "value": "0"
        },
        {
          "date": "2020-03-09",
          "name": "江西",
          "value": "7"
        },
        {
          "date": "2020-03-09",
          "name": "山东",
          "value": "49"
        },
        {
          "date": "2020-03-09",
          "name": "河南",
          "value": "3"
        },
        {
          "date": "2020-03-09",
          "name": "湖北",
          "value": "17151"
        },
        {
          "date": "2020-03-09",
          "name": "湖南",
          "value": "26"
        },
        {
          "date": "2020-03-09",
          "name": "广东",
          "value": "75"
        },
        {
          "date": "2020-03-09",
          "name": "广西",
          "value": "16"
        },
        {
          "date": "2020-03-09",
          "name": "海南",
          "value": "3"
        },
        {
          "date": "2020-03-09",
          "name": "重庆",
          "value": "28"
        },
        {
          "date": "2020-03-09",
          "name": "四川",
          "value": "66"
        },
        {
          "date": "2020-03-09",
          "name": "贵州",
          "value": "15"
        },
        {
          "date": "2020-03-09",
          "name": "云南",
          "value": "2"
        },
        {
          "date": "2020-03-09",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-03-09",
          "name": "陕西",
          "value": "17"
        },
        {
          "date": "2020-03-09",
          "name": "甘肃",
          "value": "34"
        },
        {
          "date": "2020-03-09",
          "name": "青海",
          "value": "0"
        },
        {
          "date": "2020-03-09",
          "name": "宁夏",
          "value": "4"
        },
        {
          "date": "2020-03-09",
          "name": "新疆",
          "value": "0"
        },
        {
          "date": "2020-03-09",
          "name": "台湾",
          "value": "29"
        },
        {
          "date": "2020-03-09",
          "name": "香港",
          "value": "52"
        },
        {
          "date": "2020-03-09",
          "name": "澳门",
          "value": "0"
        }
      ],
      [{
        "date": "2020-03-10",
        "name": "北京",
        "value": "101"
      },
        {
          "date": "2020-03-10",
          "name": "天津",
          "value": "2"
        },
        {
          "date": "2020-03-10",
          "name": "河北",
          "value": "5"
        },
        {
          "date": "2020-03-10",
          "name": "山西",
          "value": "2"
        },
        {
          "date": "2020-03-10",
          "name": "内蒙古",
          "value": "4"
        },
        {
          "date": "2020-03-10",
          "name": "辽宁",
          "value": "13"
        },
        {
          "date": "2020-03-10",
          "name": "吉林",
          "value": "1"
        },
        {
          "date": "2020-03-10",
          "name": "黑龙江",
          "value": "34"
        },
        {
          "date": "2020-03-10",
          "name": "上海",
          "value": "22"
        },
        {
          "date": "2020-03-10",
          "name": "江苏",
          "value": "4"
        },
        {
          "date": "2020-03-10",
          "name": "浙江",
          "value": "9"
        },
        {
          "date": "2020-03-10",
          "name": "安徽",
          "value": "0"
        },
        {
          "date": "2020-03-10",
          "name": "福建",
          "value": "0"
        },
        {
          "date": "2020-03-10",
          "name": "江西",
          "value": "2"
        },
        {
          "date": "2020-03-10",
          "name": "山东",
          "value": "32"
        },
        {
          "date": "2020-03-10",
          "name": "河南",
          "value": "1"
        },
        {
          "date": "2020-03-10",
          "name": "湖北",
          "value": "15671"
        },
        {
          "date": "2020-03-10",
          "name": "湖南",
          "value": "19"
        },
        {
          "date": "2020-03-10",
          "name": "广东",
          "value": "63"
        },
        {
          "date": "2020-03-10",
          "name": "广西",
          "value": "13"
        },
        {
          "date": "2020-03-10",
          "name": "海南",
          "value": "3"
        },
        {
          "date": "2020-03-10",
          "name": "重庆",
          "value": "23"
        },
        {
          "date": "2020-03-10",
          "name": "四川",
          "value": "52"
        },
        {
          "date": "2020-03-10",
          "name": "贵州",
          "value": "11"
        },
        {
          "date": "2020-03-10",
          "name": "云南",
          "value": "2"
        },
        {
          "date": "2020-03-10",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-03-10",
          "name": "陕西",
          "value": "17"
        },
        {
          "date": "2020-03-10",
          "name": "甘肃",
          "value": "35"
        },
        {
          "date": "2020-03-10",
          "name": "青海",
          "value": "0"
        },
        {
          "date": "2020-03-10",
          "name": "宁夏",
          "value": "4"
        },
        {
          "date": "2020-03-10",
          "name": "新疆",
          "value": "0"
        },
        {
          "date": "2020-03-10",
          "name": "台湾",
          "value": "29"
        },
        {
          "date": "2020-03-10",
          "name": "香港",
          "value": "52"
        },
        {
          "date": "2020-03-10",
          "name": "澳门",
          "value": "0"
        }
      ],
      [{
        "date": "2020-03-11",
        "name": "北京",
        "value": "93"
      },
        {
          "date": "2020-03-11",
          "name": "天津",
          "value": "1"
        },
        {
          "date": "2020-03-11",
          "name": "河北",
          "value": "5"
        },
        {
          "date": "2020-03-11",
          "name": "山西",
          "value": "2"
        },
        {
          "date": "2020-03-11",
          "name": "内蒙古",
          "value": "3"
        },
        {
          "date": "2020-03-11",
          "name": "辽宁",
          "value": "13"
        },
        {
          "date": "2020-03-11",
          "name": "吉林",
          "value": "1"
        },
        {
          "date": "2020-03-11",
          "name": "黑龙江",
          "value": "29"
        },
        {
          "date": "2020-03-11",
          "name": "上海",
          "value": "21"
        },
        {
          "date": "2020-03-11",
          "name": "江苏",
          "value": "3"
        },
        {
          "date": "2020-03-11",
          "name": "浙江",
          "value": "5"
        },
        {
          "date": "2020-03-11",
          "name": "安徽",
          "value": "0"
        },
        {
          "date": "2020-03-11",
          "name": "福建",
          "value": "0"
        },
        {
          "date": "2020-03-11",
          "name": "江西",
          "value": "0"
        },
        {
          "date": "2020-03-11",
          "name": "山东",
          "value": "21"
        },
        {
          "date": "2020-03-11",
          "name": "河南",
          "value": "2"
        },
        {
          "date": "2020-03-11",
          "name": "湖北",
          "value": "14427"
        },
        {
          "date": "2020-03-11",
          "name": "湖南",
          "value": "16"
        },
        {
          "date": "2020-03-11",
          "name": "广东",
          "value": "60"
        },
        {
          "date": "2020-03-11",
          "name": "广西",
          "value": "9"
        },
        {
          "date": "2020-03-11",
          "name": "海南",
          "value": "2"
        },
        {
          "date": "2020-03-11",
          "name": "重庆",
          "value": "16"
        },
        {
          "date": "2020-03-11",
          "name": "四川",
          "value": "42"
        },
        {
          "date": "2020-03-11",
          "name": "贵州",
          "value": "7"
        },
        {
          "date": "2020-03-11",
          "name": "云南",
          "value": "2"
        },
        {
          "date": "2020-03-11",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-03-11",
          "name": "陕西",
          "value": "11"
        },
        {
          "date": "2020-03-11",
          "name": "甘肃",
          "value": "37"
        },
        {
          "date": "2020-03-11",
          "name": "青海",
          "value": "0"
        },
        {
          "date": "2020-03-11",
          "name": "宁夏",
          "value": "3"
        },
        {
          "date": "2020-03-11",
          "name": "新疆",
          "value": "0"
        },
        {
          "date": "2020-03-11",
          "name": "台湾",
          "value": "30"
        },
        {
          "date": "2020-03-11",
          "name": "香港",
          "value": "59"
        },
        {
          "date": "2020-03-11",
          "name": "澳门",
          "value": "0"
        }
      ],
      [{
        "date": "2020-03-12",
        "name": "北京",
        "value": "86"
      },
        {
          "date": "2020-03-12",
          "name": "天津",
          "value": "1"
        },
        {
          "date": "2020-03-12",
          "name": "河北",
          "value": "2"
        },
        {
          "date": "2020-03-12",
          "name": "山西",
          "value": "1"
        },
        {
          "date": "2020-03-12",
          "name": "内蒙古",
          "value": "3"
        },
        {
          "date": "2020-03-12",
          "name": "辽宁",
          "value": "12"
        },
        {
          "date": "2020-03-12",
          "name": "吉林",
          "value": "1"
        },
        {
          "date": "2020-03-12",
          "name": "黑龙江",
          "value": "23"
        },
        {
          "date": "2020-03-12",
          "name": "上海",
          "value": "22"
        },
        {
          "date": "2020-03-12",
          "name": "江苏",
          "value": "1"
        },
        {
          "date": "2020-03-12",
          "name": "浙江",
          "value": "5"
        },
        {
          "date": "2020-03-12",
          "name": "安徽",
          "value": "0"
        },
        {
          "date": "2020-03-12",
          "name": "福建",
          "value": "0"
        },
        {
          "date": "2020-03-12",
          "name": "江西",
          "value": "0"
        },
        {
          "date": "2020-03-12",
          "name": "山东",
          "value": "14"
        },
        {
          "date": "2020-03-12",
          "name": "河南",
          "value": "2"
        },
        {
          "date": "2020-03-12",
          "name": "湖北",
          "value": "13171"
        },
        {
          "date": "2020-03-12",
          "name": "湖南",
          "value": "10"
        },
        {
          "date": "2020-03-12",
          "name": "广东",
          "value": "52"
        },
        {
          "date": "2020-03-12",
          "name": "广西",
          "value": "7"
        },
        {
          "date": "2020-03-12",
          "name": "海南",
          "value": "2"
        },
        {
          "date": "2020-03-12",
          "name": "重庆",
          "value": "6"
        },
        {
          "date": "2020-03-12",
          "name": "四川",
          "value": "36"
        },
        {
          "date": "2020-03-12",
          "name": "贵州",
          "value": "4"
        },
        {
          "date": "2020-03-12",
          "name": "云南",
          "value": "2"
        },
        {
          "date": "2020-03-12",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-03-12",
          "name": "陕西",
          "value": "11"
        },
        {
          "date": "2020-03-12",
          "name": "甘肃",
          "value": "37"
        },
        {
          "date": "2020-03-12",
          "name": "青海",
          "value": "0"
        },
        {
          "date": "2020-03-12",
          "name": "宁夏",
          "value": "3"
        },
        {
          "date": "2020-03-12",
          "name": "新疆",
          "value": "0"
        },
        {
          "date": "2020-03-12",
          "name": "台湾",
          "value": "28"
        },
        {
          "date": "2020-03-12",
          "name": "香港",
          "value": "53"
        },
        {
          "date": "2020-03-12",
          "name": "澳门",
          "value": "0"
        }
      ],
      [{
        "date": "2020-03-13",
        "name": "北京",
        "value": "86"
      },
        {
          "date": "2020-03-13",
          "name": "天津",
          "value": "1"
        },
        {
          "date": "2020-03-13",
          "name": "河北",
          "value": "2"
        },
        {
          "date": "2020-03-13",
          "name": "山西",
          "value": "1"
        },
        {
          "date": "2020-03-13",
          "name": "内蒙古",
          "value": "3"
        },
        {
          "date": "2020-03-13",
          "name": "辽宁",
          "value": "12"
        },
        {
          "date": "2020-03-13",
          "name": "吉林",
          "value": "1"
        },
        {
          "date": "2020-03-13",
          "name": "黑龙江",
          "value": "23"
        },
        {
          "date": "2020-03-13",
          "name": "上海",
          "value": "19"
        },
        {
          "date": "2020-03-13",
          "name": "江苏",
          "value": "0"
        },
        {
          "date": "2020-03-13",
          "name": "浙江",
          "value": "5"
        },
        {
          "date": "2020-03-13",
          "name": "安徽",
          "value": "0"
        },
        {
          "date": "2020-03-13",
          "name": "福建",
          "value": "0"
        },
        {
          "date": "2020-03-13",
          "name": "江西",
          "value": "0"
        },
        {
          "date": "2020-03-13",
          "name": "山东",
          "value": "14"
        },
        {
          "date": "2020-03-13",
          "name": "河南",
          "value": "2"
        },
        {
          "date": "2020-03-13",
          "name": "湖北",
          "value": "13169"
        },
        {
          "date": "2020-03-13",
          "name": "湖南",
          "value": "10"
        },
        {
          "date": "2020-03-13",
          "name": "广东",
          "value": "52"
        },
        {
          "date": "2020-03-13",
          "name": "广西",
          "value": "7"
        },
        {
          "date": "2020-03-13",
          "name": "海南",
          "value": "2"
        },
        {
          "date": "2020-03-13",
          "name": "重庆",
          "value": "6"
        },
        {
          "date": "2020-03-13",
          "name": "四川",
          "value": "34"
        },
        {
          "date": "2020-03-13",
          "name": "贵州",
          "value": "4"
        },
        {
          "date": "2020-03-13",
          "name": "云南",
          "value": "2"
        },
        {
          "date": "2020-03-13",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-03-13",
          "name": "陕西",
          "value": "11"
        },
        {
          "date": "2020-03-13",
          "name": "甘肃",
          "value": "37"
        },
        {
          "date": "2020-03-13",
          "name": "青海",
          "value": "0"
        },
        {
          "date": "2020-03-13",
          "name": "宁夏",
          "value": "3"
        },
        {
          "date": "2020-03-13",
          "name": "新疆",
          "value": "0"
        },
        {
          "date": "2020-03-13",
          "name": "台湾",
          "value": "28"
        },
        {
          "date": "2020-03-13",
          "name": "香港",
          "value": "52"
        },
        {
          "date": "2020-03-13",
          "name": "澳门",
          "value": "0"
        }
      ],
      [{
        "date": "2020-03-14",
        "name": "北京",
        "value": "81"
      },
        {
          "date": "2020-03-14",
          "name": "天津",
          "value": "1"
        },
        {
          "date": "2020-03-14",
          "name": "河北",
          "value": "2"
        },
        {
          "date": "2020-03-14",
          "name": "山西",
          "value": "0"
        },
        {
          "date": "2020-03-14",
          "name": "内蒙古",
          "value": "3"
        },
        {
          "date": "2020-03-14",
          "name": "辽宁",
          "value": "11"
        },
        {
          "date": "2020-03-14",
          "name": "吉林",
          "value": "1"
        },
        {
          "date": "2020-03-14",
          "name": "黑龙江",
          "value": "16"
        },
        {
          "date": "2020-03-14",
          "name": "上海",
          "value": "26"
        },
        {
          "date": "2020-03-14",
          "name": "江苏",
          "value": "0"
        },
        {
          "date": "2020-03-14",
          "name": "浙江",
          "value": "19"
        },
        {
          "date": "2020-03-14",
          "name": "安徽",
          "value": "0"
        },
        {
          "date": "2020-03-14",
          "name": "福建",
          "value": "0"
        },
        {
          "date": "2020-03-14",
          "name": "江西",
          "value": "0"
        },
        {
          "date": "2020-03-14",
          "name": "山东",
          "value": "12"
        },
        {
          "date": "2020-03-14",
          "name": "河南",
          "value": "1"
        },
        {
          "date": "2020-03-14",
          "name": "湖北",
          "value": "10431"
        },
        {
          "date": "2020-03-14",
          "name": "湖南",
          "value": "0"
        },
        {
          "date": "2020-03-14",
          "name": "广东",
          "value": "46"
        },
        {
          "date": "2020-03-14",
          "name": "广西",
          "value": "7"
        },
        {
          "date": "2020-03-14",
          "name": "海南",
          "value": "2"
        },
        {
          "date": "2020-03-14",
          "name": "重庆",
          "value": "1"
        },
        {
          "date": "2020-03-14",
          "name": "四川",
          "value": "21"
        },
        {
          "date": "2020-03-14",
          "name": "贵州",
          "value": "1"
        },
        {
          "date": "2020-03-14",
          "name": "云南",
          "value": "0"
        },
        {
          "date": "2020-03-14",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-03-14",
          "name": "陕西",
          "value": "11"
        },
        {
          "date": "2020-03-14",
          "name": "甘肃",
          "value": "39"
        },
        {
          "date": "2020-03-14",
          "name": "青海",
          "value": "0"
        },
        {
          "date": "2020-03-14",
          "name": "宁夏",
          "value": "2"
        },
        {
          "date": "2020-03-14",
          "name": "新疆",
          "value": "0"
        },
        {
          "date": "2020-03-14",
          "name": "台湾",
          "value": "32"
        },
        {
          "date": "2020-03-14",
          "name": "香港",
          "value": "56"
        },
        {
          "date": "2020-03-14",
          "name": "澳门",
          "value": "0"
        }],
      [{
        "date": "2020-03-15",
        "name": "北京",
        "value": "80"
      },
        {
          "date": "2020-03-15",
          "name": "天津",
          "value": "0"
        },
        {
          "date": "2020-03-15",
          "name": "河北",
          "value": "2"
        },
        {
          "date": "2020-03-15",
          "name": "山西",
          "value": "0"
        },
        {
          "date": "2020-03-15",
          "name": "内蒙古",
          "value": "3"
        },
        {
          "date": "2020-03-15",
          "name": "辽宁",
          "value": "10"
        },
        {
          "date": "2020-03-15",
          "name": "吉林",
          "value": "0"
        },
        {
          "date": "2020-03-15",
          "name": "黑龙江",
          "value": "15"
        },
        {
          "date": "2020-03-15",
          "name": "上海",
          "value": "28"
        },
        {
          "date": "2020-03-15",
          "name": "江苏",
          "value": "0"
        },
        {
          "date": "2020-03-15",
          "name": "浙江",
          "value": "17"
        },
        {
          "date": "2020-03-15",
          "name": "安徽",
          "value": "0"
        },
        {
          "date": "2020-03-15",
          "name": "福建",
          "value": "0"
        },
        {
          "date": "2020-03-15",
          "name": "江西",
          "value": "0"
        },
        {
          "date": "2020-03-15",
          "name": "山东",
          "value": "10"
        },
        {
          "date": "2020-03-15",
          "name": "河南",
          "value": "1"
        },
        {
          "date": "2020-03-15",
          "name": "湖北",
          "value": "9605"
        },
        {
          "date": "2020-03-15",
          "name": "湖南",
          "value": "0"
        },
        {
          "date": "2020-03-15",
          "name": "广东",
          "value": "47"
        },
        {
          "date": "2020-03-15",
          "name": "广西",
          "value": "3"
        },
        {
          "date": "2020-03-15",
          "name": "海南",
          "value": "2"
        },
        {
          "date": "2020-03-15",
          "name": "重庆",
          "value": "0"
        },
        {
          "date": "2020-03-15",
          "name": "四川",
          "value": "20"
        },
        {
          "date": "2020-03-15",
          "name": "贵州",
          "value": "1"
        },
        {
          "date": "2020-03-15",
          "name": "云南",
          "value": "1"
        },
        {
          "date": "2020-03-15",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-03-15",
          "name": "陕西",
          "value": "11"
        },
        {
          "date": "2020-03-15",
          "name": "甘肃",
          "value": "40"
        },
        {
          "date": "2020-03-15",
          "name": "青海",
          "value": "0"
        },
        {
          "date": "2020-03-15",
          "name": "宁夏",
          "value": "2"
        },
        {
          "date": "2020-03-15",
          "name": "新疆",
          "value": "0"
        },
        {
          "date": "2020-03-15",
          "name": "台湾",
          "value": "38"
        },
        {
          "date": "2020-03-15",
          "name": "香港",
          "value": "60"
        },
        {
          "date": "2020-03-15",
          "name": "澳门",
          "value": "0"
        }],
      [{
        "date": "2020-03-16",
        "name": "北京",
        "value": "84"
      },
        {
          "date": "2020-03-16",
          "name": "天津",
          "value": "0"
        },
        {
          "date": "2020-03-16",
          "name": "河北",
          "value": "2"
        },
        {
          "date": "2020-03-16",
          "name": "山西",
          "value": "0"
        },
        {
          "date": "2020-03-16",
          "name": "内蒙古",
          "value": "3"
        },
        {
          "date": "2020-03-16",
          "name": "辽宁",
          "value": "10"
        },
        {
          "date": "2020-03-16",
          "name": "吉林",
          "value": "0"
        },
        {
          "date": "2020-03-16",
          "name": "黑龙江",
          "value": "15"
        },
        {
          "date": "2020-03-16",
          "name": "上海",
          "value": "26"
        },
        {
          "date": "2020-03-16",
          "name": "江苏",
          "value": "0"
        },
        {
          "date": "2020-03-16",
          "name": "浙江",
          "value": "15"
        },
        {
          "date": "2020-03-16",
          "name": "安徽",
          "value": "0"
        },
        {
          "date": "2020-03-16",
          "name": "福建",
          "value": "0"
        },
        {
          "date": "2020-03-16",
          "name": "江西",
          "value": "0"
        },
        {
          "date": "2020-03-16",
          "name": "山东",
          "value": "7"
        },
        {
          "date": "2020-03-16",
          "name": "河南",
          "value": "1"
        },
        {
          "date": "2020-03-16",
          "name": "湖北",
          "value": "9605"
        },
        {
          "date": "2020-03-16",
          "name": "湖南",
          "value": "0"
        },
        {
          "date": "2020-03-16",
          "name": "广东",
          "value": "47"
        },
        {
          "date": "2020-03-16",
          "name": "广西",
          "value": "3"
        },
        {
          "date": "2020-03-16",
          "name": "海南",
          "value": "2"
        },
        {
          "date": "2020-03-16",
          "name": "重庆",
          "value": "0"
        },
        {
          "date": "2020-03-16",
          "name": "四川",
          "value": "20"
        },
        {
          "date": "2020-03-16",
          "name": "贵州",
          "value": "0"
        },
        {
          "date": "2020-03-16",
          "name": "云南",
          "value": "1"
        },
        {
          "date": "2020-03-16",
          "name": "西藏",
          "value": "0"
        },
        {
          "date": "2020-03-16",
          "name": "陕西",
          "value": "10"
        },
        {
          "date": "2020-03-16",
          "name": "甘肃",
          "value": "40"
        },
        {
          "date": "2020-03-16",
          "name": "青海",
          "value": "0"
        },
        {
          "date": "2020-03-16",
          "name": "宁夏",
          "value": "0"
        },
        {
          "date": "2020-03-16",
          "name": "新疆",
          "value": "0"
        },
        {
          "date": "2020-03-16",
          "name": "台湾",
          "value": "38"
        },
        {
          "date": "2020-03-16",
          "name": "香港",
          "value": "60"
        },
        {
          "date": "2020-03-16",
          "name": "澳门",
          "value": "1"
        }]

    ]
    const option = {
       timeline:{
        checkpointStyle: {
          color: '#FFB6C1'
        },
        axisType: 'category',
        data: ['2020-01-18', '2020-01-19', '2020-01-20', '2020-01-21', '2020-01-22', '2020-01-23', '2020-01-24', '2020-01-25', '2020-01-26', '2020-01-27', ],
         autoPlay: true,
        playInterval: 2000,
         left: '15%',
         bottom: '0',
         width: '70%',
      },
       baseOption:{

        visualMap: {
          max: 120,
          calculable: true,
          inRange: {
            color: ['#edf0ff', '#ced4f6', '#9aa4e0', '#6470e1', '#4e46fe']
          },
          itemWidth: 10,
          itemHeight: 85,
          bottom: '5%',
          left: "5%",
        },
        tooltip: {},
        series: [{
          type: 'map',
          name: '确诊人数',
          map: 'china',
          roam: true
        }
        ]
      },
       options:[{
        series: [{
          data: data[0]
        },

        ]
      }, {
        series: [{
          data: data[1]
        },

        ]
      }, {
        series: [{
          data: data[2]
        },

        ]
      }, {
        series: [{
          data: data[3]
        },

        ]
      },{
        series: [{
          data: data[4]
        },

        ]
      }, {
        series: [{
          data: data[5]
        },

        ]
      }, {
        series: [{
          data: data[6]
        },
        ]
      }, {
        series: [{
          data: data[7]
        },

        ]
      }, {
        series: [{
          data: data[8]
        },

        ]
      }, {
        series: [{
          data: data[9]
        },

        ]
      }, {
        series: [{
          data: data[10]
        },

        ]
      }, {
        series: [{
          data: data[11]
        },

        ]
      }]

    };
    return option;
  }

  setNum = (num) => {
    this.setState({
      num: num,
    })
  }

  callback = (key) => {
    console.log(key);
  }
  render() {

    return (
      <Fragment>
          <div className={styles.head}>
            {/*<img src={pic} className={styles.pic}/>*/}
          </div>
          <div className={styles.title}>
            <Row>
              <Col span={6} onClick={()=>{this.setNum(1)}}>
                <span className={this.state.num == 1 ? styles.titlechoose : styles.titleItem}>
                  本日情况
                </span>
              </Col>
              <Col 
                span={6} onClick={()=>{this.setNum(2)}}>
                <span className={this.state.num == 2 ? styles.titlechoose : styles.titleItem} >
                  本月情况
                </span>              
              </Col>
              <Col span={6} onClick={()=>{this.setNum(3)}}>
                <span className={this.state.num == 3 ? styles.titlechoose : styles.titleItem} >
                  本年情况
                </span>          
              </Col>
              <Col span={6} onClick={()=>{this.setNum(4)}}>
                <span className={this.state.num == 4 ? styles.titlechoose : styles.titleItem} >
                  累计情况
                </span>                
              </Col>
            </Row>
          </div>
        <div className={styles.content}>
          <Row>
            <Col span={5} className={styles.left}>
              <div className={styles.lup}>
                <Table className={styles.lupword} dataSource={dataSource} columns={columns} size="small" />
              </div>
              <div className={styles.ldown}>
                <div><img src={virus} style={{height: '24px'}}/>疫情播报</div>
                <Row>
                  <Col span={1} style={{ marginLeft: '5px',marginTop: '20px'}}>
                    <img src={list} style={{height: '150px',objectFit:'cover'}}/>
                  </Col>
                  <Col span={19}>
                    <News />
                  </Col>
                </Row>
                
                {/*<Timeline>*/}
                {/*  <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>*/}
                {/*  <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>*/}
                {/*  <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>*/}
                {/*</Timeline>*/}
                
              </div>

            </Col>
            <Col span={13} className={styles.mid}>
              <div className={styles.mup}>
                <ReactEcharts option={this.getOptionmap()}  style={{ height: '64vh' }} />

              </div>
              <div className={styles.mdown}>

                <Row className={styles.fline} >
                  <Col className={styles.title1} span={6}>
                    <img src={virus} style={{height: '20px'}}/>本日使用次数
                  </Col>
                  <Col className={styles.title2} span={6}>
                    <img src={virus} style={{height: '20px'}}/>本日新用户
                  </Col>
                  <Col className={styles.title3} span={6}>
                    <img src={virus} style={{height: '20px'}}/>本日活跃用户/总注册用户
                  </Col>
                  <Col className={styles.title4} span={6}>
                    <img src={virus} style={{height: '20px'}}/>本日活跃占比
                  </Col>
                </Row>
                <Row className={styles.sline}>
                  <Col className={styles.title1} span={6}>1111</Col>
                  <Col className={styles.title2} span={6}>21</Col>
                  <Col className={styles.title3} span={6}>11/22</Col>
                  <Col className={styles.title4} span={6}>20%</Col>
                </Row>
                <Row className={styles.tline}>
                  <Col className={styles.title1} span={6}>同比昨日 +2</Col>
                  <Col className={styles.title2} span={6}>同比昨日 +2</Col>
                  <Col className={styles.title3} span={6}>同比昨日 +2</Col>
                  <Col className={styles.title4} span={6}>同比昨日 +2</Col>
                </Row>

              </div>
            </Col>
            <Col span={6} className={styles.right}>
              <div className={styles.rtitle}>
                <Radio.Group defaultValue="a" buttonStyle="solid" size="small">
                  <Radio.Button value="a">按小时分析</Radio.Button>
                  <Radio.Button value="b">按日分析</Radio.Button>
                  <Radio.Button value="c">按月分析</Radio.Button>
                </Radio.Group>
              </div>
              <div className={styles.r1}>
                <ReactEcharts option={this.getOption1()}  style={{ height: '20vh' }}/>

              </div>
              <div className={styles.r2}>
                <ReactEcharts option={this.getOption2()}  style={{ height: '20vh' }}/>

              </div>
              <div className={styles.r3}>
                <ReactEcharts option={this.getOption3()}  style={{ height: '20vh' }}/>

              </div>
              <div className={styles.r4}>
                <div style={{ height: '2vh',fontSize:12,color:'#849ad6',fontWeight:'bold',marginLeft:10 }}>本日使用类型占比分析</div>
                <ReactEcharts option={this.getOption4()}  style={{ height: '18vh' }}/>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    govShow: state.govShow,
  };
};
export default connect(mapStateToProps)(start);

