import mongoose from 'mongoose'
import { config } from "dotenv";
config({
    path: './General.env',
})
const URL= process.env.MONGO_URI;
console.log(process.env.PORT)

const Connection = async () =>{
    try{
        const {connection}= await  mongoose.connect(URL,{useUnifiedTopology:true},{
            dbName:"Summer-Project",
        })
       console.log('Database connected')
       console.log(`server connected to databse ${connection.host}`);
    }catch(err){
        console.log('Error : ',err);
    }
}

export default Connection;