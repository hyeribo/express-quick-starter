const mysql = require('mysql');
const util = require('util');

const config = require('../config');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: config.mysql_host,
  port: config.mysql_port,
  user: config.mysql_user,
  password: config.mysql_password,
  database: config.mysql_database,
});

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.');
    }
  }
  if (connection) connection.release();
  return true;
});

// async await 함수로 만들어줌
pool.query = util.promisify(pool.query);

module.exports = pool;