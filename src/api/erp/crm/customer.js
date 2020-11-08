import request from '@/utils/request'

export default {

  // 获取客户列表(条件查询分页)
  getCustomerPageList(page,limit,customerQuery) {
    return request({
      url: `/crm/customer/${page}/${limit}`,
      method: 'get',
      data: customerQuery
    })
  }
}