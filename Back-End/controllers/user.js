import {User} from "../models/User.js";
import {asyncError} from "../middleware/error.js";
import errorHanlder from "../utils/error.js";
import cloudinary from "cloudinary";
import { cookieOptions, sendToken } from "../utils/features.js";
import { getDataUri } from "../utils/features.js";
import bcrypt from "bcrypt";

export const signup = asyncError(async (req, res, next) => {
  const { username, name, email, password, gender, dob, biodata} = req.body;

  let user = await User.findOne({ email });
  if (user) return next(new errorHanlder("Email already exists", 400));

  // file request
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

    user = await User.create({
    photo,
    username,
    name,
    email,
    password,
    gender,
    dob,
    biodata,
  });
  sendToken(user, res, `Registered Successfully`, 201);
});


export const login = asyncError(async (req, res, next) => {
  const { email, username, password } = req.body;
  const user = await User.findOne({ email }).select("+password") || await User.findOne({ username }).select("+password");
  // handle error
  if (!user) {
    return next(new errorHanlder("Incorrect Email/Username or Password", 400));
  }
  if (!password) return next(new errorHanlder("Please enter password"), 400);

  const isMatched = await user.comparePassword(password);

  if (!isMatched) {
    return next(new errorHanlder("Incorrect Email or Password", 400));
  }
  sendToken(user, res, `Welcome back ${user.name}`, 200);
});

export const getMyProfile = asyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({ success: true, user });
});

export const logOut = asyncError(async (req, res, next) => {
  res
    .status(200)
    .cookie("token", "", {
      ...cookieOptions,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Log Out Successfully",
    });
});



export const updateProfile = async (req, res, next) => {
    const userId = req.user._id;
    const { name, email, username, gender, dob, biodata } = req.body;

    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      {
        $set: {
          name: name || undefined,
          email: email || undefined,
          username: username || undefined,
          gender: gender || undefined,
          dob: dob || undefined,
          biodata: biodata || undefined,
        },
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: updatedUser,
    });
};

export const updatePassword = asyncError(async (req, res, next) => {

  const user = await User.findById(req.user._id).select("+password");
  const { currentPassword, newPassword } = req.body;
  if (!currentPassword || !newPassword)
    return next(new errorHanlder("Please enter all fields", 400));

  const isMatched = await user.comparePassword(currentPassword);

  if (!isMatched) {
    return next(new errorHanlder("Incorrect Password", 400));
  }
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashedPassword;
  await User.updateOne({ _id: user._id }, { password: user.password });
  // await user.save();

  sendToken(user, res, `Password Updated Successfully`, 200);

});

export const updateProfilePic = asyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  const file = getDataUri(req.file);
  console.log(user.photo.public_id);
  await cloudinary.v2.uploader.destroy(user.photo.public_id);
  console.log(user.photo.public_id);

    // add cloudinary here
    const myCloud = await cloudinary.v2.uploader.upload(file.content);
    console.log(myCloud);
    user.photo = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
    await User.updateOne({ _id: user._id }, { photo: user.photo });

  res.status(200).json({
     success: true, 
     message:"Profile pic updated successfully"
    });
});
