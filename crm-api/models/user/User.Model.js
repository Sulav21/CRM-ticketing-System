import userSchema from "./user.Schema.js";

export const insertUser = userObj => {
return userSchema(userObj).save()
}

export const getAllUsers=()=>{
return userSchema.find()
}

export const getUser=(filter)=>{
    return userSchema.findById(filter)
}

export const updateUser=(filter,obj)=>{
    return userSchema.findByIdAndUpdate(filter,obj,{new:true})
}