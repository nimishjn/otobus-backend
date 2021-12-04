import express from "express";

const app = express();

app.set("trust proxy", true);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const authMiddleware = require('./middleware/authorize')

// const scoreRoute = require('./routes/leaderboard');

// app.use('/map', authMiddleware, mapRoute);

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(3001, () => {
  console.log("Server started!");
});
