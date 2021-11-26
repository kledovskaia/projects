import tasks from "./routes/tasks.js"
import express from "express"
import dotenv from "dotenv"
dotenv.config()
import { connectDB } from "./db/connect.js"
import { notFound } from "./middleware/not-found.js"

const app = express()
const PORT = process.env.PORT
app.use(express.static("./public"))
app.use(express.json())
app.use("/api/v1/tasks", tasks)
app.use(notFound)

connectDB(process.env.MONGO_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
  })
})
