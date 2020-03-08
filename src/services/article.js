import request from '@/utils/request';

export async function ArticleList(params) {
  return request('/api/cms/article/list',{
    method:'POST',
    data:params,
    requestType:'form'
  })
}

export async function ArticleAdd(params) {
  return request('/api/cms/article/add',{
    method:'POST',
    data:params,
    requestType:'form'
  })
}

export async function ArticleRemove(ids) {
  return request('/api/cms/article/remove',{
    method:'POST',
    data:{
      ids
    },
    requestType:'form'
  })
}
