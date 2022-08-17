import mongoose from "mongoose";

const userModel = mongoose.Schema({

    name : {
        type : String,
        requried : [ true, 'All fields are requried' ],
        trim : true
    },
    email : {
        type : String,
        requried : [ true, 'All fields are requried' ],
        trim : true,
    },
    password : {
        type : String,
        requried : [ true, 'All fields are requried' ],
        trim : true,
    },
    username : {
        type : String,
        requried : [ true, 'All fields are requried' ],
        trim : true,
    },
    photo : {
        type : String
    },
    age : {
        type : Number,

    },
    gender : {
        type : String
    },
    isAdmin : {
        type : Boolean,
        default : false
    },
    isVerified : {
        type : Boolean,
        default : false
    },
    statue : {
        type : Boolean,
        default : true
    },
    trash : {
        type : Boolean,
        default : false
    }

}, {
    timestamps : true
});


// export default students model
export default mongoose.model( 'User', userModel )