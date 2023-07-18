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

app.use(function (req, res, next) {
    const corsWhitelist = [
  "http://127.0.0.1:5173",
  "http://localhost:5173",
  "http://localhost:5173/",
  "http://127.0.0.1:5173/",
  "http://127.0.0.1:5173/login",
  "http://127.0.0.1:5173/register",
  "http://127.0.0.1:5173/profile",
  "http://127.0.0.1:5173/updateprofilepic",
  "http://127.0.0.1:5173/editprofile"
    ];
    if (corsWhitelist.indexOf(req.headers.origin) !== -1) {
      res.header("Access-Control-Allow-Origin", req.headers.origin);
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, HEAD, OPTIONS");
      res.header("Access-Control-Allow-Headers", "Content-Type");
      res.header("Access-Control-Allow-Credentials", true);
    }
    next();
  });

// import all routes here 
import user from "./router/user.js"
import post from "./router/post.js"
import reel from "./router/reel.js"
import Router from "./router/router.js";
// import company from "./router/company.js";
app.use('/api/user',user);
app.use('/api/manage',Router)
app.use('/api/post',post);
app.use('/api/reel',reel);
// app.use('/api/company',company);
