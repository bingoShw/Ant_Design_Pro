import {ArticleList,ArticleRemove} from "../services/article";

const Model = {
  namespace:'article',
  state:{
    list:[],
    total:0
  },
  effects:{
    *initList({payload},{call,put}){
      const response = yield call(ArticleList,payload);
      if(response.code === 0){
        yield put({
          type:'setList',
          payload:response
        })
      }else {

      }
    },
    *deleteList({payload},{call,put}){
      const response = yield call(ArticleRemove,payload.ids);
      if(response.code === 0){
        yield put({
          type:'initList',
          payload:{
            pageNum:payload.pageNum,
            pageSize:payload.pageSize
          }
        })
      }else {

      }
    }
  },
  reducers:{
    setList(state,action){
      return {...state,list: action.payload.rows,total: action.payload.total}
    }
  }
};

export default Model
