import { MethodType, request } from '@@utils/request_0527';
import comJs from '../assets/js/common';

const webpath = comJs.webpath();

export const getMaterial = async () => {
  return request(`${webpath}av/getOjbInfo2`, MethodType.GET);
};
export const getOpenTable = async () => {
  return request(`${webpath}av/queryIfByClass`, MethodType.GET);
};
export const getWuLiYuan = async () => {
  return request(`${webpath}av/queryPhysicalRes`, MethodType.GET);
};
export const getTenant = async () => {
  return request(`${webpath}av/getTenantObjCount`, MethodType.GET);
};
export const getEMInfo = async () => {
  return request(`${webpath}av/queryKeyword`, MethodType.GET);
};
export const getTaskInfo = async () => {
  return request(`${webpath}av/getExecutionOverview`, MethodType.GET);
};
export const getChartPoint = async (time) => {
  return request(`${webpath}av/getExecutionInfoOverview`, MethodType.GET, {time});
};
export const getObjSum = async ({objectType, objectLevel}) => {
  return request(`${webpath}av/getObjCntextBylevel`, MethodType.GET, {objectType, objectLevel});
};
