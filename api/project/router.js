// build your `/api/projects` router here
const router = require("express").Router();
const Project = require("./model");
router.get("/", async (req, res) => {
  //   try {
  const allProjects = await Project.getAllProjects();
  res.json(allProjects);
  //   } catch (err) {
  //     res.status(500).json({ message: "getting projects didnt work" });
  //   }
});

module.exports = router;
