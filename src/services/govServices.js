import request from '../utils/request';
import api from '../common/config';
import {getParams} from '../utils/utils';

export async function fileList(params) {
  return request(`${api.apiFileList}?${getParams(params)}`);
}
export async function prizeList(params) {
  return request(`${api.apiPrizeList}?${getParams(params)}`);
}
export async function prizeYear() {
  return request(`${api.apiPrizeYear}`);
}
export async function getPrizeById(params) {
  return request(`${api.apiGetPrizeById}?${getParams(params)}`);
}
export async function articleList(params) {
  return request(`${api.apiArticleList}?${getParams(params)}`);
}
export async function getPicinfoById(params) {
  return request(`${api.apiArticleById}?${getParams(params)}`);
}
export async function getTopImg(params) {
  return request(`${api.apiTopImg}?${getParams(params)}`);
}
export async function getExpert(params) {
  return request(`${api.apiExpert}?${getParams(params)}`);
}
