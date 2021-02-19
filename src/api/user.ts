import request from '@/utils/request'

function updateProfile(data: any) {
  return request({
    url: '/user/profile',
    method: 'put',
    data: data
  })
}

export default {
  updateProfile
}