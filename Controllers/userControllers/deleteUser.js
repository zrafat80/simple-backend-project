const fs = require('fs');

const tours = require('../../tours.js');

const deleteUser = (req, res) => {
  console.log('this is delete module');
  const id = req.params.id * 1;

  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

module.exports = deleteUser;
