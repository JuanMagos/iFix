
const mongoose = require("mongoose");

servicioSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    model: {
        type:String,
    },
    description:{
        type:String
    },
    image:{
        type:String
    },
    owner: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
});

module.exports = mongoose.model("Servicio", servicioSchema);
