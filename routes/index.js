const router = require('express').Router();

router.get('/', (req, res, next) => {
  // #swagger.summary = 'Welcome message'
  // #swagger.description = 'Endpoint to return a welcome message.'
  next();
  res.send('Hello World!');
});

module.exports = router;
