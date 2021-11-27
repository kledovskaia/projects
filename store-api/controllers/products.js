import { Product } from '../models/product.js'

export const getAll = async (req, res) => await Product.find({})
