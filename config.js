'use strict'

const path = require('path')

const MYSQL_CONF = {
  host: '127.0.0.1',
  user: 'lspms',
  password: 'DjFFrcxcw5yG3t8p',
  database: 'lspms'
}

module.exports = {
  port: '3000',
  CODE_SUCCESS: 1,
  logPath: path.resolve(__dirname, './logs/koa.log'),
  MYSQL_CONF
}
