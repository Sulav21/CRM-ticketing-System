import express from 'express'
import { createAccessJWT, verifyRefreshJWT } from '../helpers/jwt.helper.js'
import { getAllUsers } from '../models/user/user.Model.js'

const router = express.Router()

router.get('/', async(req,res,next)=>{
 try {
    const refreshToken = req.headers.authorization
    
    const decoded = await verifyRefreshJWT(refreshToken)
    if(decoded?.payload){
        const user = await getAllUsers({email:decoded.payload})
        if(user?._id){
            const newAccessJwt = await createAccessJWT({email:user.email})
           return res.json({
                status:'success',
                newAccessJwt
            })
        }
    }

    res.status(401).json({
        status:"error",
        message:"Log out user"
    })
    
 } catch (error) {
    error.status = 401
    next(error)
 }

  
})



export default router; 