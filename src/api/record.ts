import request from '@/utils/request'

function list(quiz: number, query: object) {
  return request({
    url: '/quizzes/' + quiz + '/records',
    params: query
  })
}

function show(id: number, query?: any) {
  return request({
    url: `/records/${id}`,
    params: query
  })
}

function update(id: number) {
  return request({
    url: `/records/${id}`,
    method: 'put'
  })
}

function create(data: any) {
  return request({
    url: `/records`,
    method: 'post',
    data,
  })
}

function destroy(id: number) {
  return request({
    url: `/records/${id}`,
    method: 'delete'
  })
}




export default {
  list,
  show,
  create,
  update,
  destroy
}