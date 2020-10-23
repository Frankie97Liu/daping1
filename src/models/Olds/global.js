import { queryNotices } from '../../services/api';

export default {
  namespace: 'global',

  state: {
    collapsed: false,
    notices: [],
    theme:(()=>{
      let  userStyle='';
      //接口： 1 green ; 2 red ; 3 blue ; 4 orange 默认;   5 black ; 6 babyBlue
      //本地： 1CyanBlue; 2glassBlue ;3glassOrange  ;4default;
      if(window.sessionStorage.userStyle==1) {
        userStyle='CyanBlue';
      }else if(window.sessionStorage.userStyle==2){
       userStyle='glassBlue';
      }else if(window.sessionStorage.userStyle==3){
        userStyle='glassOrange';
      }else{
       userStyle='default';
      }
      return userStyle;
    })(),
  },

  effects: {
    *fetchNotices(_, { call, put }) {
      const data = yield call(queryNotices);
      yield put({
        type: 'saveNotices',
        payload: data,
      });
      yield put({
        type: 'user/changeNotifyCount',
        payload: data.length,
      });
    },
    *clearNotices({ payload }, { put, select }) {
      yield put({
        type: 'saveClearedNotices',
        payload,
      });
      const count = yield select(state => state.global.notices.length);
      yield put({
        type: 'user/changeNotifyCount',
        payload: count,
      });
    },
  },

  reducers: {
    changeLayoutCollapsed(state, { payload }) {
      return {
        ...state,
        collapsed: payload,
      };
    },
    saveNotices(state, { payload }) {
      return {
        ...state,
        notices: payload,
      };
    },
    saveClearedNotices(state, { payload }) {
      return {
        ...state,
        notices: state.notices.filter(item => item.type !== payload),
      };
    },
    changeTheme(state,{ payload }) {
      return {
        ...state,
        theme: payload,
      };
    },
  },

  subscriptions: {
    setup({ history }) {
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      return history.listen(({ pathname, search }) => {
        if (typeof window.ga !== 'undefined') {
          window.ga('send', 'pageview', pathname + search);
        }
      });
    },
  },
};
