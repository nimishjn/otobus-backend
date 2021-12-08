const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Booking = require("../models/Booking");

router.delete("/:bookingId", (req, res, next) => {
  Booking.deleteOne({bookingId: req.params.bookingId, email: req.emailFromToken})
    .exec()
    .then(() => {
      return res.status(200).json({
        code: "S5",
      });
    })
    .catch(err => {
        return res.status(501).json({
            code: "E4",
            error: err
          });
    });
});

module.exports = router;