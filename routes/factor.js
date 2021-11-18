/**
 * @description 指标路由
 * @author Yang
 */

const router = require('koa-router')()
const { isExist, mapCategory, fetchList, registerFactor, changeFactor, removeFactor } = require('../controllers/factor')
router.prefix('/api/factor')

// 指标是否存在
router.post('/isExist', async (ctx, next) => {
  const { id } = ctx.request.body
  ctx.body = await isExist(id)
  // console.log(ctx.body);
})

// 获取指标类别
router.get('/category', async (ctx, next) => {
  ctx.body = await mapCategory()
  // ctx.body = 'haha'
  // console.log(ctx.body);
})

// 获取指标列表
router.post('/list', async (ctx, next) => {
  const listQuery = ctx.request.body
  // console.log(listQuery);
  ctx.body = await fetchList(listQuery)
})

// 创建指标
router.post('/create', async (ctx, next) => {
  const data = ctx.request.body
  ctx.body = await registerFactor(data)
})

// 更新指标
router.post('/update', async (ctx, next) => {
  const data = ctx.request.body
  ctx.body = await changeFactor(data)
})

// 删除指标
router.get('/delete', async (ctx, next) => {
  const { id } = ctx.query
  ctx.body = await removeFactor(id)
})

module.exports = router
