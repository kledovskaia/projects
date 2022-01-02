import jwt from 'jsonwebtoken'
import { BadRequestError, UnAuthorizedError } from '../errors/errors.js'
import dotenv from 'dotenv'
dotenv.config()

export const authorized = (req, res, next) => {
  const token = req.headers.authorization
  if (!token || !token.startsWith('Bearer ') || token.split(' ')[1] === 'null')
    throw new UnAuthorizedError('Invalid token')
  const { username } = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET)
  if (!username) throw new UnAuthorizedError('Invalid token')
  req.body = { username }
  next()
}
