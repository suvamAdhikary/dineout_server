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
const reqBooleanF = {
    type: Boolean,
    required : false
}

const restaurantSchema = mongoose.Schema({
    name: reqStringT,
    costForTwo: reqNumberT,
    img: [reqStringT],
    menuImg: [reqStringT],
    rating: reqNumberT,
    reviews: reqNumberT,
    city: reqStringT,
    locality: reqStringF,
    about: reqStringF,
    mobile: reqStringF,
    buffet: reqBooleanF,
    topTrending: reqBooleanF,
    petFriendly: reqBooleanF,
    newOnDineout: reqBooleanF,
    familyTime: reqBooleanF,
    pureVeg: reqBooleanF,
    northIndian: reqBooleanF,
    bestBars: reqBooleanF,
    pureVeg: reqBooleanF,
    chinese: reqBooleanF,
    continental: reqBooleanF,
    fastFood: reqBooleanF,
    italian: reqBooleanF,
    seafood: reqBooleanF,
    thai: reqBooleanF,
    southeastAsian: reqBooleanF,
    bengali: reqBooleanF,
    cafe: reqBooleanF,
    casualDining: reqBooleanF,
    dineoutPay: reqBooleanF,
    kidsFriendly: reqBooleanF,
    pedigreeSponsored: reqBooleanF,
    safeToEatOutOfDate: reqBooleanF,
    happyHours: reqBooleanF,
    airCondition: reqBooleanF,
    cardsAccept: reqBooleanF,
    differentlyAbiedFriendly: reqBooleanF,
    homeDelivery: reqBooleanF,
    outdoorSeating: reqBooleanF,
    parking: reqBooleanF,
    smokingArea: reqBooleanF,
    takeAway: reqBooleanF,
    walletAccepted: reqBooleanF,
    wifi: reqBooleanF,
    privateDining: reqBooleanF
}, {
    versionKey: false,
    timestamp: true,
})



const Restaurant = mongoose.model("restaurant", restaurantSchema);

module.exports = Restaurant;