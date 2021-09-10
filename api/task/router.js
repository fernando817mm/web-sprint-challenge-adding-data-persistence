const router = require("express").Router();
const Task = require("./model");

router.get("/", (req, res, next) => {
  Task.getAll()
    .then((tasks) => {
      tasks.map((task) => {
        task.task_completed = task.task_completed === 0 ? false : true;
      });
      res.json(tasks);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Task.insert(req.body)
    .then((task) => {
      const newTask = {
        ...task,
        task_completed: Boolean(Number(task.task_completed)),
      };
      res.json(newTask);
    })
    .catch(next);
});

module.exports = router;
