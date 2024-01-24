const fs = require('fs');

const updateUser = (req, res) => {
  const id = req.params.id * 1;


  res.status(200).json({
    status: 'success',
    user: '<Updated>',
  });
};

module.exports = updateUser;
