import { Task } from "../models/task.js"
import { asyncWrapper } from "../middleware/async-wrapper.js"

export const getAll = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({})
  res.status(200).json({ tasks })
})

export const getOne = asyncWrapper(async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id })
  if (!task) return res.status(404).json({ message: "Not Found" })
  return res.status(200).json({ task })
})

export const createOne = asyncWrapper(async (req, res) => {
  const { name } = req.body
  const task = await Task.create({ name })
  if (!task) throw new Error()
  res.status(200).json({ task })
})

export const updateOne = asyncWrapper(async (req, res) => {
  const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
  if (!task) throw new Error()
  res.status(200).json({ task })
})
export const deleteOne = asyncWrapper(async (req, res) => {
  const task = await Task.findOneAndDelete({ _id: req.params.id })
  if (!task) throw new Error()
  res.status(200).json({ task })
})
