
const mongoose = require("mongoose");

cardSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    rating:Number,
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
});

module.exports = mongoose.model("Card", cardSchema);
