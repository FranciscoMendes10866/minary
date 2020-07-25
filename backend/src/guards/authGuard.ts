// eslint-disable-next-line no-unused-vars
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

// eslint-disable-next-line no-unused-vars
import TokenPayload from '../interfaces/tokenPayload'

export default function AuthGuard (
  req: Request, res: Response, next: NextFunction
) {
  const { authorization } = req.headers
  if (!authorization) {
    return res.sendStatus(403)
  }
  const token = authorization.replace('Bearer', '').trim()
  try {
    const data = jwt.verify(token, 'private')
    const { id, username, email } = data as TokenPayload
    req.authId = id
    req.authUsername = username
    req.authEmail = email
    return next()
  } catch {
    return res.sendStatus(403)
  }
}
