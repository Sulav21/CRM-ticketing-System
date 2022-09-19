import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
token:{
    type:String,
    required:true
},
type:{
    type:String,
    required:true
},
associate:{
    type:String,
    default:"",
}
})

export default mongoose.model('session',sessionSchema)