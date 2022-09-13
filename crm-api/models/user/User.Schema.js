import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    maxlength:11,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    index: 1,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  refreshJWT:{
    
      type:String,
      default:"",
   
  }
});


export default mongoose.model("user",userSchema)
