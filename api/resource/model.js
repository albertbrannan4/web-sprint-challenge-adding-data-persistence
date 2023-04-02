// build your `Resource` model here
const db = require("../../data/dbConfig");

async function getAllResources() {
  const result = await db("resources");
  return result;
}

async function addResource(resource) {
  let [id] = await db("resources").insert(resource);
  let [newResource] = await db("resources").where("resource_id", id);
  return newResource;
}

module.exports = {
  getAllResources,
  addResource,
};
