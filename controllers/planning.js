const { 
  getPlanning,
} = require('../services/planning')
const { SuccessModel, ErrorModel } = require('../model/Result')

/**
 * 获取分区所属与分区编码
 * @param listQuery {Arrary} 查询约束
 */
async function fetchPlanning() {
  let res = await getPlanning()
  return new SuccessModel(res)
}

module.exports = {
  fetchPlanning
}
