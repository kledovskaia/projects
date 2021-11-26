export const errorHandler = (err, req, res, next) => {
  if (err.status) {
    return res.status(err.status).json({
      error: err.message,
    })
  } else {
    return res.status(500).json({ error: "Something went wrong" })
  }
}
