const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
  AuthenticationError,
  ForbiddenError
} = require('apollo-server-express');
require('dotenv').config();
const mongoose = require('mongoose');
const gravatar = require('../util/gravatar');

const normalize = (string = '') => string.replace(' ', '').toLowerCase();

module.exports = {
  signIn: async (_, { email, username, password }, { models }) => {
    try {
      const user = await models.User.findOne({
        $or: [{ email: normalize(email) }, { username: normalize(username) }]
      });
      if (!user) throw new AuthenticationError('Error signing in');
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) throw new AuthenticationError('Error signing in');
      return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    } catch (error) {
      console.log(error);
      throw new Error('Authorization failed');
    }
  },
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
  addNote: async (_, { content }, { models, user }) => {
    if (!user)
      throw new AuthenticationError('You must be signed in to create a note');

    return await models.Note.create({
      content,
      author: mongoose.Types.ObjectId(user.id)
    });
  },
  deleteNote: async (_, { id }, { models, user }) => {
    if (!user)
      throw new AuthenticationError('You must be signed in to delete a note');

    const note = await models.Note.findById(id);
    if (!note) throw new ForbiddenError('Note not found');
    if (note && String(note.author) !== user.id)
      throw new ForbiddenError("You don't have permissions to delete the note");

    try {
      await note.remove();
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  updateNote: async (_, { id, content }, { models, user }) => {
    if (!user)
      throw new AuthenticationError('You must be signed in to update a note');

    const note = await models.Note.findById(id);
    if (!note) throw new ForbiddenError('Note not found');
    if (note && String(note.author) !== user.id)
      throw new ForbiddenError("You don't name permissions to update the note");

    return await models.Note.findOneAndUpdate(
      {
        _id: id
      },
      {
        content
      },
      { new: true }
    );
  }
};
