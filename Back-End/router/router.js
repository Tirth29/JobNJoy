import express from 'express'
import { AddUser } from '../controller/Usercontroller.js'

const Router = express.Router()

Router.post('/AddUser',AddUser)

export default Router