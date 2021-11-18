'use strict'

const Koa = require('koa')
const app = new Koa()

// 中间件
const bodyParser = require('koa-bodyparser')({enableTypes:['json', 'form', 'text']})
const cors = require('koa2-cors')
const { logger, loggerMiddleware } = require('./middlewares/logger')
const { corsHandler } = require('./middlewares/cors')

// Logger
app.use(loggerMiddleware)

// Global Middlewares
app.use(bodyParser)

// Cors
app.use(cors(corsHandler))

// Routes
const factorRouter = require('./routes/factor')
app.use(factorRouter.routes(), factorRouter.allowedMethods())
const valueRouter = require('./routes/value')
app.use(valueRouter.routes(), valueRouter.allowedMethods())
const planningRouter = require('./routes/planning')
app.use(planningRouter.routes(), planningRouter.allowedMethods())
const correlationRouter = require('./routes/correlation')
app.use(correlationRouter.routes(), correlationRouter.allowedMethods())

// Error Handler
app.on('error', (err, ctx) => {
  // console.error('server error', err, ctx)
  logger.error(err.stack)
})

module.exports = app
