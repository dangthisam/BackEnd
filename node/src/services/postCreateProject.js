const Project = require("../models/project");

const createProject = async (data) => {
  if (data.type === "EMPTY_PROJECT") {
    let result = Project.create(data);
    return result;
  }
};
module.exports = { createProject };
