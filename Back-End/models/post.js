import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    Photo:{
        type:String
    },
    UserName:{
        type:String
    },
    caption:{

    },
    like:{
        type:Array
    },
    comment:{
        type:Object
    }
},{
    timestamps:true
})

const Post  = mongoose.model('Posts',PostSchema)
export default Post;