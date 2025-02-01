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
} = require("../controllers/apiControllers");

// router.get("/creater-user", createrpostUser);
router.get("/User", getUsersAPI);
router.post("/User", postUser);
router.put("/User", putUser);
router.delete("/User", deleteUser);
module.exports = router;
