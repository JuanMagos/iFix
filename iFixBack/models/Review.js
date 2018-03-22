
const mongoose = require("mongoose");

reviewSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    rating:Number,
    from: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    to: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
});

module.exports = mongoose.model("Review", reviewSchema);
