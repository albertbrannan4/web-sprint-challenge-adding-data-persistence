// build your server here and require it from index.js
const express = require("express");
const ProjectRouter = require("./project/router");

const server = express();

server.use(express.json());
server.use("/api/projects", ProjectRouter);

server.get("*", (req, res) => {
  res.status(404).json("Page Not Found");
});

module.exports = server;
