/**
 * @description factor controller
 * @author Yang
 */

const { 
  getFactorInfo, 
  getFactorCategory,
  getFactorList,
  createFactor,
  updateFactor,
  deleteFactor
} = require('../services/factor')
const { SuccessModel, ErrorModel } = require('../model/Result')
const {
  factorExistInfo,
  changeInfoFailInfo,
  deleteFactorFailInfo
} = require('../model/ErrorInfo')


/**
 * 指标编号是否存在
 * @param {string} IndexName 指标名称
 */
async function isExist(id) {
  const factorInfo = await getFactorInfo(id)
  if (factorInfo) {
      return new SuccessModel(factorInfo)
  } else {
      return new ErrorModel(factorExistInfo)
  }
}

/**
 * 根据指标类别数值来做一层映射
 */
async function mapCategory() {
  let res = await getFactorCategory()
  res = res.map(item => {
    if(+item.dataValues['IndexType'] === 0) {
      item.dataValues['label'] = '未划分类别'
    } else if (+item.dataValues['IndexType'] === 1) {
      item.dataValues['label'] = '聚集程度指标'
    } else if (+item.dataValues['IndexType'] === 2) {
      item.dataValues['label'] = '开发强度指标'
    } else if (+item.dataValues['IndexType'] === 3) {
      item.dataValues['label'] = '空间分析指标'
    } else {
      item.dataValues['label'] = '安全保障指标'
    }
    return item.dataValues
  })
  // console.log(res);
  return new SuccessModel(res)
}

/**
 * 获取指标列表
 * @param listQuery {Arrary} 查询约束
 */
async function fetchList(listQuery) {
  let res = await getFactorList(listQuery)
  return new SuccessModel(res)
}

/**
 * 创建指标
 * @param data {Object} 指标信息
 */
async function registerFactor(data) {
  const {IndexName, id} = data
  const factor= await getFactorInfo({ id, IndexName })
  if (factor) {
    // 指标已存在
    return new ErrorModel(factorExistInfo)
  }
  await createFactor(data)
  return new SuccessModel()
}

/**
 * 更新指标
 * @param data {Object} 指标信息
 */
async function changeFactor(data) {
  const res =  await updateFactor(data)
  if(res) {
    return new SuccessModel()
  }
  return new ErrorModel(changeInfoFailInfo)
}

async function removeFactor(id) {
  const res =  await deleteFactor(id)
  if(res) {
    return new SuccessModel()
  }
  return new ErrorModel(deleteFactorFailInfo)
}

module.exports = {
  isExist,
  mapCategory,
  fetchList,
  registerFactor,
  changeFactor,
  removeFactor
}
