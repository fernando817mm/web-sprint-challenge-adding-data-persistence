const express = require("express");
const server = express();
const projectsRouter = require("./project/router");
const resourcesRouter = require("./resource/router");

server.use(express.json());
server.use("/api/projects", projectsRouter);
server.use("/api/resources", resourcesRouter);

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
