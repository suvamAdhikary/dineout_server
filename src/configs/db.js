const mongoose = require('mongoose');

require('dotenv').config();

const { DB_PASSWORD } = process.env;

module.exports = () => {
    return mongoose.connect(`mongodb+srv://Phoenix:${DB_PASSWORD}@cluster0.bpkoe.mongodb.net/dineoutDB?retryWrites=true&w=majority`);
};