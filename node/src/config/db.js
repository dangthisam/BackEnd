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
    console.log("dkhg", process.env.DB_HOST);
    await mongoose.connect(process.env.DB_HOST, {
      user: process.env.DB_USER,
      pass: process.env.DB_PASSWORD,
      dbName: process.env.DB_NAME, // Chỉ định tên database
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Kết nối MongoDB Atlas thành công!");
  } catch (err) {
    console.error("❌ Kết nối MongoDB Atlas thất bại:", err.message);
    process.exit(1);
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
