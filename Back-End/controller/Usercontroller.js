import { User } from "../models/User.js";


export const AddFollower = async(req,res) =>{
    try{
        const temp_user = await User.findById(req.user._id)
        const temp_sender_check = await User.findOne({username:req.body._id})
      

        console.log('temp_user : ',temp_user)
        console.log('temp_sender_check : ',temp_sender_check)
       
        if(!temp_user || !temp_sender_check)
        {
            return res.status(200).json('sorry but this user not exixst')
        }
        console.log('temp_user.username : ',temp_user.username)
        console.log('req.body._id : ',req.body._id)
        if(temp_user.username == req.body._id){
            console.log('you are here')
            return res.status(200).json('you can not follow yourself')
        }
        if(temp_user.following.includes(req.body._id) )
        {
            return res.status(200).json('sorry this is alraedy added')
        }


       
       console.log('here')
        temp_user.following.push(req.body._id)
      console.log('temp User : ',temp_user)
       const user=  await User.findByIdAndUpdate(req.user._id,{following:temp_user.following}) 
       console.log('user : ',user)

        const temp_sender = await User.findOne({username:req.body._id})
       
        temp_sender.follower.push(temp_user.username)
       
       const sender = await User.findOneAndUpdate({username:req.body._id},{follower:temp_sender.follower})

       console.log('sender : ',sender)
      
        return res.status(200).json('follower added')

    }catch(err){
           return res.status(500).json(err)
    }
}

export const unfollow = async (req,res) =>{
    try{

      console.log('i am here')
        const temp_user = await User.findById(req.user._id)
        const temp_sender_check = await User.findOne({username:req.body._id})
       

        console.log('temp_user : ',temp_user)
        console.log('temp_sender_check : ',temp_sender_check)
       
        if(!temp_user || !temp_sender_check)
        {
            return res.status(200).json('sorry but this user not exixst')
        }
        if(!temp_user.following.includes(req.body._id))
        {
            return res.status(200).json('sorry but you are not following this user')
        }
       
        const index = temp_user.following.indexOf(req.body._id)
        const user=temp_user.following.splice(index,1)

        console.log('user : ',user)
        console.log('deleted temp user : ',temp_user.following)

          await User.findByIdAndUpdate(req.user._id,{following:temp_user.following}) 

        const temp_sender = await User.findOne({username:req.body._id})
       
        console.log('username : ',req.user.username)
        const index2= temp_sender.follower.indexOf(req.user.username)
        const sender = temp_sender.follower.splice(index2,1)

        console.log('sender : ',sender)
        console.log('deleted temp sender : ',temp_sender)
       await User.findOneAndUpdate({username:req.body._id},{follower:temp_sender.follower})

        return res.status(200).json('deleted')

    }catch(err){
           return res.status(500).json(err)
    }
}

export const checkfollower = async(req,res)=>{
    try{
        const temp =await User.findOne({username:req.body.User})
        if(!temp)
        {
            return res.status(200).json('sorry but this user not exixst')
        }

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