import request from '@/utils/request';
/*export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    data: params,
  });
}*/

export async function fakeAccountLogin(params) {
  console.log(params)
  return request('/api/login', {
    method: 'POST',
    data:{
      username:params.userName,
      password:params.password,
      rememberMe:false
    },
    requestType:'form'
  });
}

export async function getFakeCaptcha(mobile) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
