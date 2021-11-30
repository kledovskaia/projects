import jwt from 'jsonwebtoken'
import { BadRequestError } from '../errors/errors.js'

export const login = (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    throw new BadRequestError('Please provide username and password')
  }
  const token = jwt.sign({ username, password }, process.env.JWT_SECRET)
  if (token) res.send({ token })
}
