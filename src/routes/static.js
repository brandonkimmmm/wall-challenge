const express = require('express');
const router = express.Router();
const staticController = require('../controllers/staticController.js');
const validation = require('./validation');

router.get('/', staticController.index);
router.post('/', validation.validatePosts, staticController.addPost);

module.exports = router;