import express from 'express';

import { singleUpload } from '../middleware/multer.js';
import { isAuthenticated } from '../middleware/auth.js';
import { ReelUpload, addCategory, getAllCategories, getAllReel, getCategorywiseReel } from '../controllers/reel.js';
import { dislike, like } from '../controller/reelcontroller.js';

const router = express.Router()

router.post("/reelupload",isAuthenticated,singleUpload,ReelUpload);
router.get("/allreel",getAllReel);
router.get("/categorywisereel",getCategorywiseReel);
router.post("/addcategory",isAuthenticated,addCategory);
router.get("/getallcategories",isAuthenticated,getAllCategories);
router.post("/likereel",isAuthenticated,like)
router.post("/dislikereel",isAuthenticated,dislike)

export default router