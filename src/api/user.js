import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/erp/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/erp/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/erp/user/logout',
    method: 'post'
  })
}
