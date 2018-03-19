const Schema = require("mongoose").Schema;
const mongoose = require("mongoose");
const PassportLocalMongoose = require("passport-local-mongoose");
const userSchema = new require("mongoose").Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String
    },
    roles:{
        type:String,
        enum:["USER", "TECHNICIAN"],
        default:"USER"
    },
    review:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Review"
    }]
},
{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
});

userSchema.plugin(PassportLocalMongoose , {usernameField:"email"});

module.exports = require("mongoose").model("User", userSchema);