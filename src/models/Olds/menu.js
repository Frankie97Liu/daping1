// // import { queryMenus } from '../services/menu';
// import { refreshRouterData } from '../common/router';
// import axios from 'axios';
//
// export default {
//   namespace: 'menu',
//
//   state: {
//     list: [],
//     routerData: {},
//   },
//
//   effects: {
//     *fetch({ payload }, { call, put }) {
//       const webpath = 'http://172.16.14.106:26611/dc/server/'
//       const queryMenus = function getData() {
//         return axios.get(`${webpath}base/getAntdMenus`, {
//           withCredentials: true,
//           params: {
//             access_token: sessionStorage.access_token,
//             loginId: sessionStorage.loginId,
//             parentId: "ROOT",
//           },
//         })
//       }
//       const response = yield call(queryMenus, payload);
//       refreshRouterData(Array.isArray(response) ? response : []);
//       yield put({
//         type: 'queryList',
//         payload: Array.isArray(response) ? response : [],
//       });
//     },
//   },
//
//   reducers: {
//     queryList(state, action) {
//       return {
//         ...state,
//         list: action.payload,
//       };
//     },
//   },
// };
