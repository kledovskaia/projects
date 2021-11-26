import mongoose from "mongoose"

export const connectDB = (url) => {
  try {
    console.log("Connecting to DB")
    return mongoose.connect(url, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
  } catch (error) {
    console.error(error)
  }
}
