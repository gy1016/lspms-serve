/**
 * @description home controller
 * @author Yang
 */

const { 
    getFactorList,
} = require('../services/home')
const { SuccessModel, ErrorModel } = require('../model/Result')
const {
    factorExistInfo,
    changeInfoFailInfo,
    deleteFactorFailInfo
} = require('../model/ErrorInfo')
  
/**
 * 获取指标列表
 * @param listQuery {Arrary} 查询约束
 */
async function fetchList(listQuery) {
    let res = await getFactorList(listQuery)
    return new SuccessModel(res)
}

module.exports = {
    fetchList
}