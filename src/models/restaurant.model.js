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


const userSchema = mongoose.Schema({
    name: reqStringT,
    mobile: reqNumberT,
}, {
    versionKey: false,
    timestamp: true,
})



const User = mongoose.model("user", userSchema);

module.exports = User;