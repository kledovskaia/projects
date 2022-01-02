import express from 'express'
import { login } from '../controllers/login.js'
import { dashboard } from '../controllers/dashboard.js'
import { authorized } from '../middleware/auth.js'

const router = express.Router()

router.route('/login').post(login)
router.route('/dashboard').get(authorized, dashboard)

export default router
