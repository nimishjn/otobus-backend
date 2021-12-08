const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.get("/", (req, res, next) => {
  User.find({ email: req.emailFromToken })
    .exec()
    .then((users) => {
      if (users.length === 1) {
        return res.status(200).json({
          code: "S6",
          user: {
              email: req.emailFromToken,
              name: users[0].name,
          }
        });
      } else {
        return res.status(404).json({
          code: "E0",
        });
      }
    });
});

module.exports = router;
