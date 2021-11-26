import { Task } from "../models/task.js"
import { asyncWrapper } from "../middleware/async-wrapper.js"
import { customError } from "../helpers/customError.js"

export const getAll = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({})
  res.status(200).json({ tasks })
})

export const getOne = asyncWrapper(async (req, res, next) => {
  const task = await Task.findOne({ _id: req.params.id })
  if (!task) return next(customError(404, "Not Found"))
  return res.status(200).json({ task })
})

export const createOne = asyncWrapper(async (req, res, next) => {
  const { name } = req.body
  const task = await Task.create({ name })
  if (!task) return next(customError(500, "Error Creating a Task"))
  res.status(200).json({ task })
})

export const updateOne = asyncWrapper(async (req, res, next) => {
  const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
  if (!task)
    return next(
      customError(409, `Error Updating the Task with id: ${req.params.id}`)
    )
  res.status(200).json({ task })
})
export const deleteOne = asyncWrapper(async (req, res) => {
  const task = await Task.findOneAndDelete({ _id: req.params.id })
  if (!task)
    return next(
      customError(409, `Error Deleting the Task with id: ${req.params.id}`)
    )
  res.status(200).json({ task })
})
