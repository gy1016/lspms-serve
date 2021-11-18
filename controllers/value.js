const { 
  getValueList,
} = require('../services/value')
const { SuccessModel, ErrorModel } = require('../model/Result')

/**
 * 获取指标列表
 * @param listQuery {Arrary} 查询约束
 */
async function fetchList(listQuery) {
  let res = await getValueList(listQuery)
  return new SuccessModel(res)
}

module.exports = {
  fetchList
}
