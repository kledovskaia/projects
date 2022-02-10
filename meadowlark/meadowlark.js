require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');
const multiparty = require('multiparty');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const { credentials } = require('./config');
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

app.use(cookieParser(credentials.cookieSecret));
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: credentials.cookieSecret,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname + '/public')));

app.get('/', handlers.home);
app.get('/about', handlers.about);
app.get('/newsletter', handlers.newsletter);
app.post('/newsletter/process', handlers.newsletterProcess);
app.get('/newsletter/thank-you', handlers.thankYou);

app.get('/vacation-photo', handlers.vacationPhotoContest);
app.get('/contest/vacation-photo/thank-you', handlers.thankYou);
app.post('/contest/vacation-photo/:year/:month', (req, res) => {
  const form = new multiparty.Form();
  form.parse(req, (err, fields, files) => {
    if (err) return res.status(500).send({ error: err.message });
    handlers.vacationPhotoContestProcess(req, res, fields, files);
  });
});

app.use(handlers.notFound);
app.use(handlers.serverError);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
  });
} else {
  module.exports = app;
}
