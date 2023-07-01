import express from 'express';

import { singleUpload } from '../middleware/multer.js';
import { isAuthenticated } from '../middleware/auth.js';
import { PostUpload, getAllSelfPost, getOtherUserPost } from '../controllers/post.js';

const router = express.Router()

router.post("/postupload",isAuthenticated,singleUpload,PostUpload);
router.get("/userselfpost",isAuthenticated,getAllSelfPost);
router.get("/otheruserpost",isAuthenticated,getOtherUserPost);
export default router