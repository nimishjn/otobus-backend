const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    bookingId:{
        type: String,
        required: true,
        unique: true,
    },
    busId:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    source:{
        type: String,
        required:true,
    },
    destination:{
        type: String,
        required:true,
    },
    fare:{
        type: Number,
        required:true,
    },

});
const Booking = mongoose.model('bookings', BookingSchema);
module.exports=Booking;