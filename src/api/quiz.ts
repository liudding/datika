import request from '@/utils/request'

function list(query?: any) {
  return request({
    url: '/quizzes',
    params: query
  })
}

function show(id: number, query?: any) {
  return request({
    url: `/quizzes/${id}`,
    params: query
  })
}

function update(id: number, data: any) {
  return request({
    url: `/quizzes/${id}`,
    method: 'put',
    data
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

function studentRecords(id: number, query?: object) {
  return request({
    url: '/quizzes/' + id + '/student_records',
    params: query
  })
}

function records(id: number, query?: object) {
  return request({
    url: '/quizzes/' + id + '/records',
    params: query
  })
}

function record(id: number) {
  return request({
    url: '/records/' + id + '/',
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

function attachClassrooms(id: number, classrooms: number[]) {
  return request({
    url: `/quizzes/${id}/attach_classrooms`,
    data: {
      classrooms
    },
    method: 'post'
  })
}

function copy(id: number) {
  return request({
    url: `/quizzes/${id}/copy`,
    method: 'post'
  })
}

function archive(id: number) {
  return request({
    url: `/quizzes/${id}/archive`,
    method: 'post'
  })
}

function unarchive(id: number) {
  return request({
    url: `/quizzes/${id}/unarchive`,
    method: 'post'
  })
}

function students(id: number) {
  return request({
    url: `/quizzes/${id}/students`,
  })
}


export default {
  list,
  show,
  create,
  update,
  destroy,
  studentRecords,
  records,
  record,
  creteRecord,
  submit,
  questions,
  updateQuestion,
  attachClassrooms,
  copy,
  archive,
  unarchive,
  students
}