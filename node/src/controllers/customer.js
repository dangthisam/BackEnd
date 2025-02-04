const { uploadMutipleFile } = require("../services/filesevices");
const { createrCustomerSerViece } = require("../services/customerServieces");
const postCustomer = async (req, res) => {
  let { name, phone, address, image, description } = req.body;
  let imgUrl = "";
  console.log(">>>name", name, description);
  // name: String,
  // phone: String,
  // address: String,
  // image: String,
  // description: String,

  if (!req.files || Object.keys(req.files).length === 0) {
    // res.status(400).send("No files were uploaded.");
    // return;
  } else {
    let result = await uploadMutipleFile(req.files.image);
    console.log(">>result ", result);

    imgUrl = result[0].path;
    console.log(imgUrl);
    console.log("file", req.files.image);
  }
  let customerData = {
    name,
    phone,
    address,
    image: imgUrl,
    description,
  };
  let user = await createrCustomerSerViece(customerData);

  return res.status(200).json({
    EC: 0,
    data: user,
  });
};
module.exports = { postCustomer };
