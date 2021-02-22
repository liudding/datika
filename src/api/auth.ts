import request from '@/utils/request'
import { env } from '@/utils/env'

type LoginParam = {
  username: string;
  password?: string;
  mobile?: string;
  code?: string;
  deviceName?: string;
}

function login(data: LoginParam) {

  data.deviceName = data.deviceName || env();

  return request({
    url: data.code ? '/login/verification_code' : '/login',
    method: 'post',
    data: {
      username: data.username,
      mobile: data.mobile,
      password: data.password,
      code: data.code,
      "device_name": data.deviceName
    }
  })
}

function refreshToken() {
  return request({
    url: '/refresh',
    method: 'post'
  })
}

function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}

function profile() {
  return request({
    url: '/me',
    method: 'get'
  })
}

function getVerificationCode(mobile: string, type = 'authenticate') {
  return request({
    url: '/verification_code',
    method: 'post',
    data: {
      mobile: mobile,
      type
    }
  })
}

export default {
  login,
  logout,
  profile,
  getVerificationCode
}