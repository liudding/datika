import request from '@/utils/request'

export function getClassrooms() {
  return request({
    url: '/classrooms',
    method: 'get'
  })
}
