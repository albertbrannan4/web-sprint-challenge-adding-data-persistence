// build your `/api/projects` router here
const router = require("express").Router();
const Project = require("./model");
router.get("/", async (req, res) => {
  try {
    const allProjects = await Project.getAllProjects();
    res.json(allProjects);
  } catch (err) {
    res.status(500).json({ message: "getting projects didnt work" });
  }
});

router.post("/", (req, res, next) => {
  Project.addProject(req.body)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.status(500).json({ message: "post not working right" });
    });
});

module.exports = router;
