/**
 * @description 数据模型入口文件
 * @author Yang
 */
const Factor = require('./Factor')
const Value = require('./Value')
const Administration = require('./Administration')
const Planning = require('./Planning')
const Correlation = require('./Correlation')
const Migration = require('./Migration')

Correlation.belongsTo(Migration, {
  foreignKey: 'CityName1'
})

Migration.hasOne(Correlation, {
  foreignKey: 'CityName2'
})

Value.belongsTo(Factor, {
  foreignKey: 'IndexID'
})

Factor.hasMany(Value, {
  foreignKey: 'IndexID'
})

Planning.belongsTo(Administration, {
  foreignKey: 'BelongRegionID'
})

Administration.hasMany(Planning, {
  foreignKey: 'BelongRegionID'
})

module.exports = {
  Factor,
  Value,
  Administration,
  Planning,
  Correlation,
  Migration
}