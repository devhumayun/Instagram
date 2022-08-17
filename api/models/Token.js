import mongoose from "mongoose";

const tokenModel = mongoose.Schema({

   userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
   },
   token : {
        type : String,
        required : true
   }

}, {
    timestamps : true
});


// export default students model
export default mongoose.model( 'Token', tokenModel )