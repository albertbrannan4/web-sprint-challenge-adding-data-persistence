// build your `/api/tasks` router here
// build your `/api/resources` router here
const router = require("express").Router();
const Task = require("./model");

router.get("/", async (req, res) => {
  try {
    const allTasks = await Task.getAllTasks();
    res.json(allTasks);
  } catch (err) {
    res.status(500).json({ message: "getting resources didnt work" });
  }
});

router.post("/", (req, res, next) => {
  Task.addTask(req.body)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.status(500).json({ message: "post not working right for resources" });
    });
});

module.exports = router;
