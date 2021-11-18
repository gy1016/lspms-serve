/**
 * @description sequelize 实例
 * @author Yang
 */

const Sequelize = require('sequelize')
const { MYSQL_CONF } = require('../config')
const { host, user, password, database } = MYSQL_CONF
const conf = {
  host,
  dialect: 'mysql'
}

const seq = new Sequelize(database, user, password, conf)

// try {
//   seq.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

module.exports = seq
