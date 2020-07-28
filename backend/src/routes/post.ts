import { Router } from 'express'

import postController from '../controller/post'
import authGuard from '../guards/authGuard'

const router = Router()

router.post('/', authGuard, postController.Store)
router.get('/', postController.Index)
router.get('/:id', postController.Single)
router.delete('/:id', authGuard, postController.Destroy)

export default router
