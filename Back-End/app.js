import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

config({
    path: './General.env',
})
export const app = express()

app.use(express.json())
app.use(cookieParser())
app.get("/", (req, res) => {
    res.send("Working")
})

app.use(
    cors({
        credentials: true,
        methods:["GET","POST","PUT","DELETE"],
    })
)

// import all routes here 
import user from "./router/user.js"
import post from "./router/post.js"
import reel from "./router/reel.js"

app.use('/api/user',user);
app.use('/api/post',post);
app.use('/api/reel',reel);
