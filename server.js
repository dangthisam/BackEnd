require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();

const port = process.env.PORT || 4000;
//file dot nay có nhiệm vụ lưu các biến dùng nhiều để fix cho dễ
const configViewEngine = require("./node/src/config/viewEngine");
const webRouter = require("./node/src/routes/web");
const connection = require("./node/src/config/db");
const fileUpload = require("express-fileupload");
const Kitten = require("./node/src/models/user");
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true }));

//config uploadFile
app.use(fileUpload());

configViewEngine(app);
app.use("", webRouter);

//config req.body
//
// connection.query("SELECT * FROM `KhachHang` ", function (err, results, fields) {
//   console.log(results); // results contains rows returned by server

//   console.log(fields); // fields contains extra meta data about results, if available
// });

// const silence = new Kitten({ name: "Silence" });
// silence.save();
(async () => {
  await connection();
  app.listen(port, () => {
    console.log(` app listening on port ${port}`);
  });
})();
