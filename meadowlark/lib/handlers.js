const fortune = require('./fortune');

module.exports.home = (req, res) => res.render('home');
module.exports.about = (req, res) => {
  res.render('about', { fortune: fortune.getRandomFortune() });
};
module.exports.notFound = (req, res) => {
  res.status(404);
  res.render('404');
};

// eslint-disable-next-line no-unused-vars
module.exports.serverError = (err, req, res, next) => {
  console.log(err.message);
  res.status(500);
  res.render('500');
};
