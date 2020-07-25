// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import User from '../entity/User'

class AuthController {
  async SignUp (req: Request, res: Response) {
    const userRepository = getRepository(User)
    const { username, email, password } = req.body
    const userExists = await userRepository.findOne({ where: { email } })
    if (userExists) {
      return res.sendStatus(409)
    }
    const hashed = bcrypt.hashSync(password, 10)
    const user = await userRepository.create({ email, username, password: hashed })
    await userRepository.save(user)
    return res.json(user)
  }

  async SignIn (req: Request, res: Response) {
    const userRepository = getRepository(User)
    const { email, password } = req.body
    const userExists = await userRepository.findOne({ where: { email } })
    if (!userExists) {
      return res.sendStatus(400)
    }
    const validPass = await bcrypt.compareSync(password, userExists.password)
    if (!validPass) {
      throw new Error('Passwords don\'t match')
    }
    const token = jwt.sign({ auth: userExists }, 'private')
    return res.json({ token })
  }
}

export default new AuthController()
