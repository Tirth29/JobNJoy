import mongoose from 'mongoose'

const URL= process.env.MONGODB_URL;
const Connection = async () =>{
    try{
       await  mongoose.connect(URL,{useUnifiedTopology:true})
       console.log('Database connected')
        
    
    }catch(err){
        console.log('Error : ',err);
    }
}
export default Connection;