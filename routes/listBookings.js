const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Booking = require("../models/Booking");

router.get("/", (req, res, next) => {
  Booking.find({email: req.emailFromToken})
    .exec()
    .then((bookings) => {
      return res.status(200).json({
        code: "S2",
        bookings: bookings,
      });
    });
});

module.exports = router;
