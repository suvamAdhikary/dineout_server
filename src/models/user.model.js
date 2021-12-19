const mongoose = require('mongoose');


const reqStringT = {
    type : String,
    required : true,
}
const reqStringF = {
    type : String,
    required : false,
}
const reqNumberF = {
    type: Number,
    required : false,
}
const reqNumberT = {
    type: Number,
    required : true,
}


const bookingSchema = mongoose.Schema({
    guests: reqNumberT,
    restaurantName: reqStringF,
    city: reqStringF,
    locality: reqStringF,
    timeSlot: reqStringT,
    date: reqStringT,
    restaurantId: {type: mongoose.Schema.Types.ObjectId, ref: 'restaurant', required: false},
}, {
    versionKey: false,
    timestamp: true,
})



const userSchema = mongoose.Schema({
    name: reqStringT,
    mobile: reqStringT,
    bookings: bookingSchema,
}, {
    versionKey: false,
    timestamp: true,
})



const User = mongoose.model("user", userSchema);

module.exports = User;