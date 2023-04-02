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

router.post("/", (req, res, next) => {
  Resource.addResource(req.body)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.status(500).json({ message: "post not working right for resources" });
    });
});

module.exports = router;
