export const dashboard = (req, res) => {
  const { username } = req.body
  const number = Math.floor(Math.random() * 100) + 1
  res.send({
    msg: `Authorized as ${username}`,
    secret: `Your *random* number is ${number}`,
  })
}
