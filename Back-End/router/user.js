import express from 'express';
import {OtherUserProfile, getMyProfile, logOut, login, signup, updatePassword, updateProfile, updateProfilePic } from '../controllers/user.js';
import { singleUpload } from '../middleware/multer.js';
import { isAuthenticated } from '../middleware/auth.js';


const router = express.Router()

// authentication routes
router.post("/new",singleUpload,signup);
router.post("/login",login);
router.get("/me",isAuthenticated,getMyProfile)
router.get("/logout",isAuthenticated, logOut);
router.get("/otheruserprofile",isAuthenticated,OtherUserProfile);

// update routes
router.post("/updateprofile",isAuthenticated,singleUpload,updateProfile);
router.post("/updatepassword",isAuthenticated,updatePassword);
router.post("/updateprofilepic",isAuthenticated,singleUpload,updateProfilePic);


export default router