const router = require('koa-router')()
const { fetchList } = require('../controllers/value')
router.prefix('/api/value')

// 获取指标值列表
router.post('/list', async (ctx, next) => {
  const listQuery = ctx.request.body
  ctx.body = await fetchList(listQuery)
  // console.log(ctx.body);
})

module.exports = router