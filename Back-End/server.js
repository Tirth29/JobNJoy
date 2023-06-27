import {app} from './app.js'
import Connection from './connection/connect.js'
<<<<<<< HEAD


const app = express()

const Port = process.env.port
=======
import cloudinary from "cloudinary";
>>>>>>> 181c7a0874e67595e6b8889bdc236743f68e940d

Connection();

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

app.listen(process.env.PORT , ()=>{
    console.log(`server listening on ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})