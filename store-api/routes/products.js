import express from 'express'
import * as products from '../controllers/products.js'

const router = express.Router()

router.route('/').get(products.get)
export { router as products }
