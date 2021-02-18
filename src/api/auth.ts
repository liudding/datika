import request from '@/utils/request'
import { env } from '@/utils/env'

type LoginParam = {
  username: string;
  password: string;
  deviceName?: string;
}

function login(data: LoginParam) {

  data.deviceName = data.deviceName || env();

  return request({
    url: '/login',
    method: 'post',
    data: {
      username: data.username,
      password: data.password,
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

export default {
  login,
  logout,
  profile,
}