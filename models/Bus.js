const mongoose = require("mongoose");

const BusSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
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
        default: 40,
    },
    availableSeats:{
        type: Number,
        required:true,
        default: 40,
    },
    rating:{
        type: Number,
        required:true,
    },
    type:{
        type: String,
        required:true,
    },
});
const Bus = mongoose.model('Bus', BusSchema);
module.exports=Bus;