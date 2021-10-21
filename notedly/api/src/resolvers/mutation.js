const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
  AuthenticationError,
  ForbiddenError
} = require('apollo-server-express');
require('dotenv').config();

const gravatar = require('../util/gravatar');

const normalize = string => string.replace(' ', '').toLowerCase();

module.exports = {
  signUp: async (_, args, { models }) => {
    const email = normalize(args.email);
    const username = normalize(args.username);
    const avatar = gravatar(email);
    const hashed = await bcrypt.hash(args.password, 10);

    try {
      const user = await models.User.create({
        avatar,
        username,
        email,
        password: hashed
      });
      return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    } catch (error) {
      console.log(error);
      throw new Error('Error creating account');
    }
  },
  addNote: async (_, { content, author }, { models }) => {
    const newNote = {
      content,
      author
    };
    return await models.Note.create(newNote);
  },
  deleteNote: async (_, { id }, { models }) => {
    try {
      await models.Note.findOneAndDelete({ _id: id });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  updateNote: async (_, { id, content }, { models }) => {
    return await models.Note.findOneAndUpdate(
      {
        _id: id
      },
      {
        content
      },
      {
        new: true
      }
    );
  }
};
