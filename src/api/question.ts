import request from '@/utils/request'

function list(quiz: number) {
  return request({
    url: `/quizzes/${quiz}/questions`,
    method: 'get'
  })
}

function show(id: number) {
  return request({
    url: `/questions/${id}`,
  })
}

function update(id: number, data: any) {
  if (data.type && typeof data.type === 'string') {
    const type = data.type as string;
    switch (type) {
      case 'single_choice':
        data.type = 1;
        break;
      case 'multi_choice':
        data.type = 2;
        break;
      case 'boolean':
        data.type = 3;
        break;
    }
  }
  return request({
    url: `/questions/${id}`,
    method: 'put',
    data
  })
}



function create(quiz: number, data: any) {
  return request({
    url: `quizzes/${quiz}/questions`,
    method: 'post',
    data,
  })
}

function set(quiz: number, data: any) {
  return request({
    url: `quizzes/${quiz}/questions/set`,
    method: 'post',
    data: {
      questions: data
    }
  })
}

function batchCreate(quiz: number, data: any) {
  return request({
    url: `quizzes/${quiz}/questions/batch`,
    method: 'post',
    data,
  })
}

function destroy(id: number) {
  return request({
    url: `/questions/${id}`,
    method: 'delete'
  })
}

function batchDestroy(quiz: number, ids: number[]) {
  return request({
    url: `/quizzes/${quiz}/questions/batch`,
    method: 'delete',
    data: {
      ids
    }
  })
}

function trim(quiz: number, data: any) {
  return request({
    url: `/quizzes/${quiz}/questions/trim`,
    method: 'delete',
    data
  })
}

export default {
  list,
  show,
  set,
  create,
  batchCreate,
  update,
  destroy,
  batchDestroy,
  trim
}