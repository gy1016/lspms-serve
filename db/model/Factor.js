/**
 * @description 指标数据模型
 * @author Yang
 */

const seq = require('../seq')
const { INTEGER, DOUBLE, STRING } = require('../types')

const Factor = seq.define('factor', {
  IndexName: {
    type: STRING,
    allowNull: false,
    comment: '指标名称'
  },
  IndexType: {
    type: INTEGER,
    allowNull: false,
    comment: '指标类别（0 未划分，1 聚集程度指标，2 开发强度指标，3 空间分析指标，4 安全保障指标）'
  },
  AlarmValue: {
    type: DOUBLE,
    allowNull: false,
    defaultValue: 0,
    comment: '预警值'
  },
  Remark: {
    type: STRING,
    allowNull: true,
    comment: '指标描述'
  }
})

// const Factor = seq.define('factor', {
//   factor_id: {
//       type: STRING,
//       allowNull: false,
//       unique: true,
//       comment: '指标名称，唯一'
//   },
//   feature: {
//       type: STRING,
//       allowNull: false,
//       comment: '指标描述'
//   },
//   category: {
//       type: DECIMAL,
//       allowNull: false,
//       default: 0,
//       comment: '指标类别（0 未划分，1 聚集程度指标，2 开发强度指标，3 空间分析指标）'
//   }
// })

// !(async function () {
//     const res = await Factor.destroy({
//       where: { factor_id: 'test1' }
//     })
//     return res
// })()

module.exports = Factor
