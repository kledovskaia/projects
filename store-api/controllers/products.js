import { Product } from '../models/product.js'

export const get = async (req, res) => {
  const {
    page,
    perPage,
    sort,
    fields,
    name,
    price,
    rating,
    featured,
    company,
  } = req.query
  const queryObject = {
    ...(name ? { name: { $regex: name.trim(), $options: 'i' } } : {}),
    ...(price ? { price: +price } : {}),
    ...(rating ? { rating: +rating } : {}),
    ...(featured ? { featured: featured === 'true' ? true : false } : {}),
    ...(company ? { company } : {}),
  }
  const result = Product.find(queryObject)
    .limit(+perPage)
    .skip(+page)
  if (sort) result.sort(sort.split(',').join(' '))
  else result.sort('createdAt')
  if (fields) result.select(fields.split(',').join(' '))
  const products = await result
  res.status(200).json({ products })
}
