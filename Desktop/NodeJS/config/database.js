const mysql = require("mysql2");

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "mousepad",
//   database: "department",
// });

// con.connect((error) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log("Connected");
// });

const pool = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "mousepad",
  database: "department",
});

module.exports = pool.promise();
