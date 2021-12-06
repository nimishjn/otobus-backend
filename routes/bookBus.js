const express = require("express");
const router = express.Router();
const { bookingIdGenerator } = require("../scripts/idGenerator");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Bus = require("../models/Bus");

router.post("/", (req, res, next) => {
  Bus.findOne({ busId: req.body.busId }).then(async (busDetails) => {
    // console.log(req.body.busId, busDetails);
    if (busDetails) {
      if (busDetails.availableSeats > 0) {
        busDetails.availableSeats -= 1;
        await busDetails.save().catch((err) => {
          return res.status(500).json({
            code: "E0",
            test: "database issue saving busDetails",
            error: err,
          });
        });

        const Booking = require("../models/Booking");
        let newBookingId = "";
        let testId = true;
        while (testId) {
          newBookingId = bookingIdGenerator(8);
          console.log(newBookingId);
          let ids = await Booking.find({ bookingId: newBookingId });
          if (ids.length === 0) {
            testId = false;
          } else {
            newBookingId = bookingIdGenerator(8);
          }
        }
        console.log(newBookingId);
        let newBooking = new Booking({
          bookingId: newBookingId,
          busId: req.body.busId,
          email: "abc@gmail.com",
          source: busDetails.source,
          destination: busDetails.destination,
          fare: busDetails.fare,
        });

        await newBooking
          .save()
          .then(() => {
            return res.status(200).json({
              code: "S4",
              bookingId: newBookingId,
            });
          })
          .catch((err) => {
            return res.status(500).json({
              code: "E0",
              error: err,
              test: "database issue saving bookingDetails",
            });
          });
      } else {
        return res.status(405).json({
          code: "L3",
        });
      }
    } else {
      return res.status(404).json({
        code: "L2",
      });
    }
  });
});

module.exports = router;
