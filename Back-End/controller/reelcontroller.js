
import { Reels } from "../models/reels.js";

export const like = async(req,res)=>{
    try{
        console.log('user : ',req.user._id);
        console.log('sender : ',req.body._id)

        const Reel = await Reels.findById(req.body._id)

        console.log("reel : ",Reel)

        Reel.likes.push(req.user._id)
        await Reel.findByIdAndUpdate(req.body._id,{likes:Reel.likes})

        return res.status(200).json('liked reel')

    }catch(err){
        return res.status(500).json(err)
    }
}

export const dislike = async(req,res)=>{
    try{
        console.log('user : ',req.user._id);
        console.log('sender : ',req.body._id)

        const Reel = await Reels.findById(req.body._id)

        console.log("reel : ",Reel)

       const index = Reel.likes.indexOf(req.user._id)
       Reel.likes.splice(index)
        await Reel.findByIdAndUpdate(req.body._id,{likes:Reel.likes})

        return res.status(200).json('disliked reel')
    }catch(err){
        return res.status(500).json(err)
    }
}