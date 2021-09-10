const router = require("express").Router();
const Project = require("./model");

router.get("/", (req, res, next) => {
  Project.getAll()
    .then((projects) => {
      projects.map((project) => {
        project.project_completed =
          project.project_completed === 0 ? false : true;
      });
      res.json(projects);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Project.insert(req.body)
    .then((project) => {
      const newProject = {
        ...project,
        project_completed: Boolean(Number(project.project_completed)),
      };
      res.json(newProject);
    })
    .catch(next);
});

module.exports = router;
