import moment from 'moment';
import { notification } from 'antd';
import api from "../common/config";

// 分页显示总数
export function showTotal(pageSize, pageNumber, total) {
  const allSize = Math.ceil(total / pageSize);
  return `共 ${total} 条记录 第${pageNumber}/${allSize}页`;
}

export function getParams(params) {
  let paramStr = '';
  Object.keys(params)
    .forEach((item) => {
      if (paramStr === '') {
        paramStr = `${item}=${params[item]}`;
      } else {
        paramStr = `${paramStr}&${item}=${params[item]}`;
      }
    });
  return paramStr;
}

// 信息提示 type: success,info,warning,error
export function getNotification(type, text){
  return notification[type]({ message: text,duration: 1});
};
// 时间补0
export function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}

// 获取时间戳
export function getTimeDistance(type) {
  const now = new Date();
  const oneDay = 1000 * 60 * 60 * 24;

  if (type === 'today') {
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    return [moment(now), moment(now.getTime() + (oneDay - 1000))];
  }

  if (type === 'week') {
    let day = now.getDay();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);

    if (day === 0) {
      day = 6;
    } else {
      day -= 1;
    }

    const beginTime = now.getTime() - day * oneDay;

    return [moment(beginTime), moment(beginTime + (7 * oneDay - 1000))];
  }

  if (type === 'month') {
    const year = now.getFullYear();
    const month = now.getMonth();
    const nextDate = moment(now).add(1, 'months');
    const nextYear = nextDate.year();
    const nextMonth = nextDate.month();

    return [
      moment(`${year}-${fixedZero(month + 1)}-01 00:00:00`),
      moment(moment(`${nextYear}-${fixedZero(nextMonth + 1)}-01 00:00:00`).valueOf() - 1000),
    ];
  }

  if (type === 'year') {
    const year = now.getFullYear();

    return [moment(`${year}-01-01 00:00:00`), moment(`${year}-12-31 23:59:59`)];
  }
}

export function getPlainNode(nodeList, parentPath = '') {
  const arr = [];
  nodeList.forEach(node => {
    const item = node;
    item.path = `${parentPath}/${item.path || ''}`.replace(/\/+/g, '/');
    item.exact = true;
    if (item.children && !item.component) {
      arr.push(...getPlainNode(item.children, item.path));
    } else {
      if (item.children && item.component) {
        item.exact = false;
      }
      arr.push(item);
    }
  });
  return arr;
}

