const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "mousepad",
  database: "crud",
});

module.exports = pool.promise();
