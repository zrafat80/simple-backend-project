const fs = require('fs');

const tours = require('../../tours.js');

const deleteTour = (req, res) => {
  console.log('this is delete module');
 
  res.status(203).json({
    status: 'success',
    tour: 'null',
  });
};

module.exports = deleteTour;
