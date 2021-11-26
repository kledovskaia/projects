export const asyncWrapper = (callback) => async (req, res, next) => {
  try {
    return await callback(req, res, next)
  } catch (error) {
    next(error)
  }
}
