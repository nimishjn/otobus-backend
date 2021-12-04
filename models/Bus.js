import { Schema, model } from 'mongoose';

const BusSchema = new Schema({
    busId:{
        type: String,
        required:true,
        unique: true,
    },
    ownerCompany:{
        type: String,
        required:true,
    },
    source:{
        type: String,
        required:true,
    },
    destination:{
        type: String,
        required:true,
    },
    departureDate:{
        type: String,
        required:true,
    },
    departureTime:{
        type: String,
        required:true,
    },
    arrivalDate:{
        type: String,
        required:true,
    },
    arrivalTime:{
        type: String,
        required:true,
    },
    fare:{
        type: Number,
        required:true,
    },
    totalSeats:{
        type: Number,
        required:true,
    },
    availableSeats:{
        type: Number,
        required:true,
    },
    waiting:{
        type: Number,
        required:true,
    },
    type:{
        type: String,
        required:true,
    },
});
const Bus = model('Bus', BusSchema);
export default Bus;