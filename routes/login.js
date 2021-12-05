const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("../models/User");

router.post("/", (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                if (user[0].password === req.body.password) {
                    return res.status(200).json({
                        code: "S1",
                        token: ""
                    });
                } else {
                    return res.status(401).json({
                        code: "L0",
                    });
                }
            } else {
                return res.status(401).json({
                    code: "E3",
                });
            }
        });
});
module.exports = router;