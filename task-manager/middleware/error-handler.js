export const errorHandler = (err, req, res, next) => {
  console.error(err)
  return res.status(500).json({
    error: "Something went wrong",
  })
}
