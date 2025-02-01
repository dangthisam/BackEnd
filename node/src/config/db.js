const mysql = require("mysql2");
require("dotenv").config();
const mongoose = require("mongoose");
//mongodb://root:123456@mongo:27017
// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
// });

const connection = async () => {
  try {
    // Kết nối tới MongoDB và chờ hoàn thành
    await mongoose.connect("mongodb://root:123456@localhost:27018", {
      user: process.env.DB_USER,
      pass: process.env.DB_PASSWORD,
      dbName: "nguyenvansam",
    });
    console.log("Kết nối thành công!");
  } catch (err) {
    // Xử lý lỗi nếu xảy ra
    console.error("Kết nối thất bại:", err);
    throw err; // Ném lỗi để bên ngoài xử lý nếu cần
  }
};

// Create the connection pool. The pool-specific settings are the defaults
// const connection = mysql.createPool({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
//   waitForConnections: true,
//   connectionLimit: 10,
//   maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
//   idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
//   queueLimit: 0,
//   enableKeepAlive: true,
//   keepAliveInitialDelay: 0,
// });

module.exports = connection;
