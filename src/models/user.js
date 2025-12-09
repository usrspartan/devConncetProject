const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String, 
        required:true
    },
    lastName: String,
    emailId:{
        type:String, 
        required:true, 
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String, 
        required:true
    },
    age: Number,
    gender:{
        type: String,
        validate(value){
            if (!["male","female","others"].includes(value)) {
                throw new Error("Invalid gender");
            }
        }
    },
    photourl: {
        type: String,
    },
    about:{
        type: String,
    },
},
    {
        timestamps:true
    }
)

module.exports = mongoose.model("User", userSchema);


