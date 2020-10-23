const express = require("express");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const router = express.Router();
const { User, validate } = require("../models/user");
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
  res.send("Welcome home");
});

module.exports = router;
