const db = require("./../../data/dbConfig");

const getAll = () => {
  return db("projects");
};

const getById = (id) => {
  return db("projects").where("project_id", id).first();
};

const insert = async (project) => {
  const [id] = await db("projects").insert(project);
  return getById(id);
};

module.exports = {
  getAll,
  getById,
  insert,
};
