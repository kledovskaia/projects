import mongoose from "mongoose"

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: [2, "Task must be at least 2 characters long"],
    maxLength: [20, "Task mustn't be longer than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

export const Task = new mongoose.model("Task", TaskSchema)
