require('dotenv').config()
const path = require('path')
const express = require('express')
const { engine } = require('express-handlebars')
const handlers = require('./lib/handlers')

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

app.get('/', handlers.home)
app.get('/about', handlers.about)

app.use(handlers.notFound)
app.use(handlers.serverError)

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})
