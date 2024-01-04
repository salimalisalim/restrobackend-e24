const mongoose = require("mongoose");


const restaurantSchema = new mongoose.Schema({
    restaurantName:String,
    restaurantAddress:String,
    restaurantNeighborhood:String,
    photograph:String
});

module.exports = mongoose.model('restaurant', restaurantSchema);