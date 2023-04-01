// build your `Project` model here
const db = require("../../data/dbConfig");

async function getAllProjects() {
  const result = await db("projects");
  return result;
}

module.exports = {
  getAllProjects,
};
