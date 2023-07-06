import {app} from './app.js'
import Connection from './connection/connect.js'
import cloudinary from 'cloudinary'






Connection();

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

app.listen(process.env.PORT , ()=>{
    console.log(`server listening on ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})