export function digitUppercase(n) {
  const fraction = ['角', '分'];
  const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  const unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
  let num = Math.abs(n);
  let s = '';
  fraction.forEach((item, index) => {
    s += (digit[Math.floor(num * 10 * 10 ** index) % 10] + item).replace(/零./, '');
  });
  s = s || '整';
  num = Math.floor(num);
  for (let i = 0; i < unit[0].length && num > 0; i += 1) {
    let p = '';
    for (let j = 0; j < unit[1].length && num > 0; j += 1) {
      p = digit[num % 10] + unit[1][j] + p;
      num = Math.floor(num / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }

  return s
    .replace(/(零.)*零元/, '元')
    .replace(/(零.)+/g, '零')
    .replace(/^整$/, '零元整');
}

function getRelation(str1, str2) {
  if (str1 === str2) {
    console.warn('Two path are equal!'); // eslint-disable-line
  }
  const arr1 = str1.split('/');
  const arr2 = str2.split('/');
  if (arr2.every((item, index) => item === arr1[index])) {
    return 1;
  } else if (arr1.every((item, index) => item === arr2[index])) {
    return 2;
  }
  return 3;
}

function getRenderArr(routes) {
  let renderArr = [];
  renderArr.push(routes[0]);
  for (let i = 1; i < routes.length; i += 1) {
    let isAdd = false;
    // 是否包含
    isAdd = renderArr.every(item => getRelation(item, routes[i]) === 3);
    // 去重
    renderArr = renderArr.filter(item => getRelation(item, routes[i]) !== 1);
    if (isAdd) {
      renderArr.push(routes[i]);
    }
  }
  return renderArr;
}

/**
 * Get router routing configuration
 * { path:{name,...param}}=>Array<{name,path ...param}>
 * @param {string} path
 * @param {routerData} routerData
 */
export function getRoutes(path, routerData) {
  let routes = Object.keys(routerData).filter(
    routePath => routePath.indexOf(path) === 0 && routePath !== path
  );
  // Replace path to '' eg. path='user' /user/name => name
  routes = routes.map(item => item.replace(path, ''));
  // Get the route to be rendered to remove the deep rendering
  const renderArr = getRenderArr(routes);
  // Conversion and stitching parameters
  const renderRoutes = renderArr.map(item => {
    const exact = !routes.some(route => route !== item && getRelation(route, item) === 1);
    return {
      exact,
      ...routerData[`${path}${item}`],
      key: `${path}${item}`,
      path: `${path}${item}`,
    };
  });
  return renderRoutes;
}

/* eslint no-useless-escape:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;

export function isUrl(path) {
  return reg.test(path);
}

// 数组去重
export function dedupe(array) {
  return Array.from(new Set(array));
}

// css module
export function setclass(...classname) {
  let classArr = classname.toString().split(" ");
  let newClass = "";
  // 正则去除多余的属性
  classArr.map((item)=>{
    let originClass = item.match(/(__)([a-zA-Z0-9]*)(__)/)[2];
    // console.log("xx",item,originClass)
    newClass+= `${item} ${originClass} `
  })
  // console.log("xx",newClass)
  return newClass;
}

// 数据类型判断
// String Array Object Boolean Null Undefined Function
export function isType(args) {
  return Object.prototype.toString.apply(args).replace('[object','').replace(']','');
}


// 校验手机号
export function validatePhone(rule, value, callback) {
  const regexp = /[0-9]{3,4}[-][0-9]{8}/;
  const reg = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/;
  if (value && !reg.test(value) && !regexp.test(value)) {
    callback('请输入正确的手机号码');
  } else {
    callback();
  }
}

// 校验身份证号
export function validateIdCard(rule, value, callback, isIds) {
  const idCardReg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i;
  if (isIds && value && !idCardReg.test(value)) {
    callback('身份证号码格式出错');
  } else {
    callback();
  }
}

// 校验请输入正确的银行卡号
export function validateBankCardNo(rule, value, callback) {

  const lastNum = value.substr(value.length - 1, 1);

  const first15Num = value.substr(0, value.length - 1);
  const newArr = [];
  for (let i = first15Num.length - 1; i > -1; i--) {
    newArr.push(first15Num.substr(i, 1));
  }
  const arrJiShu = [];
  const arrJiShu2 = [];

  const arrOuShu = [];
  for (let j = 0; j < newArr.length; j++) {
    if ((j + 1) % 2 === 1) {
      if (parseInt(newArr[j]) * 2 < 9)
        arrJiShu.push(parseInt(newArr[j]) * 2);
      else
        arrJiShu2.push(parseInt(newArr[j]) * 2);
    }
    else
      arrOuShu.push(newArr[j]);
  }

  const jishu_child1 = [];
  const jishu_child2 = [];
  for (let h = 0; h < arrJiShu2.length; h++) {
    jishu_child1.push(parseInt(arrJiShu2[h]) % 10);
    jishu_child2.push(parseInt(arrJiShu2[h]) / 10);
  }

  let sumJiShu = 0;
  let sumOuShu = 0;
  let sumJiShuChild1 = 0;
  let sumJiShuChild2 = 0;
  let sumTotal = 0;
  for (let m = 0; m < arrJiShu.length; m++) {
    sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
  }

  for (let n = 0; n < arrOuShu.length; n++) {
    sumOuShu = sumOuShu + parseInt(arrOuShu[n]);
  }

  for (let p = 0; p < jishu_child1.length; p++) {
    sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p]);
    sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p]);
  }
  //计算总和
  sumTotal = parseInt(sumJiShu) + parseInt(sumOuShu) + parseInt(sumJiShuChild1) + parseInt(sumJiShuChild2);

  //计算luhn值
  const k = parseInt(sumTotal) % 10 === 0 ? 10 : parseInt(sumTotal) % 10;
  const luhn = 10 - k;


  const regexp = /^([1-9]{1})(\d{15}|\d{18})$/;

  if ((parseInt(lastNum) === parseInt(luhn)) && (!value || regexp.test(value))) {
    callback();
  } else {
    callback('请输入正确的银行卡号');
  }
}
// 文件流形式的下载方法
export function fileDown({params, url, fileName}) {
  const oReq = new XMLHttpRequest();
  oReq.open('GET', `${url}?${getParams(params)}`, true);
  oReq.responseType = 'blob';
  oReq.onload = function () {
    const content = oReq.response;
    const elink = document.createElement('a');
    elink.download = fileName;
    elink.style.display = 'none';
    const blob = new Blob([content]);
    elink.href = URL.createObjectURL(blob);
    document.body.appendChild(elink);
    elink.click();
    document.body.removeChild(elink);
  };
  oReq.send();
}
