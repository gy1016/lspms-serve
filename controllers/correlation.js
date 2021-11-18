/**
 * @description correlation controller
 * @author Yang
 */

const { getCorrelationList, getTimeList } = require('../services/correlation')
const { SuccessModel } = require('../model/Result')

/**
 * 获取关联度列表
 * @param listQuery {Arrary} 查询约束
*/
async function fetchList(listQuery) {
  let res = await getCorrelationList(listQuery)
  return new SuccessModel(res)
}

/**
 * 获取时间列表
*/
async function fetchTimeList() {
  let res = await getTimeList()
  return new SuccessModel(res)
}

module.exports = {
  fetchList,
  fetchTimeList
}
