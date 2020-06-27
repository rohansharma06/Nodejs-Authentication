const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../cotrollers/users_controller'); 

router.get('/profile/:id', passport.checkAuthentication, usersController.profile);
router.post('/reset/:id', passport.checkAuthentication, usersController.reset);

router.get('/sign-in', usersController.signIn);
router.get('/sign-up', usersController.signUp);
router.get('/sign-out', usersController.destroySession);

router.post('/create', usersController.create);

router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
), usersController.createSession);


module.exports = router;