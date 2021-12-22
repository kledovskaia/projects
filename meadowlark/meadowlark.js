const path = require('path')
const express = require('express')
const { engine } = require('express-handlebars')
const fortune = require('./lib/fortune')
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

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/about', (req, res) => {
  res.render('about', { fortune: fortune.getRandomFortune() })
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
