import express from "express"
import * as tasks from "../controllers/tasks.js"

const router = express.Router()

router.route("/").get(tasks.getAll).post(tasks.createOne)
router
  .route("/:id")
  .get(tasks.getOne)
  .patch(tasks.updateOne)
  .delete(tasks.deleteOne)

export default router
