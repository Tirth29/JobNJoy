import {Reels} from "../models/reels.js";
import { User } from "../models/User.js";
import {asyncError} from "../middleware/error.js";
import errorHanlder from "../utils/error.js";
import { getDataUri } from "../utils/features.js";
import cloudinary from "cloudinary";
import { Category } from "../models/category.js";

export const ReelUpload = asyncError(async (req, res, next) => {
    const {caption,category}=req.body;
    console.log(req.user);
    const user = await User.findById(req.user._id);
    let reel = undefined;
    let myCloud = undefined;
    if (req.file) {
      const file = getDataUri(req.file);
      // add cloudinary here
    console.log(file.content);
    try{
       myCloud = await cloudinary.v2.uploader.upload(file.content ,{
        resource_type: "video",
      });
      console.log(myCloud);
    }catch(error){
      console.log(error);
    }
        
    //   console.log(myCloud);
    console.log(2);
      reel = {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      };
      console.log(reel);
    }
    let abc =undefined;
    abc = await Reels.create({
        reel,
        caption,
        category,
        username: user.username
    });
    res.status(201).json({
        success:true,
        message : "Reel Uploaded Successfully",
    });

});

export const addCategory = asyncError(async (req, res, next) => {

  await Category.create(req.body);

  res.status(201).json({
      success:true,
      message:"Category added successfully"
  })
});

export const getAllCategories = asyncError(async (req, res, next) => {

  const categories = await Category.find({});

  res.status(200).json({
      success:true,
      categories,
  });

});

export const getAllReel = asyncError(async (req, res, next) => {

    const reels = await Reels.find({});

  res.status(200).json({
    success: true,
    reels,
  });
});

export const getCategorywiseReel = asyncError(async (req, res, next) => {
  const {category} = req.query;

  const reel = await Reels.find({
    category: category ? category : undefined, // Only include products with the specified category ID
  });
  
  res.status(200).json({
    success: true,
    reel,
  });
});

