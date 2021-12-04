import { connect, connection } from "mongoose";
connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

connection
    .once("open", () => {
        console.log("Connection to mongoDB established");
    })
    .on("error", (err) => {
        console.log("Error connecting to mongoDB:", err);
    });

