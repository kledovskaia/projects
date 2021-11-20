import bcrypt from "bcrypt"
import { AuthenticationError, ForbiddenError } from "apollo-server-errors"
import { generateJWT } from "../jwt.js"

export const updateProfile = async (_, args, { models, user }) => {
  if (!user) throw new ForbiddenError("Please Sign In to perform this action")
  try {
    const isEmailTaken = !!(await models.User.findOne({
      email: args.email,
    }))
    if (isEmailTaken) throw new ForbiddenError("This Email is Already Taken")
    user = await models.User.findOneAndUpdate(
      { _id: user.id },
      {
        $set: {
          ...(args.name ? { name: args.name } : {}),
          ...(args.email ? { email: args.email } : {}),
          ...(args.imgUrl ? { imgUrl: args.imgUrl } : {}),
        },
      }
    )
    return user
  } catch (error) {
    console.log(error)
    throw new ForbiddenError(error)
  }
}

export const signIn = async (_, { email, password }, { models }) => {
  try {
    const user = await models.User.findOne({
      email,
    })
    if (!user) throw new AuthenticationError("User Not Found")
    const valid = await bcrypt.compare(password, user.password)
    if (!valid) throw new AuthenticationError("Wrong Password")
    return generateJWT(user)
  } catch (error) {
    console.log(error)
    throw new AuthenticationError(error)
  }
}

export const signUp = async (_, { name, email, password }, { models }) => {
  const hashedPassword = await bcrypt.hash(password, 10)
  try {
    const found = await models.User.findOne({ email })
    if (found)
      throw new AuthenticationError(
        `User with email "${email}" is already exist`
      )
    const user = await models.User.create({
      name,
      email,
      password: hashedPassword,
    })
    return generateJWT(user)
  } catch (error) {
    console.log(error)
    throw new AuthenticationError(error)
  }
}
