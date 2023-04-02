// build your `/api/resources` router here
const router = require("express").Router();
const Resource = require("./model");

router.get("/", async (req, res) => {
  try {
    const allResources = await Resource.getAllResources();
    res.json(allResources);
  } catch (err) {
    res.status(500).json({ message: "getting resources didnt work" });
  }
});

module.exports = router;
