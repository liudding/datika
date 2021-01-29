import request from '@/utils/request'

function list() {
  return request({
    url: '/students',
    method: 'get'
  })
}

function show(id: number) {
  return request({
    url: `/students/${id}`,
  })
}

function update(id: number) {
  return request({
    url: `/students/${id}`,
    method: 'put'
  })
}

function destroy(id: number) {
  return request({
    url: `/students/${id}`,
    method: 'delete'
  })
}


export default {
  list,
  show,
  update,
  destroy
}