const mongoose = require("mongoose");
const newsschema = require("./schema");




const news = mongoose.model("news",newsschema)

module.exports = news;