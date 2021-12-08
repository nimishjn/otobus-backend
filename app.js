const express=require("express");
const bodyParser = require("body-parser");

const app = express();

require('dotenv/config');
require('./models/dbInit');

const cors = require('cors');
app.use(cors());

app.set("trust proxy", true);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));

const authMiddleware = require('./middleware/authorize');

const loginRoute = require('./routes/login');
const signupRoute = require('./routes/signup');
const listBusesRoute = require('./routes/listBuses');
const listBookingsRoute = require('./routes/listBookings');
const deleteBookingRoute = require('./routes/deleteBooking');
const busDetailsRoute = require('./routes/busDetails');
const bookBusRoute = require('./routes/bookBus');
const userDetails = require('./routes/userDetails');

app.use('/login', loginRoute);
app.use('/signup', signupRoute);
app.use('/listBuses', authMiddleware, listBusesRoute);
app.use('/listBookings', authMiddleware, listBookingsRoute);
app.use('/deleteBooking', authMiddleware, deleteBookingRoute);
app.use('/busDetails', authMiddleware, busDetailsRoute);
app.use('/bookBus', authMiddleware, bookBusRoute);
app.use('/userDetails', authMiddleware, userDetails);

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
      test2: "app.js issue"
    },
  });
});

app.listen(3001, () => {
  console.log("Server started!");
});
