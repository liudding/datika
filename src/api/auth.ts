import request from '@/utils/request'

export function loginByUsername(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function refreshToken(data) {
  return request({
    url: '/refresh',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}

export function getUserProfile() {
  return request({
    url: '/me',
    method: 'get'
  })
}

export function changePassword(params) {
  return request({
    url: '/password',
    method: 'post',
    data: params
  })
}
