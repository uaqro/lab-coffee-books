const router = require('express').Router()
const passport = require('passport')
const {callbackRedirect, logout, SignUp, LogIn } = require('../controllers/authController')

router.get('/signup', SignUp)
//router.get('/login', LogIn)
router.get('/login', passport.authenticate('facebook'))
//router.get('/login', passport.authenticate('google'))
//router.get('/auth/google-cb', passport.authenticate('google'), callbackRedirect)
router.get('/callback', passport.authenticate('facebook'), callbackRedirect)

router.get("/logout", logout)

module.exports = router;
