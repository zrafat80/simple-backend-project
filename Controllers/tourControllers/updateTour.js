const fs = require('fs');

const tours = require('../../tours.js');

const updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    tour: '<Updated>',
  });
};

module.exports = updateTour;
