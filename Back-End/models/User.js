import mongoose from "mongoose";

const UserScheam = mongoose.Schema({
        UserName:{
            type:String,
            require:true,
            Unique:true
        },
        password:{
            type:String,
            require:true
        },
        Email:{
            type:String,
            require:true,
            Unique:true
        },
        Name:{
            type:String,
            require:true
        },
        Gender:{
            type:String,
            require:true
        },
        BioData:{
            type:String,
           
        },
        Photo:{
            type:String,
            
        },
        follower:{
            type:Array
        },
        following:{
            type:Array
        },
        save:{
            type:Array
        }

},
{
    timestamps:true
})

const User = mongoose.model('Users',UserScheam)
export default User;