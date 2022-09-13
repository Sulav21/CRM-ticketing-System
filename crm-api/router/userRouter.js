import express from "express";
import { comparePassword, PasswordHash } from "../helpers/bcryptHelper.js";
import { createAccessJWT,createRefreshJWT} from "../helpers/jwt.helper.js";
import { getAllUsers, getUser, insertUser } from "../models/user/user.Model.js";

const router = express.Router();


router.post("/", async (req, res, next) => {
  try {
    const hashpass = PasswordHash(req.body.password);
    req.body.password = hashpass;
    const result = await insertUser(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "User inserted successfully",
          result,
        })
      : res.json({
          status: "error",
          message: "Error inserting an user",
        });
  } catch (error) {
    error.status = 500;
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.message = "Email already exists";
    }

    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
  const { email, password } = req.body;

    const user = await getAllUsers({ email });
    
    if (user?._id) {
     
   
      const comparePass = comparePassword(password, user.password);
      if (comparePass) {
        const accessJWT = await createAccessJWT(user.email)
        const refreshJWT = await createRefreshJWT(user.email)
        user.password = undefined;
        res.json({
          status: "success",
          message: "Logged in successfully",
          accessJWT,
          refreshJWT
        });
        return;
      }
    }

    res.status(401).json({
      status: "error",
      message: "Invalid credentials",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
