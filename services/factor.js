/**
 * @description factor service
 * @author Yang
 */

const { Factor } = require('../db/model/index')
const sequelize = require('sequelize')
const { Op } = require("sequelize")

/**
 * 获取指标信息
 * @param {string} factorId 指标编号
 */
async function getFactorInfo({id, IndexName}) {
  // 查询条件
  // const whereOpt = {
  //   factor_id: factorId
  // }
  let whereOpt = {}
  if(id){
    whereOpt.id = id
  }
  if(IndexName){
    whereOpt.IndexName = IndexName
  }
  console.log('whereOpt********************:',whereOpt)
  // 查询
  const result = await Factor.findOne({
    where: whereOpt
  })
  if(result == null) {
    // 未找到
    return result
  }

  return result.dataValues
}

/**
 * 获取指标类别
 */
async function getFactorCategory() {
  const result = await Factor.findAll({
    attributes: [
      'IndexType',
      [sequelize.fn('COUNT', sequelize.col('IndexType')), 'num']
    ],
    group: 'IndexType'
  })
  // console.log(result);
  return result
}

/**
 * 获取指标列表
 * @param {Array} listQuery 查询条件
 */
async function getFactorList(listQuery) {
  const { IndexName, Remark, IndexType, page, limit, sort, from } = listQuery
  let result
  if(from === 'home'){
    if (IndexType) {
      result = await Factor.findAll({
        attributes: ['id', 'IndexName', 'IndexType'],
        where: {
          IndexType
        }
      });
    } else {
      result = await Factor.findAll({
        attributes: ['id', 'IndexName', 'IndexType', 'AlarmValue']
      });
    }
  } else {
    // 拼接查询条件
    const whereData = {}
    if (IndexName) {
      whereData.IndexName = {[Op.like]: `%${IndexName}%`}
    }
    if (Remark) {
      whereData.Remark = {[Op.like]: `%${Remark}%`}
    }
    if (IndexType) {
      whereData.IndexType = IndexType
    }

    const offset = (page - 1) * limit
    const symbol = sort[0]
    const column = sort.slice(1, sort.length)
    
    const order = symbol === '+' ? 'asc' : 'desc'
    result = await Factor.findAndCountAll({
      where: whereData,
      offset,
      limit,
      order: [
        [column, order]
      ]
    })
  }
  // console.log(result);
  return result
}

/**
 * 创建指标
 * @param {Object} data 指标数据
 */
async function createFactor(data) {
  const {IndexName, IndexType, Remark, AlarmValue, currentDate} = data
  const createdAt = currentDate
  const updatedAt = currentDate
  const res = await Factor.create({
    IndexName,
    IndexType,
    Remark,
    AlarmValue,
    createdAt,
    updatedAt
  })
  return res.dataValues
}

/**
 * 更新指标
 * @param {Object} data 指标数据
 */
async function updateFactor(data) {
  const {IndexName, IndexType, AlarmValue, Remark, id, currentDate} = data
  const updatedAt = currentDate
  const res = await Factor.update({
      IndexName,
      IndexType,
      AlarmValue,
      Remark,
      updatedAt
      },
      {
        where: {
          id
        }
      }
    )
    return res
}

/**
 * 删除指标
 * @param {String} factor_id 指标编号
 */
async function deleteFactor(id) {
  // console.log('*******',factor_id)
  const res = await Factor.destroy({
    where: { id }
  })
  return res
}

module.exports = {
  getFactorInfo,
  getFactorCategory,
  getFactorList,
  createFactor,
  updateFactor,
  deleteFactor
}
