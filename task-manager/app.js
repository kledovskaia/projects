import tasks from "./routes/tasks.js"
import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.use("/api/v1/tasks", tasks)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})
