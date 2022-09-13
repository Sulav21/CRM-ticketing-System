import express from "express";
import { PasswordHash } from "../helpers/bcryptHelper.js";
import { getAllUsers, getUser, insertUser } from "../models/user/user.Model.js";

const router = express.Router();

router.get("/", async(req, res, next) => {
try {
  const result = await getAllUsers()
  result?._id
  res.json({
    message: "All users here",
    result
  })
  
  
} catch (error) {
  next(error)
}
});

router.post("/", async(req, res, next) => {
try {
  
   const hashpass =  PasswordHash(req.body.password)
    req.body.password = hashpass
    const result = await insertUser(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "User inserted successfully",
          result
        })
      : res.json({
          status: "error",
          message: "Error inserting an user",
        });
    
} catch (error) {
    error.status = 500; 
    if(error.message.includes("E11000 duplicate key error collection")){
        error.message= 'Email already exists'
    }
    
   next(error)
    
}
});
export default router;
