import express from "express";

const app = express();

app.set("trust proxy", true);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const authMiddleware = require('./middleware/authorize');

const loginRoute = require('./routes/login');
const signupRoute = require('./routes/signup');
const listBusesRoute = require('./routes/listBuses');
const listBookingsRoute = require('./routes/listBookings');
const deleteBookingRoute = require('./routes/deleteBooking');
const busDetailsRoute = require('./routes/busDetails');
const bookBusRoute = require('./routes/bookBus');

app.use('/login', loginRoute);
app.use('/signup', signupRoute);
app.use('/listBuses', listBusesRoute);
app.use('/listBookings', listBookingsRoute);
app.use('/deleteBooking', deleteBookingRoute);
app.use('/busDetails', busDetailsRoute);
app.use('/bookBus', bookBusRoute);

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
