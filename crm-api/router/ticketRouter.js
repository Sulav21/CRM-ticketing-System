import express from 'express'

const router = express.Router()

router.get('/',(req,res,next)=>{
    res.json({
        message:"You have hit the ticket router"
    })
})

export default router

