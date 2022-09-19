import { verifyAccessJWT } from "../helpers/jwt.helper.js";
import { getSession } from "../models/sessions/sessions.Model.js";
import { getAllUsers } from "../models/user/user.Model.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (authorization) {
      const isValid = await verifyAccessJWT(authorization);
      if(isValid === 'jwt expired'){
       return res.status(403).json({
            status:"error",
            message:"jwt has expired"
        })
      }
      if (isValid?.payload) {
        const checkInDb = await getSession({
          token:authorization,
          type:"jwt"
        });
        if (checkInDb?._id) {
           
          const admin = await getAllUsers({ email: isValid.payload });
       
          if(admin?._id){
           req.userInfo = admin
            return next();
          }
        
        }
      }
    }
    res.status(401).json({
      status: "error",
      message: "Unauthorized !",
    });
  } catch (error) {
    console.log(error);
  }
};
