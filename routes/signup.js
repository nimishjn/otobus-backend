const express = require("express");
const router = express.Router();
const generateAccessToken = require("../scripts/TokenGenerator");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("../models/User");

router.post("/", (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: "Mail exists"
                });
            } else {
                // bcrypt.hash(req.body.password, 10, (err, hash) => {
                //     if (err) {
                //         return res.status(500).json({
                //             error: err,
                //             code: "E0",
                //             test: "hasing issue"
                //         });
                //    } else {
                        let user = new User({
                            name: req.body.name,
                            mobile: req.body.mobile,
                            email: req.body.email,
                            password: req.body.password
                        });
                        console.log(req.body.name);
                        user
                            .save()
                            .then(result => {
                                console.log(result);
                                const token = generateAccessToken({ username: req.body.email });
                                res.status(201).json({
                                    code: "S0",
                                    token: token,
                                });
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    error: err,
                                    code: "E0",
                                    test: "database issue"
                                });
                            });
                    //}
                //});
            }
        });
});

// router.delete("/:userId", (req, res, next) => {
//     User.remove({ _id: req.params.userId })
//         .exec()
//         .then(result => {
//             res.status(200).json({
//                 message: "User deleted"
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 error: err
//             });
//         });
// });

module.exports = router;