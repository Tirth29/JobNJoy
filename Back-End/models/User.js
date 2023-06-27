import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const schema = new mongoose.Schema({
        username:{
            type:String,
            require:[true,"Please enter username"],
            Unique:[true,"Username already exists"],
        },
        name:{
            type: String,
            required:[true,"Please enter name"]
        },
        email:{
            type: String,
            required:[true,"Please enter email"],
            unique: [true,"Email already exists"],
            validate:validator.isEmail,
        },
        password:{
            type: String,
            required:[true,"Please enter password"],
            minLength:[6,"Password must be atleast 6 characters long"],
            select:false,
        },
        gender:{
            type:String,
            // require:true
        },
        dob:{
            type:Date,
            // require:true
        },
<<<<<<< HEAD
        Gender:{
            type:String,
            require:true
        },
        BioData:{
            type:String,
           
        },
        Photo:{
            type:String,
            
=======
        biodata: {
            line1: String,
            line2: String,
            line3: String,
            line4: String,
            line5: String
          },
        photo:{
            public_id: String,
            url: String,
>>>>>>> 181c7a0874e67595e6b8889bdc236743f68e940d
        },
        follower:{
            type:Array
        },
        following:{
            type:Array
        },
        save:{
            type:Array
        },
        otp:Number,
        otp_expire:Date,
},
{
    timestamps:true
})

schema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
});

schema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };

schema.methods.generateToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{expiresIn:1000*60*60*24*15})
}

export const User = mongoose.model("User", schema);