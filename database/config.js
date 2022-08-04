// get the client
const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password:'1234',
  database: 'dados',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool