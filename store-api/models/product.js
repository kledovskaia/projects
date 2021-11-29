import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'name must be provided'],
  },
  price: {
    type: Number,
    require: [true, 'price must be provided'],
  },
  rating: {
    type: Number,
    default: 0,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ['ikea', 'liddy', 'caressa', 'marcos'],
      message: '{VALUE} is not provided',
    },
  },
})

export const Product = mongoose.model('Product', productSchema)
