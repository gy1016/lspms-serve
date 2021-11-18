/**
 * @description 行政分区模型
 * @author Yang
 */

 const seq = require('../seq')
 const { STRING } = require('../types')

 const Administration = seq.define('administration', {
   Name_CH: {
     type: STRING,
     allowNull: false,
     comment: '行政分区中文名'
   },
   Name_EN: {
    type: STRING,
    allowNull: false,
    comment: '行政分区英文名'
  }
 }, {
  timestamps: false
})
 
 module.exports = Administration
 