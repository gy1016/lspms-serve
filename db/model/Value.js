/**
 * @description 指标值数据模型
 * @author Yang
 */

 const seq = require('../seq')
 const { INTEGER, DOUBLE } = require('../types')
 
 const Value = seq.define('value', {
   IndexID: {
       type: INTEGER,
       allowNull: false,
       comment: '指标ID'
   },
   Time: {
       type: INTEGER,
       allowNull: false,
       comment: '时间'
   },
   RegionID: {
       type: INTEGER,
       allowNull: false,
       default: 0,
       comment: '指标所属区域ID, 行政区划是1到17，规划分区是101开始'
   },
   Value: {
    type: DOUBLE,
    allowNull: false,
    default: 9999,
    comment: '指标计算值，默认为9999'
   }
 }, {
    timestamps: false
 })
 
 // !(async function () {
 //     const res = await Factor.destroy({
 //       where: { factor_id: 'test1' }
 //     })
 //     return res
 // })()
 
 module.exports = Value
 