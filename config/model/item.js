const mongoose = require("mongoose");
const itemSchema = mongoose.Schema({
    "name": String,
    "description": String,
    "category": String,
    "image": String,
    "location": String,
    "postedAt": String,
    "price": String
})

const ItemModel = mongoose.model("item", itemSchema);

module.exports = {
    ItemModel
}