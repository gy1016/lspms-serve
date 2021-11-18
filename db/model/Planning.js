/**
 * @description 规划分区模型
 * @author Yang
 */

 const seq = require('../seq')
 const { INTEGER, STRING } = require('../types')

 const Planning = seq.define('planning', {
   Name_CH: {
     type: STRING,
     allowNull: false,
     comment: '规划分区中文名'
   },
   Name_EN: {
    type: STRING,
    allowNull: false,
    comment: '规划分区中文名'
  },
  Type: {
    type: INTEGER,
    allowNull: false,
    comment: '分区类别（0 未划分，1 城市发展区，2 重点生态功能区，3 农产品主产区）'
  },
  BelongRegionID: {
    type: INTEGER,
    allowNull: false,
    comment: '所属行政分区'
  }
 }, {
  timestamps: false
})
 
 module.exports = Planning
 