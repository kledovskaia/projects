require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');
const handlers = require('./lib/handlers');

const app = express();
const PORT = process.env.PORT || 3001;

app.engine(
  'handlebars',
  engine({
    defaultLayout: 'main',
  })
);
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname + '/public')));

app.get('/', handlers.home);
app.get('/about', handlers.about);
app.get('/newsletter', handlers.newsletter);
app.post('/newsletter/process', handlers.newsletterProcess);
app.get('/newsletter/thank-you', handlers.newsletterThankYou);

app.use(handlers.notFound);
app.use(handlers.serverError);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
  });
} else {
  module.exports = app;
}
