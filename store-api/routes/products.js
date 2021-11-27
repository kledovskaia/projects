import express from 'express'
import * as products from '../controllers/products.js'

const router = express.Router()

router.route('/').get(products.getAll).post(products.createOne)
router
  .route('/:id')
  .get(products.getOne)
  .patch(products.updateOne)
  .delete(products.deleteOne)
