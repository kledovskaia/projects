import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: String   
})

export const Product = mongoose.model("Product", productSchema)