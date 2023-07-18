import { Reels } from "../models/reels.js";




export const reellike = async(req,res)=>{
    try{
        console.log('post id : ',req.body._id);
        console.log('user : ',req.user);
        
        const Post = Reels.findbyId(req.body._id);
        console.log('Post : ',Post);

        Post.likes.push(req.user._id)

        await Reels.findbyIdAndUpdate(req.body._id,{likes:Post.likes})
        
        return res.status(200).json('liked')
        
    }catch(error){
        return res.status(500).json('error : ',error)
    }
}

export const reeldislike = async(req,res) =>{
    try{
        console.log('post id : ',req.body._id);
        console.log('user : ',req.user);
        
        const Post = Reels.findbyId(req.body._id);
        console.log('Post : ',Post);

        const index = Post.likes.indexOf(req.user._id);
        Post.likes.splice(index);

        await Reels.findbyIdAndUpdate(req.body._id,{likes:Post.likes})

        return res.status(200).json('disliked')


    }catch(err){
        return res.status(500).json('error : ',error)
    }
}