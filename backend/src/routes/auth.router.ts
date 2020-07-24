import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  return res.json({ msg: 'Help me' })
})

export default router
