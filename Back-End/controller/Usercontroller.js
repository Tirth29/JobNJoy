import { User } from "../models/User.js";


export const AddFollower = async(req,res) =>{
    try{
        const temp_user = await User.findOne({username:req.body.User})
       
      
        temp_user.following.push(req.body.Sender)
      
       const user=  await User.findOneAndUpdate({username:req.body.User},{following:temp_user.following}) 
     

        const temp_sender = await User.findOne({username:req.body.Sender})
       
        temp_sender.follower.push(req.body.User)
       
       const sender = await User.findOneAndUpdate({username:req.body.Sender},{follower:temp_sender.follower})
      
        return res.status(200).json('follower added')

    }catch(err){
           return res.status(500).json(err)
    }
}

export const unfollow = async (req,res) =>{
    try{
        const temp_user = await User.findOne({username:req.body.User})
       
        const index = temp_user.following.indexOf(req.body.Sender)
        const user=temp_user.following.splice(index,1)

        console.log('user : ',user)
      

          await User.findOneAndUpdate({username:req.body.User},{following:temp_user.following}) 

        const temp_sender = await User.findOne({username:req.body.Sender})
       

        const index2= temp_sender.follower.indexOf(req.body.User)
        const sender = temp_sender.follower.splice(index2,1)

        console.log('sender : ',sender)
        
       await User.findOneAndUpdate({username:req.body.Sender},{follower:temp_sender.follower})

        return res.status(200).json('deleted')

    }catch(err){
           return res.status(500).json(err)
    }
}

export const checkfollower = async(req,res)=>{
    try{
        const temp =await User.findOne({username:req.body.User})
        const index = temp.following.includes(req.body.Sender)

        console.log('index : ',index)
        if(index){
            return res.status(200).json(true)
        }
        else
        {
            return res.status(200).json(false)
        }
        
    }catch(err){
           return res.status(500).json(err)
    }
}