import request from '@/utils/request'

function list() {
  return request({
    url: '/quizzes',
    method: 'get'
  })
}

function show(id: number, query?: any) {
  return request({
    url: `/quizzes/${id}`,
    params: query
  })
}

function update(id: number) {
  return request({
    url: `/quizzes/${id}`,
    method: 'put'
  })
}



function create(data: any) {
  return request({
    url: `/quizzes`,
    method: 'post',
    data,
  })
}

function destroy(id: number) {
  return request({
    url: `/quizzes/${id}`,
    method: 'delete'
  })
}

function records(id: number) {
  return request({
    url: '/quizzes/' + id + '/records'
  })
}

function creteRecord(id: number, data: any) {
  return request({
    url: `/quizzes/${id}/records`,
    data,
    method: 'post'
  })
}

function submit(id: number, data: any) {
  return request({
    url: `/quizzes/${id}/records`,
    data,
    method: 'post'
  })
}

function questions(id: number) {
  return request({
    url: `/quizzes/${id}/questions`,
  })
}

function updateQuestion(question: number) {
  return request({
    url: `/questions/${question}`,
    method: 'put',
  })
}


export default {
  list,
  show,
  create,
  update,
  destroy,
  records,
  creteRecord,
  submit,
  questions,
  updateQuestion
}