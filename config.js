'use strict'

const path = require('path')

const MYSQL_CONF = {
  host: 'localhost',
  user: 'root',
  password: 'Fscsczz0523.',
  database: 'lspms'
}

module.exports = {
  port: '3000',
  CODE_SUCCESS: 1,
  logPath: path.resolve(__dirname, './logs/koa.log'),
  MYSQL_CONF
}
