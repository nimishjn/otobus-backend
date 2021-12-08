const mongoose = require("mongoose");
mongoose.connect(process.env.DB_CONNECTION, {
});

mongoose.connection
    .once("open", () => {
        console.log("Connection to mongoDB established");
    })
    .on("error", (err) => {
        console.log("Error connecting to mongoDB:", err);
    });