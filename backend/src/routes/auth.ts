import { Router } from 'express'

import authController from '../controller/auth'

const router = Router()

router.post('/signup', authController.SignUp)
router.post('/signin', authController.SignIn)

export default router
