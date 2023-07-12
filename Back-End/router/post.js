import express from 'express';

import { singleUpload } from '../middleware/multer.js';
import { isAuthenticated } from '../middleware/auth.js';
import { PostUpload, allOtherPost, getAllSelfPost, getOtherUserPost } from '../controllers/post.js';
import { addlike,removelike,checklikes, countLikes } from '../controller/likecontroller.js/likecontroller.js';

const router = express.Router()

router.post("/postupload",isAuthenticated,singleUpload,PostUpload);
router.get("/userselfpost",isAuthenticated,getAllSelfPost);
router.get("/otheruserpost",isAuthenticated,getOtherUserPost);
router.get("/allotherpost",isAuthenticated,allOtherPost);
router.post("/liked",addlike)
router.post("/disliked",removelike)
router.post("/getlikes",checklikes)
router.post('/countlikes',countLikes)

export default router