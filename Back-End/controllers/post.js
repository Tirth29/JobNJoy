import {Post} from "../models/post.js";
import { User } from "../models/User.js";
import {asyncError} from "../middleware/error.js";
import errorHanlder from "../utils/error.js";
import { getDataUri } from "../utils/features.js";
import cloudinary from "cloudinary";
export const PostUpload = asyncError(async (req, res, next) => {
    const {caption , location}=req.body;
    console.log(req.user);
    const user = await User.findById(req.user._id);
    let photo = undefined;
    if (req.file) {
      const file = getDataUri(req.file);
      // add cloudinary here
      const myCloud = await cloudinary.v2.uploader.upload(file.content);
      console.log(myCloud);
      photo = {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      };
      console.log(photo);
    }
    let post =undefined;
    post = await Post.create({
        photo,
        caption,
        location,
        username: user.username
    });
    res.status(201).json({
        success:true,
        message : "Post Uploaded Successfully",
    });

});

export const getAllSelfPost = asyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  const posts = await Post.find({username:user.username});
  res.status(200).json({
    success:true,
    posts
  })
});

export const getOtherUserPost = asyncError( async (req, res, next) => {

  const {user} = req.query;
  const posts = await Post.find({username:user});

  res.status(200).json({
    success:true,
    posts,
  });
});