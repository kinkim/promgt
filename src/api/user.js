import request from '@/utils/request'

export function login(data) {
  return request({
  // KINKIM_REFACTOR
    // url: '/vue-element-admin/user/login',
    url: '/authenticate',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
  // KINKIM_REFACTOR
    url: '/getInfo',
    method: 'post'
    // params: { token }
  })
}

export function logout() {
  return request({
  // KINKIM_REFACTOR
    // url: '/vue-element-admin/user/logout',
    url: '/user/logout',
    method: 'post'
  })
}
