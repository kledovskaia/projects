import { Product } from '../models/product.js'

export const get = async (req, res) => {
  console.log(req.query)
  const { name, price, rating, featured, company } = req.query
  const queryObject = {
    ...(name ? { name: { $regex: name.trim(), $options: 'i' } } : {}),
    ...(price ? { price: +price } : {}),
    ...(rating ? { rating: +rating } : {}),
    ...(featured ? { featured: featured === 'true' ? true : false } : {}),
    ...(company ? { company } : {}),
  }
  const products = await Product.findOne(queryObject)
  res.status(200).json({ products })
}
