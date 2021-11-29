import { Product } from './models/product.js'
import products from './products.json'
import { connectDB } from './db/connect.js'
import dotenv from 'dotenv'
dotenv.config()

connectDB(process.env.MONGO_URI)

const start = async () => {
  try {
    await Product.deleteMany()
    await Product.create(products)

    console.log('Success!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
