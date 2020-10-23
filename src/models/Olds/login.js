import { routerRedux } from 'dva/router';
import { fakeAccountLogin } from '../../services/api';
import { setAuthority } from '../../utils/authority';
import { reloadAuthorized } from '../../utils/Authorized';
import {push} from "connected-react-router";

export default {
  namespace: 'login',

  state: {
    status: undefined,
  },

  effects: {
    *login({ payload }, { call, put }) {
      // const response = yield call(fakeAccountLogin, payload);
      // console.log("response",response)

      yield put({
        type: 'changeLoginStatus',
        payload: payload.res.status,
      });
      // Login successfully
      if (payload.res.status === 200) {
        reloadAuthorized();
        yield put(push(`${payload.pushMenu}`))
      }
    },
    *logout(_, { put, select }) {
      try {
        // get location pathname
        const urlParams = new URL(window.location.href);
        const pathname = yield select(state => state.routing.location.pathname);
        // add the parameters in the url
        urlParams.searchParams.set('redirect', pathname);
        window.history.replaceState(null, 'login', urlParams.href);
      } finally {
        yield put({
          type: 'changeLoginStatus',
          payload: {
            status: false,
            currentAuthority: 'guest',
          },
        });
        reloadAuthorized();
        yield put(routerRedux.push('/user/login'));
      }
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      // console.log("payload",payload)
      if(payload === 200){
        setAuthority("admin");
      }else{
        setAuthority("guest");
      }
      // setAuthority(payload.currentAuthority);
      return {
        ...state,
        status: payload,
        // type: payload.type,
      };
    },
  },
};

