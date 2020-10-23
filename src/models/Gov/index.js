/* eslint-disable */
import * as services from '@@services/govServices';
import {getNotification, fileDown} from '@@utils/utils';
import api from '../../common/config';

export default {
  namespace: 'govShow',
  state: {
    topImgData: [],
    topImgDataleft: [],
    playInfoData: [],
    guoyouPlayData: [],
    noticeData: [],
    programData: [],
    expertData: [],
    introduceData: {
      TITLE: '',
      CONTENT: '',
      UPDATE_TIME: '',
    },
    prizeShowData: {
      TITLE: '',
      CONTENT: '',
      UPDATE_TIME: '',
    },
    dataList: [],
    total: 0,
    curPage: 1,
    pageSize: 10,
    spinning: false,
    dataDownload: {
      list: [],
      total: 100,
      params: {
        pageSize: 25,
        pageNumber: 1,
      },
      spinning: false,
    },
    winners: {
      list: [],
      total: 100,
      params: {
        pageSize: 5,
        pageNumber: 1,
        date: '',
      },
      yearList: [],
      info: {},
      spinning: false,
    },
    review: {
      info: {},
      spinning: false,
    },
  },
  reducers: {
    saveState(state, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
    saveDataDownload(state, {payload}) {
      const {dataDownload} = state;
      return {
        ...state,
        dataDownload: {
          ...dataDownload,
          ...payload,
        },
      };
    },
    saveWinners(state, {payload}) {
      const {winners} = state;
      return {
        ...state,
        winners: {
          ...winners,
          ...payload,
        },
      };
    },
    saveReview(state, {payload}) {
      const {review} = state;
      return {
        ...state,
        review: {
          ...review,
          ...payload,
        },
      };
    },
  },
  effects: {
    * fileList({payload: {pageSize, pageNumber}}, {call, put}) {
      yield put({type: 'saveDataDownload', payload: {spinning: true}})
      const params = {pageSize, curPage: pageNumber}
      const res = yield call(services.fileList, params);
      if (res && res.code === 1) {
        yield put({
          type: 'saveDataDownload',
          payload: {
            list: res.data,
            total: res.total,
            params: {pageSize, pageNumber},
            spinning: false,
          }
        })
      } else {
        yield put({
          type: 'saveDataDownload',
          payload: {
            list: [],
            total: 100,
            params: {pageSize: 25, pageNumber: 1},
            spinning: false,
          },
        })
        getNotification('error', '获取资料文件数据失败');
      }
    },
    * fileDownload({payload: {fileId, fileName}}, {call, put}) {
      fileDown({params: {fileId}, url: `${api.apiFileDownload}`, fileName});
    },

    * prizeList({payload: {pageSize, pageNumber, date}}, {call, put}) {
      yield put({type: 'saveWinners', payload: {spinning: true}})
      const params = {pageSize, curPage: pageNumber, date, flag: 1}
      const res = yield call(services.prizeList, params);
      if (res && res.code === 1) {
        yield put({
          type: 'saveWinners',
          payload: {
            list: res.data,
            total: res.total,
            params: {pageSize, pageNumber, date},
            spinning: false,
          }
        })
      } else {
        yield put({
          type: 'saveWinners',
          payload: {
            list: [],
            total: 100,
            params: {pageSize: 5, pageNumber: 1},
            spinning: false,
          },
        })
        getNotification('error', '获取获奖名单数据失败');
      }
    },
    * prizeYear(_, {call, put}) {
      const res = yield call(services.prizeYear);
      if (res && res.code === 1) {
        yield put({
          type: 'saveWinners',
          payload: {yearList: res.data}
        })
      } else {
        yield put({
          type: 'saveWinners',
          payload: {yearList: []}
        })
        getNotification('error', '获取下拉年度数据失败');
      }
    },
    * getPrizeById({payload: {prizeId}}, {call, put}) {
      yield put({type: 'saveWinners', payload: {spinning: true}})
      const res = yield call(services.getPrizeById, {prizeId});
      if (res && res.code === 1) {
        const info = res.data.length !== 0 ? res.data[0] : {};
        yield put({type: 'saveWinners', payload: {info, spinning: false}})
      } else {
        yield put({type: 'saveWinners', payload: {info: {}, spinning: false}})
        getNotification('error', '获取获奖详情失败');
      }
    },

    * articleList(_, {call, put}) {
      yield put({type: 'saveReview', payload: {spinning: true}})
      const params = {pageSize: 1, curPage: 1, type: 5, flag: 1}
      const res = yield call(services.articleList, params);
      if (res && res.code === 1) {
        const info = res.data.length !== 0 ? res.data[0] : {};
        yield put({type: 'saveReview', payload: {info, spinning: false}})
      } else {
        yield put({type: 'saveReview', payload: {info: {}, spinning: false}})
        getNotification('error', '获取评审办法失败');
      }
    },

    * picInfoList({payload: {pageSize, curPage, type}}, {call, put}) {
      yield put({type: 'saveState', payload: {spinning: true}})
      const params = {pageSize, curPage, type, flag: 1};
      yield put({
        type: 'saveState',
        payload: {
          dataList: [],
          total: 0,
          //spinning: false,
        },
      })
      const res = yield call(services.articleList, params);
      if (res && res.code === 1) {
        console.log(res.count)
        const info = res.data.length !== 0 ? res.data : {};
        yield put({
          type: 'saveState',
          payload: {
            dataList: info,
            total: res.count,
            spinning: false,
          },
        })
      } else {
        yield put({
          type: 'saveState',
          payload: {
            dataList: [],
            total: 0,
            spinning: false,
          },
        })
        getNotification('error', '获取列表数据失败');
      }
    },
    * getPicinfoById({payload: {articleId, setContent}}, {call, put}) {
      yield put({type: 'saveWinners', payload: {spinning: true}})
      const res = yield call(services.getPicinfoById, {articleId});
      if (res && res.code === 1) {
        const info = res.data.length !== 0 ? res.data[0] : {};
        yield put({type: 'saveWinners', payload: {info, spinning: false}})
        if (info.CONTENT) {
          setContent(info.CONTENT)
        } else {
          setContent('')
        }
      } else {
        yield put({type: 'saveWinners', payload: {info: {}, spinning: false}})
        getNotification('error', '获取详情失败');
      }
    },

    * getTopImg({payload: {}}, {call, put}) {
      yield put({type: 'saveState', payload: {spinning: true}})
      const res = yield call(services.getTopImg, {bannerType: 2});
      if (res && res.code === 1) {
        //const info = res.data.length !== 0 ? res.data[0] : {};
        yield put({
          type: 'saveState',
          payload: {
            topImgData: res.data,
            spinning: false,
          },
        })
      } else {
        yield put({
          type: 'saveState',
          payload: {
            topImgData: [],
            spinning: false,
          },
        })
        getNotification('error', '获取顶部轮播图数据失败！');
      }
    },
    * getTopImgleft({payload: {}}, {call, put}) {
      yield put({type: 'saveState', payload: {spinning: true}})
      const res = yield call(services.getTopImg, {bannerType: 1});
      if (res && res.code === 1) {
        //const info = res.data.length !== 0 ? res.data[0] : {};
        yield put({
          type: 'saveState',
          payload: {
            topImgDataleft: res.data,
            spinning: false,
          },
        })
      } else {
        yield put({
          type: 'saveState',
          payload: {
            topImgDataleft: [],
            spinning: false,
          },
        })
        getNotification('error', '获取顶部轮播图数据失败！');
      }
    },
    * getPlayInfo({payload: {}}, {call, put}) {
      yield put({type: 'saveState', payload: { playInfoData:[],spinning: true}})
      const res = yield call(services.articleList, {pageSize: 5, curPage: 1, type: 2, flag: 1});
      if (res && res.code === 1) {
        yield put({
          type: 'saveState',
          payload: {
            playInfoData: res.data,
            spinning: false,
          },
        })
      } else {
        yield put({
          type: 'saveState',
          payload: {
            playInfoData: [],
            spinning: false,
          },
        })
        getNotification('error', '获取动态信息数据失败！');
      }
    },
    * getGuoyouPlay({payload: {}}, {call, put}) {
      yield put({type: 'saveState', payload: {spinning: true}})
      const res = yield call(services.articleList, {pageSize: 8, curPage: 1, type: 3, flag: 1});
      if (res && res.code === 1) {
        yield put({
          type: 'saveState',
          payload: {
            guoyouPlayData: res.data,
            spinning: false,
          },
        })
      } else {
        yield put({
          type: 'saveState',
          payload: {
            guoyouPlayData: [],
            spinning: false,
          },
        })
        getNotification('error', '获取国优动态数据失败！');
      }
    },
    * getNotice({payload: {}}, {call, put}) {
      yield put({type: 'saveState', payload: {spinning: true}})
      const res = yield call(services.articleList, {pageSize: 5, curPage: 1, type: 4, flag: 1});
      if (res && res.code === 1) {
        yield put({
          type: 'saveState',
          payload: {
            noticeData: res.data,
            spinning: false,
          },
        })
      } else {
        yield put({
          type: 'saveState',
          payload: {
            noticeData: [],
            spinning: false,
          },
        })
        getNotification('error', '获取通知公告数据失败！');
      }
    },
    * getProgram({payload: {}}, {call, put}) {
      yield put({type: 'saveState', payload: {spinning: true}})
      const res = yield call(services.articleList, {pageSize: 12, curPage: 1, type: 7, flag: 1});
      if (res && res.code === 1) {
        yield put({
          type: 'saveState',
          payload: {
            programData: res.data,
            spinning: false,
          },
        })
      } else {
        yield put({
          type: 'saveState',
          payload: {
            programData: [],
            spinning: false,
          },
        })
        getNotification('error', '获取国优工程风采数据失败！');
      }
    },
    * getExpert({payload: {}}, {call, put}) {
      yield put({type: 'saveState', payload: {spinning: true}})
      const res = yield call(services.getExpert, {page: 1, rows: 12});
      if (res && res.code === 1) {
        yield put({
          type: 'saveState',
          payload: {
            expertData: res.data,
            spinning: false,
          },
        })
      } else {
        yield put({
          type: 'saveState',
          payload: {
            expertData: [],
            spinning: false,
          },
        })
        getNotification('error', '获取专家团队数据失败！');
      }
    },
    * getIntroduce({payload: {}}, {call, put}) {
      // yield put({type: 'saveState', payload: {spinning: true}})
      yield put({type: 'saveState', payload: {   introduceData: {TITLE: '', CONTENT: '', UPDATE_TIME: '',},spinning: true}})

      const res = yield call(services.articleList, {pageSize: 1, curPage: 1, type: 1, flag: 1});
      if (res && res.code === 1) {
        yield put({
          type: 'saveState',
          payload: {
            introduceData: res.data[0],
            spinning: false,
          },
        })
      } else {
        yield put({
          type: 'saveState',
          payload: {
            introduceData: {},
            spinning: false,
          },
        })
        getNotification('error', '获取国优介绍数据失败！');
      }
    },
    * getIntitute({payload: {}}, {call, put}) {
      // yield put({type: 'saveState', payload: {spinning: true}})
      yield put({type: 'saveState', payload: {   introduceData: {TITLE: '', CONTENT: '', UPDATE_TIME: '',},spinning: true}})

      const res = yield call(services.articleList, {pageSize: 1, curPage: 1, type: 9, flag: 1});
      if (res && res.code === 1) {
        yield put({
          type: 'saveState',
          payload: {
            introduceData: res.data[0],
            spinning: false,
          },
        })
      } else {
        yield put({
          type: 'saveState',
          payload: {
            introduceData: {},
            spinning: false,
          },
        })
        getNotification('error', '获取国优介绍数据失败！');
      }
    },
    * getPrizeShow({payload: {}}, {call, put}) {
      const res = yield call(services.articleList, {pageSize: 1, curPage: 1, type: 6, flag: 1});
      if (res && res.code === 1) {
        yield put({
          type: 'saveState',
          payload: {
            prizeShowData: res.data[0],
          },
        })
      } else {
        yield put({
          type: 'saveState',
          payload: {
            prizeShowData: {
              TITLE: '',
              CONTENT: '',
              UPDATE_TIME: '',
            }
          },
        })
        getNotification('error', '获取奖项展示数据失败！');
      }
    },

  },
};
