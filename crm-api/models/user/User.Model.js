import userSchema from "./user.Schema.js";

export const insertUser = userObj => {
return userSchema(userObj).save()
}

export const getAllUsers=(filter)=>{
return userSchema.findOne(filter)
}

export const getUser=(filter)=>{
    return userSchema.findById(filter)
}

export const updateUser=(filter,obj)=>{
    return userSchema.findOneAndUpdate(filter,obj,{new:true})
}