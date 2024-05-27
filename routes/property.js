const express = require('express');
const { postProperty, getAllProperties } = require('../controllers/property');
const router = express.Router();
// Update controller import

// Define routes
router.post('/', postProperty); // POST a new property
router.get('/properties', getAllProperties); // GET all properties

module.exports = router;
