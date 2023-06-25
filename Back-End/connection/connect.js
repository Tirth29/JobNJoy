import mongoose from 'mongoose'

const URL= 'mongodb://tunnuthe005:Tunnu%40005@ac-vum5f6a-shard-00-00.a118u2l.mongodb.net:27017,ac-vum5f6a-shard-00-01.a118u2l.mongodb.net:27017,ac-vum5f6a-shard-00-02.a118u2l.mongodb.net:27017/?ssl=true&replicaSet=atlas-ej5nhq-shard-0&authSource=admin&retryWrites=true&w=majority'
const Connection = async () =>{
    try{
       await  mongoose.connect(URL,{useUnifiedTopology:true})
       console.log('Database connected')
        
    
    }catch(err){
        console.log('Error : ',err);
    }
}
export default Connection;