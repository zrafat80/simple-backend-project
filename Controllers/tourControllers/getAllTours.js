const fs = require('fs');

const tours = require('../../tours.js');

const getAllTours = (req, res) => {
  console.log(req.requestTime);

  res.json({
    status: 'success',
    requestedAt: req.requestTime,
    result: tours.length,
    data: {
      tours,
    },
  });
};

module.exports = getAllTours;
