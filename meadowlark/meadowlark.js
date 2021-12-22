const path = require('path')
const express = require('express')
const { engine } = require('express-handlebars')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3001

app.engine(
  'handlebars',
  engine({
    defaultLayout: 'main',
  })
)
app.set('view engine', 'handlebars')
app.set('views', path.resolve(__dirname, './views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.use((req, res) => {
  res.status(404)
  res.render('404')
})
app.use((err, req, res, next) => {
  console.log(err.message)
  res.status(500)
  res.render('500')
})

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})
