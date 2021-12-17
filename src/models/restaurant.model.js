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


const restaurantSchema = mongoose.Schema({
    name: reqStringT,
    costForTwo: reqNumberT,
    img: [reqStringT],
    rating: reqNumberT,
    reviews: reqNumberT,
    cuisine: [reqStringT],
    location1: reqStringT,
    location2: reqStringF,
}, {
    versionKey: false,
    timestamp: true,
})



const Restaurant = mongoose.model("restaurant", restaurantSchema);

module.exports = Restaurant;