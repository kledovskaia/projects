const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3001

app.use((req, res) => {
  res.type('text/plain').status(404).send('404 - Not Found')
})
app.use((err, req, res, next) => {
  console.log(err.message)
  res.type('text/plain').status(500).send('500 - Server Error')
})

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})
