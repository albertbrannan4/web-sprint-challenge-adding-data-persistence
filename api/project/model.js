// build your `Project` model here
const db = require("../../data/dbConfig");

async function getAllProjects() {
  const result = await db("projects");
  return result.map((each) => {
    return {
      project_id: each.project_id,
      project_name: each.project_name,
      project_description: each.project_description,
      project_completed: each.project_completed ? true : false,
    };
  });
}

async function getAllProjectByID(id) {
  const [result] = await db("projects").where("project_id", id);
  return {
    project_id: result.project_id,
    project_name: result.project_name,
    project_description: result.project_description,
    project_completed: result.project_completed ? true : false,
  };
}

async function addProject(project) {
  let [id] = await db("projects").insert(project);
  return getAllProjectByID(id);
}

module.exports = {
  getAllProjects,
  addProject,
};
