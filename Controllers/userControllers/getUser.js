const fs = require('fs');

const getTour = (req, res) => {
  let id = req.params.id; /// actually string
  id = req.params.id * 1; /// to make a num multiply by 1 in JS

  // const theRequestedTour = tours[id];
//   const theRequestedTour = tours.find((el) => el.id === id);
  // console.log(theRequestedTour);// undefined if the id not found
 
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined'
  });
};

module.exports = getTour;
