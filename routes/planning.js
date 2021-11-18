const router = require('koa-router')()
const { fetchPlanning } = require('../controllers/planning')
router.prefix('/api/planning')

// 获取分区列表
router.get('/list', async (ctx, next) => {
  ctx.body = await fetchPlanning()
  // console.log(ctx.body);
})

module.exports = router