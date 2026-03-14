const router = require('express').Router();

router.get('/', (req, res) => {
  // #swagger.summary = 'Welcome message'
  // #swagger.description = 'Endpoint to return a welcome message.'
  // #swagger.tags = ['General']
  res.send('Hello World!');
});

module.exports = router;
