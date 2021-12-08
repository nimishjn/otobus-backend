const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Bus = require("../models/Bus");

router.get("/", (req, res, next) => {
  Bus.find()
    .exec()
    .then((buses) => {
      return res.status(200).json({
        code: "S2",
        buses: buses,
      });
    });
});

module.exports = router;
