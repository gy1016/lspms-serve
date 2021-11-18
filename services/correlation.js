/**
 * @description correlation service
 * @author Yang
 */

 const { Correlation, Migration } = require('../db/model/index')

 /**
 * 获取关联度列表
 * @param {Array} listQuery 查询条件
 */
 async function getCorrelationList(listQuery) {
   const { Belong, CityName1, Time, From } = listQuery
     // 拼接查询条件
     const whereData = {}
     if (Belong) {
       whereData.Belong = Belong
     }
     if (CityName1) {
       whereData.CityName1 = CityName1
     }
     if (Time) {
       whereData.Time = Time
     }
     if (From === 'model') {
       result = await Correlation.findAll({
         attributes: ['CityName1', 'CityName2', 'Belong', 'Value', 'Time'],
         where: whereData
       })
     } else {
       result = await Correlation.findAll({
         attributes: ['CityName1', 'CityName2', 'Belong', 'Value', 'Time'],
         where: whereData,
         include: [
           {
             model: Migration,
             // attributes: ['Migrate1', 'Migrate2'],
             where: { CityName1 }
           }
         ]
       })
     }
   // console.log(result);
   return result
 }
 
 /**
 * 获取年限列表
 * @param 没有查询参数
 */
 async function getTimeList() {
   result = await Correlation.findAll({
     attributes: ['Time'],
     group: ['Time']
   })
   // console.log(result);
   return result
 }
 
 module.exports = {
   getCorrelationList,
   getTimeList
 }
  