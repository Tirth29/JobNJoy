import { User } from "../../models/User.js";
import { Post } from "../../models/post.js";

export const addlike =async(req,res)=>{
    try{
        const temp_post = await Post.findOne({_id:req.body._id})
        const temp_user = await User.findOne({_id:req.body.User})

       

        if(!temp_post){
            return res.status(200).json('this post not exist')
        }
        if(!temp_user){
            return res.status(200).json('sorry this User not Exist')
        }
        if(temp_post.likes.includes(req.body.User))
        {
            return res.status(200).json('this user already liked this post')
        }
       
        temp_post.likes.push(req.body.User)

        await Post.findOneAndUpdate({_id:req.body._id},{likes:temp_post.likes})

        return res.status(200).json('liked')


    }catch(err){
            return res.status(500).json(err)
    }
}


export const removelike =async(req,res)=>{
    try{
        const temp_post= await Post.findOne({_id:req.body._id})
        const temp_user = await User.findOne({_id:req.body.User})

        if(!temp_post){
            return res.status(200).json('this post not exist')
        }
        if(!temp_user){
            return res.status(200).json('sorry this User not Exist')
        }

      const index =   temp_post.likes.indexOf(req.body.User)

     
      if(index == -1){
        return res.status(200).json('this user did not liked this post')
      }

       temp_post.likes.splice(index)

       await Post.findOneAndUpdate({_id:req.body._id},{likes:temp_post.likes})
       return res.status(200).json('disliked')

    }catch(err){
            return res.status(500).json(err)
    }
}



export const checklikes =async(req,res)=>{
    try{
        const temp_post= await Post.findOne({_id:req.body._id})

        if(!temp_post){
            return res.status(200).json('This Post Not Exist')
        }

        const check =temp_post.likes.includes(req.body.User)
        if(check){
            return res.status(200).json(true)
        }
        else{
            return res.status(200).json(false)
        }

    }catch(err){
            return res.status(500).json(err)
    }

}

export const countLikes = async(req,res)=>{
    try{
        const temp_post = await Post.findOne({_id:req.body._id})

        if(!temp_post){
            return res.status(200).json('This post is not Exist')
        }
        const count = temp_post.likes.length
        return res.status(200).json(count)
    }catch(err){
            return res.status(500).json(err)
    }

}