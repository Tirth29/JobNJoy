import express from 'express'
import Router from './router/router.js'
import cors from 'cors'
import bodyParser from 'body-parser'
import Connection from './connection/connect.js'

const app = express()

const Port = 6000

Connection();


app.use(cors())
app.use(bodyParser.json({exextended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Router)

app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`)
})