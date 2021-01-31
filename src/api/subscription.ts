import request from '@/utils/request'

function plans() {
  return request({
    url: '/plans',
    method: 'get'
  })
}

function subscribe(plan: number) {
  return request({
    url: `/plans/${plan}/subscribe`,
    method: 'post'
  })
}

function subscriptions() {
  return request({
    url: '/subscriptions'
  })
}

export default {
  plans,
  subscribe,
  subscriptions
}