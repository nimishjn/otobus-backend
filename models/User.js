const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mobile:{
        type: String,
        required: true,
        match: /^\+?\d{10}$/
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {
        type: String,
        required: true,
        match: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{4,15}$/

    },
});
const User = mongoose.model('users', UserSchema);
module.exports=User;