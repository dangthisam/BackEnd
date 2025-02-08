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

const { MongoClient } = require("mongodb");
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
  //using mongoose
  await connection();

  //using mongodb drive

  // Connection URL
  // try {
  //   //console.log("....", process.env.BD_NAME_CONNECT);
  //   const url = "mongodb://root:123456@localhost:27018/?authSource=admin";
  //   const client = new MongoClient(url);

  //   // Database Name
  //   const dbName = "nguyenvansam";
  //   // Use connect method to connect to the server
  //   await client.connect();
  //   console.log("Connected successfully to server");
  //   const db = client.db(dbName);
  //   const collection = db.collection("customers");
  //   // collection.insertOne({ name: "dangthuy" });
  //   // collection.insertOne({
  //   //   name: "vansam",
  //   //   address: "hanoi",
  //   //   email: "vansam@gmail.com",
  //   // });
  //   console.log(">>>find", await collection.findOne({ name: "vansam" }));
  //   app.listen(port, () => {
  //     console.log(` app listening on port ${port}`);
  //   });
  // } catch (error) {
  //   console.log("error>>>>", error);
  // }
  app.listen(port, () => {
    console.log(` app listening on port ${port}`);
  });
})();
