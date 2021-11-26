import { Task } from "../models/task.js"

export const getAll = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
export const getOne = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id })
    if (!task) return res.status(404).json({ message: "Not Found" })
    return res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
export const createOne = async (req, res) => {
  try {
    const { content } = req.body
    const task = await Task.create({ content })
    if (!task) throw new Error("Error Creating a Task")
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
export const updateOne = (req, res) => {
  res.send("updateOne")
}
export const deleteOne = (req, res) => {
  res.send("deleteOne")
}
