const express = require("express");
const ObjectID = require("mongodb").ObjectID;

// CRUD functionality with routers
const createRouter = function (collection) {
  const router = express.Router();

  return router;
};

module.exports = createRouter;
