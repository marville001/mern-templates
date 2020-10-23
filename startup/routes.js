const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const error = require("../middleware/error");
const home = require("../routes/home");

module.exports = function (app) {
  app.use(cors());
  app.use(fileUpload());
  app.use(express.json());
  app.use("/static", express.static("public"));
  app.use("/", home);

  app.use(error);
};
