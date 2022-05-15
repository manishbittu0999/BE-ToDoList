const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router loaded');


// making requests
router.get('/', homeController.home);
router.post('/create', homeController.create);
router.post('/destroy', homeController.destroy);

module.exports = router;