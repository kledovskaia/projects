const fortune = require('./fortune');

module.exports.home = (req, res) => res.render('home');
module.exports.about = (req, res) => {
  res.render('about', { fortune: fortune.getRandomFortune() });
};
module.exports.newsletter = (req, res) =>
  res.render('newsletter', { csrf: "here's CSRF token" });
module.exports.newsletterProcess = (req, res) => {
  console.log('Form:', req.query.form);
  console.log('Token CSRF:', req.body._csrf);
  console.log('Name:', req.body.name);
  console.log('Email:', req.body.email);
  res.redirect(303, '/newsletter/thank-you');
};
module.exports.newsletterThankYou = (req, res) =>
  res.render('newsletter-thank-you');

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
