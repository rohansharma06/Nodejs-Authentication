const express = require('express');
const router = express.Router();
const homeController = require('../cotrollers/home_controller');

console.log('router loaded');

router.get('/', homeController.home);
router.get('/sign-in', homeController.signin);
router.get('/sign-up', homeController.signup);


module.exports = router;