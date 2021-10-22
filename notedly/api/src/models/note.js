const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    favoriteCount: {
      type: Number,
      required: true,
      default: 0
    },
    favoritedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      default: []
    }
  },
  {
    timestamps: true
  }
);
const Note = mongoose.model('Note', noteSchema);
module.exports = Note;
