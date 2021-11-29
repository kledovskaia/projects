import { Product } from '../models/product.js'

export const get = async (req, res) => {
  const {
    numericFilters,
    page = 1,
    perPage = 10,
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

  if (numericFilters) {
    const operators = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    }
    const converted = numericFilters.replace(
      /\b(>|<|=|>=|>)\b/g,
      (match) => `-${operators[match]}-`
    )
    converted.split(',').forEach((string) => {
      const splited = string.split('-')
      queryObject[splited[0]] = {
        [splited[1]]: +splited[2],
      }
    })
  }

  const result = Product.find(queryObject)
    .skip((page - 1) * perPage)
    .limit(+perPage)

  if (sort) result.sort(sort.split(',').join(' '))
  else result.sort('createdAt')
  if (fields) result.select(fields.split(',').join(' '))
  const products = await result
  res.status(200).json({ products, count: products.length })
}
