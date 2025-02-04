const Customer = require("../models/customer");

const createrCustomerSerViece = async (customerData) => {
  try {
    let result = await Customer.create({
      name: customerData.name,
      phone: customerData.phone,
      address: customerData.address,
      image: customerData.image,
      description: customerData.description,
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
module.exports = { createrCustomerSerViece };
