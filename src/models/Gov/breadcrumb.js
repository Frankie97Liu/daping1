export default {
  namespace: 'breadcrumb',
  state: {
    list: [],
  },
  reducers: {
    setAllState(state, {payload: {list}}) {
      return {...state, list};
    },
  },
  effects: {},
};
