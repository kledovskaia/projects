import { Product } from '../models/product.js'

export const getAll = async (req, res) => await Product.find({})
export const getOne = async (req, res) => await Product.findOne({ _id: req.params.id })
export const createOne = async (req, res) => await Product.create({ ...req.body })
export const updateOne = async (req, res) => await Product.findOneAndUpdate({ _id: req.params.id }, { ...req.body }) 
export const deleteOne = async (req, res) => await Product.findOneAndDelete({ _id: req.params.id })
