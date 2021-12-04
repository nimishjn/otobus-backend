import { Schema, model } from 'mongoose';

const BookingSchema = new Schema({
    bookingId:{
        type: String,
        required: true,
        unique: true,
    },
    busId:{
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
const Booking = model('Booking', BookingSchema);
export default Booking;