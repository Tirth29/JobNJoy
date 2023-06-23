import mongoose from "mongoose";
const reelSchema = mongoose.Schema({
    UserName:{
        type:String
    },
    video:{
        type:String
    },
    caption:{
        type:String
    },
    like:{
        type:Array
    },
    type:{
        type:String
    },
    Comment:
    {
        type:Object
    }

},
{
    timestamps:true
})

const Reels = mongoose.model('Reels',reelSchema) 
export default Reels;