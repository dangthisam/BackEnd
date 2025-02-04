const express = require("express");
const router = express.Router();
// const {
//   getHomePage,
//   getAPI,
//   get1,
//   postUser,
//   createrpostUser,
// } = require("../controllers/homeControllers");
//const { getUserAPI } = require("../controllers/apiControllers");
// router.get("/", get1);
// router.get("/dangthuy", getAPI);
const {
  getUsersAPI,
  postUser,
  putUser,
  deleteUser,
  postFile,
} = require("../controllers/apiControllers");
const { postCustomer } = require("../controllers/customer");
// router.get("/creater-user", createrpostUser);
router.get("/User", getUsersAPI);
router.post("/User", postUser);
router.put("/User", putUser);
router.delete("/User", deleteUser);
router.post("/file", postFile);
router.post("/customer", postCustomer);

module.exports = router;
