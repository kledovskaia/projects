import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { notFound } from './middleware/not-found.js'
import { errorHandler } from './middleware/error-handler.js'
import { products } from './routes/products.js'
import { connectDB } from './db/connect.js'

const app = express()
const port = process.env.PORT || 3001

app.use(notFound)
app.use(errorHandler)
app.use('/api/v1/products', products)

connectDB(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => console.log(`Listening on port ${port}`))
  })
  .catch((error) => {
    console.error(error)
  })
