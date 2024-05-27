const express = require('express');
const router = express.Router();
const { likeProperty } = require('../controllers/propertyController');

router.post('/:id/like', likeProperty);

module.exports = router;
