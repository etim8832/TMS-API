const Pool = require('pg').Pool

const USER = 'postgres'
const PASSWORD = 'password01'
const HOST = '127.0.0.1'
const PORT = 5432
const DB_NAME = 'TMS'

const CONNECT_DB = new Pool({
  user: USER,
  host: HOST,
  database: DB_NAME,
  password: PASSWORD,
  port: PORT,
})

module.exports = CONNECT_DB;



