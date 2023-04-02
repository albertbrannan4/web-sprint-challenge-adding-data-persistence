// build your `Task` model here
const db = require("../../data/dbConfig");

async function getAllTasks() {
  const result = await db("tasks as t")
    .select("t.*", "p.project_description", "p.project_name")
    .join("projects as p", "p.project_id", "=", "t.project_id");
  return result.map((each) => {
    return {
      task_id: each.task_id,
      task_description: each.task_description,
      task_notes: each.task_notes,
      task_completed: each.task_completed ? true : false,
      project_id: each.project_id,
      project_name: each.project_name,
      project_description: each.project_description,
    };
  });
}

async function addTask(task) {
  let [id] = await db("tasks").insert(task);
  let [result] = await db("tasks").where("task_id", id);
  return {
    task_id: result.task_id,
    task_description: result.task_description,
    task_notes: result.task_notes,
    task_completed: result.task_completed ? true : false,
    project_id: result.project_id,
  };
}

module.exports = {
  getAllTasks,
  addTask,
};
