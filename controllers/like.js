const Property = require('../models/Property');

const likeProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    property.likes += 1;
    await property.save();
    res.status(200).json({ likes: property.likes });
  } catch (error) {
    res.status(500).json({ error: 'Error liking the property' });
  }
};

module.exports = { likeProperty };
