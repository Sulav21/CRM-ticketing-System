import express from "express";
import cors from 'cors';
// import "body-parser";
import helmet from 'helmet';
import morgan from 'morgan';
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(helmet())

// Database Connection
import {dbConnection} from './config/db.js'
import bodyParser from "body-parser";
dbConnection()

// Global error handling

app.use((err,req,res)=>{
    console.log(err)
        res.status(err.status || 404)
        res.json({
            status:'error',
            message:err.message
        })
    })


app.listen(PORT, (error)=>{
    error && console.log(error)
    console.log(`Your server is running on port: ${PORT}`)
})