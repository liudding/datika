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

function create(data: any) {
  return request({
    url: `/classrooms`,
    method: 'post',
    data
  })
}

function update(id: number) {
  return request({
    url: `/classrooms/${id}`,
    method: 'put'
  })
}

function archive(id: number) {
  return request({
    url: `/classrooms/${id}/archive`,
    method: 'post'
  })
}

function unarchive(id: number) {
  return request({
    url: `/classrooms/${id}/unarchive`,
    method: 'post'
  })
}

function destroy(id: number) {
  return request({
    url: `/classrooms/${id}`,
    method: 'delete'
  })
}

function students(classroom: number, query: object) {
  return request({
    url: '/classrooms/' + classroom + '/students',
    params: query
  })
}

function createStudent(id: number, data: any) {
  return request({
    url: `/classrooms/${id}/students/`,
    method: 'post',
    data: data
  })
}

export default {
  list,
  show,
  create,
  update,
  archive,
  unarchive,
  destroy,
  students,
  createStudent
}