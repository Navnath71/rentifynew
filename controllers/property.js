// controllers/propertyController.js
const Property = require('../models/Property');

// Post a new property
exports.postProperty = async (req, res) => {
  const { title, description, price, bedrooms, bathrooms, location ,name,mobileNumber} = req.body;
  try {
    const newProperty = new Property({ title, description, price, bedrooms, bathrooms, location,name,mobileNumber });
    const property = await newProperty.save();
    res.json(property);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get all properties
exports.getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
