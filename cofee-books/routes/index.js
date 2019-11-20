const express = require('express');
const router  = express.Router();
const { placeGet, feed } = require('../controllers/index')
const Place = require("../models/Place")



/* GET home page */
router.get('/', (_, res, next) => {
  res.render('index');
});

router.get('/feed', feed)
module.exports = router;
