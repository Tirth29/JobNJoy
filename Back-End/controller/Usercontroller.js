import User from "../models/User.js";

export const AddUser = async(req,res) =>{
    try{
        const Temp = await User.findOne({$or:[{UserName:req.body.Username},{Email:req.body,Email}]})
        if(Temp)
        {
            return res.status(200).json('Username')
        }
        else{
            const NewUser = new User(req.body)

            
            await NewUser.save()

            return res.status(200).json('saved')
        }

    }catch(err){
        return res.status(500).json(err)
    }
}