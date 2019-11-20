const router = require('express').Router();
const { placeGet, placePost, placeModify, placeDetail } = require('../controllers/users')

router.get('/create', placeGet)
router.post('/create', placePost)

module.exports = router