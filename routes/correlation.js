/**
 * @description 关联度路由
 * @author Yang
*/

const router = require('koa-router')()
const { fetchList, fetchTimeList } = require('../controllers/correlation')
router.prefix('/api/correlation')

// 获取关联度列表
router.post('/list', async (ctx, next) => {
  const listQuery = ctx.request.body
  // console.log(listQuery);
  ctx.body = await fetchList(listQuery)
})

// 获取时间列表
router.get('/timelist', async (ctx, next) => {
  ctx.body = await fetchTimeList()
})

module.exports = router
