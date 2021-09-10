const db = require("./../../data/dbConfig");

const getAll = () => {
  return db("tasks")
    .leftJoin("projects", "projects.project_id", "tasks.project_id")
    .select("tasks.*", "projects.project_name", "projects.project_description");
};

const getById = (id) => {
  return db("tasks").where("task_id", id).first();
};

const insert = async (task) => {
  const [id] = await db("tasks").insert(task);
  return getById(id);
};

module.exports = {
  getAll,
  getById,
  insert,
};
