import express from 'express';

import { singleUpload } from '../middleware/multer.js';
import { isAuthenticated } from '../middleware/auth.js';
import { PostUpload } from '../controllers/post.js';

const router = express.Router()

router.post("/postupload",isAuthenticated,singleUpload,PostUpload);

export default router