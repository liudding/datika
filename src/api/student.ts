import request from '@/utils/request'

function list(query: any) {
  return request({
    url: '/students',
    params: query
  })
}

function show(id: number) {
  return request({
    url: `/students/${id}`,
  })
}

function update(id: number, data: any) {
  return request({
    url: `/students/${id}`,
    method: 'put',
    data
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