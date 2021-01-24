import request from '@/utils/request'

export function updateProfile(data) {
  return request({
    url: '/user/profile',
    method: 'put',
    data: data
  })
}
