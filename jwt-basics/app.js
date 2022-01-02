import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'
import express from 'express'
import { notFound } from './middleware/not-found.js'
import { errorHandler } from './middleware/error-handler.js'
import mainRouter from './routes/main.js'

const app = express()
// middleware
app.use('/api/v1', express.static('./public'))
app.use(express.json())

app.use('/api/v1', mainRouter)
app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 3000

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
