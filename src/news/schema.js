const  Mongoose  = require("mongoose");

const { Schema } = Mongoose;

const newsschema = new Schema({
    title:String,
    description:String,
    url:String,
    urlToImage:String

    
   

},{
    timeStamps:true,
})

module.exports = newsschema;