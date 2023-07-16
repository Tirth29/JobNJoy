import express from 'express'


import { AddFollower, unfollow, checkfollower} from '../controller/Usercontroller.js'
import { isAuthenticated } from '../middleware/auth.js'

const Router = express.Router()


Router.post('/add/follower',isAuthenticated,AddFollower)
Router.post('/add/unfollower',isAuthenticated,unfollow)
Router.post('/add/checkfollower',checkfollower)



export default Router