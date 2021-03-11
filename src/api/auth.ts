import request from '@/utils/request'
import { client } from '@/utils/env'

type LoginParam = {
  username: string;
  password?: string;
  mobile?: string;
  code?: string;
  deviceName?: string;
}

function login(data: LoginParam) {

  data.deviceName = data.deviceName as any || client();

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

function register(data: any) {

  data.deviceName = data.deviceName || client();

  return request({
    url: '/register',
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

function registerWithNoVerification(data: any) {

  data.deviceName = data.deviceName || client();

  return request({
    url: '/register/no_verification',
    method: 'post',
    data: {
      mobile: data.mobile,
      password: data.password,
      name: data.name,
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
  register,
  registerWithNoVerification,
  logout,
  profile,
  getVerificationCode
}