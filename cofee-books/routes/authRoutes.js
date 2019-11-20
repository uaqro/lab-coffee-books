const router = require('express').Router()
const passport = require('passport')
const {callbackRedirect, logout, SignUp, LogIn } = require('../controllers/authController')

router.get('/auth/signup', SignUp)
router.get('/auth/login', LogIn)
router.get('/login', passport.authenticate('facebook'))
//router.get('/login', passport.authenticate('google'))
//router.get('/auth/google-cb', passport.authenticate('google'), callbackRedirect)
router.get('/auth/facebook-cb', passport.authenticate('facebook'), callbackRedirect)

router.get("/logout", logout)

module.exports = router;
