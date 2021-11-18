/**
 * @description 关联度数据模型
 * @author Yang
*/

const seq = require('../seq')
const { INTEGER, DOUBLE, STRING } = require('../types')

const Correlation = seq.define('correlation', {
  CityName1: {
    type: STRING,
    allowNull: false,
    comment: '城市名1'
  },
  CityName2: {
    type: STRING,
    allowNull: false,
    comment: '城市名2'
  },
  Belong: {
    type: INTEGER,
    allowNull: false,
    comment: '城市圈类别划分'
  },
  Value: {
    type: DOUBLE,
    allowNull: false,
    defaultValue: 0,
    comment: '关联度值'
  },
  Time: {
    type: INTEGER,
    allowNull: false,
    comment: '关联度值的计算年份'
  }
}, {
  timestamps: false
})

// seq.sync({ force: true }).then(() => {
//   console.log('sync ok')
//   process.exit()
// })

module.exports = Correlation
