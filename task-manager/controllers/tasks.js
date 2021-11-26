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
    if (!task) throw new Error()
    res.status(200).json({ task })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Error Creating a Task" })
  }
}
export const updateOne = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
    if (!task) throw new Error()
    res.status(200).json({ task })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: `Error updating the task with id ${req.params.id}` })
  }
}
export const deleteOne = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id })
    if (!task) throw new Error()
    res.status(200).json({ task })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: `Error deleting the task with id ${req.params.id}` })
  }
}
