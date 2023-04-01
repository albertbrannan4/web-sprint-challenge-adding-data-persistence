// build your `/api/projects` router here
const router = require("express").Router();

router.get("/", (req, res) => {
  res.json("project router works");
});

module.exports = router;
