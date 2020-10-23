import axios from 'axios';
import { message } from 'antd';
import { access_token } from './utils';


export const MethodType = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
};

/**
 * 模块说明:有api_token的请求
 */
export const request = (url, method = MethodType.GET, params = {}, config = {}) => {
  const data = (method === 'GET') ? 'params' : 'data';
  let headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  if (config.headers) {
    headers = {
      ...headers,
      ...config.headers,
    };
  }
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      [data]: {...params, access_token},
      headers,
    }).then(resolve)
      .catch(error => {
        console.dir(error);
        message.error(typeof error.response.data === 'string' ? error.response.data : JSON.stringify(error.response.data));
        reject(error);
      });
  });
};
