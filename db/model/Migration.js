/**
 * @description 人口迁徙数据模型
 * @author Yang
*/

const seq = require('../seq')
const { INTEGER, DOUBLE, STRING } = require('../types')

const Migration = seq.define('migration', {
  CityName1: {
    type: STRING,
    allowNull: false,
    comment: '城市名1',
    primaryKey: true
  },
  CityName2: {
    type: STRING,
    allowNull: false,
    comment: '城市名2',
    primaryKey: true
  },
  Belong: {
    type: INTEGER,
    allowNull: false,
    comment: '城市圈类别划分'
  },
  Migrate1: {
    type: DOUBLE,
    allowNull: false,
    defaultValue: 0,
    comment: '以自身为参考的人口迁徙数据'
  },
  Migrate2: {
    type: DOUBLE,
    allowNull: false,
    defaultValue: 0,
    comment: '以其他城市为参考的人口迁徙数据'
  }
}, {
  timestamps: false
})

// seq.sync({ force: true }).then(() => {
//   console.log('sync ok')
//   process.exit()
// })

module.exports = Migration
