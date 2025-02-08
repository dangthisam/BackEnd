const { createProject } = require("../services/postCreateProject");

const postCrateProject = async (req, res) => {
  let result = await createProject(req.body);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

module.exports = { postCrateProject };
