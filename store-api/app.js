import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { notFound } from './middleware/not-found.js'
import { errorHandler } from './middleware/error-handler.js'
import { products } from './routes/products.js'
import { connectDB } from './db/connect.js'
import 'express-async-errors'

const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'))

app.use('/api/v1/products', products)
app.use(notFound)
app.use(errorHandler)

connectDB(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => console.log(`Listening on port ${port}`))
  })
  .catch((error) => {
    console.error(error)
  })
