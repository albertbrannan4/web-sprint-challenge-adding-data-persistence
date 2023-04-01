// build your `Project` model here
const db = require("../../data/dbConfig");

async function getAllProjects() {
  const result = await db("projects");
  const convertCompleted = result.map((each) => {
    let completed = false;
    if (each.project_completed === 1) completed = true;
    return {
      project_id: each.project_id,
      project_name: each.project_name,
      project_description: each.project_description,
      project_completed: completed,
    };
  });

  return convertCompleted;
}

module.exports = {
  getAllProjects,
};
