const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Bus = require("../models/Bus");

router.get("/", (req, res, next) => {
  Bus.find({ busId: req.body.busId })
    .exec()
    .then((busDetails) => {
      if (busDetails.length === 1) {
        return res.status(200).json({
          code: "S3",
          bus: busDetails[0],
        });
      } else {
        return res.status(404).json({
          code: "L2",
        });
      }
    });
});

module.exports = router;
