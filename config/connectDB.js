const mongoose = require('mongoose');
const { db_url } = require('../secret/secert');

const connectDB = () => {
    try {
        mongoose.connect(db_url);
        console.log("Database connect sucessfull.😎");
    } catch (error) {
        console.log("DB connect fail.🚫")
    }
};
module.exports = connectDB;