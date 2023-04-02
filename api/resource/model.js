// build your `Resource` model here
const db = require("../../data/dbConfig");

async function getAllResources() {
  const result = await db("resources");
  return result;
}

module.exports = {
  getAllResources,
};
