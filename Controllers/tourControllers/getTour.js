const fs = require('fs');

const tours = require('../../tours.js');

const getTour = (req, res) => {
  let id = req.params.id; /// actually string
  id = req.params.id * 1; /// to make a num multiply by 1 in JS
  // console.log(id);
  // // const theRequestedTour = tours[id];
   const theRequestedTour = tours.find((el) => el.id === id);
  // // console.log(theRequestedTour);// undefined if the id not found
  // if (!theRequestedTour) {
  //   return res.status(404).json({
  //     status: 'fail',
  //     Message: 'Invaild Id',
  //   });
  // }
  res.json({
    status: 'success',
    data: {
      theRequestedTour,
    },
  });
};

module.exports = getTour;
