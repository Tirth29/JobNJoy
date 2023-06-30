import express from 'express'


import { AddFollower, unfollow, checkfollower} from '../controller/Usercontroller.js'

const Router = express.Router()


Router.post('/add/follower',AddFollower)
Router.post('/add/unfollow',unfollow)
Router.post('/add/checkfollower',checkfollower)



export default Router