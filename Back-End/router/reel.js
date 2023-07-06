import express from 'express';

import { singleUpload } from '../middleware/multer.js';
import { isAuthenticated } from '../middleware/auth.js';
import { ReelUpload, addCategory, getAllCategories, getAllReel, getCategorywiseReel } from '../controllers/reel.js';

const router = express.Router()

router.post("/reelupload",isAuthenticated,singleUpload,ReelUpload);
router.get("/allreel",getAllReel);
router.get("/categorywisereel",getCategorywiseReel);
router.post("/addcategory",isAuthenticated,addCategory);
router.get("/getallcategories",isAuthenticated,getAllCategories);

export default router