import request from '@/utils/request'

function get() {
  return request({
    url: 'settings',
    method: 'get'
  })
}

function update(data: any) {
    return request({
      url: 'settings',
      data,
      method: 'put'
    })
  }
  



export default {
  get,
  update,
}