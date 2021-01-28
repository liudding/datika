import request from '@/utils/request'

function list() {
  return request({
    url: '/classrooms',
    method: 'get'
  })
}

function show(id: number) {
  return request({
    url: `/classrooms/${id}`,
  })
}

function update(id: number) {
  return request({
    url: `/classrooms/${id}`,
    method: 'put'
  })
}

function destroy(id: number) {
  return request({
    url: `/classrooms/${id}`,
    method: 'delete'
  })
}

function students(classroom: number) {
  return request({
    url: '/classrooms/' + classroom + '/students'
  })
}

export default {
  list,
  show,
  update,
  destroy,
  students
}