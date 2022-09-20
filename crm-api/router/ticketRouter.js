import express from 'express'

const router = express.Router()

router.all('/',(req,res,next)=>{
  next()
})

router.post('/',(req,res,next)=>{
    try {
        const{subject,sender,message} = req.body;
        
        
    } catch (error) {
        
    }
})

export default router

