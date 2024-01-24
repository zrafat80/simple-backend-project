const fs = require('fs');

const tours = require('../../tours.js');

const createNewTour = (req, res) => {
  // console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      if (err) console.log('This is Error in Writing');

      res.status(201).json({
        status: 'success',
        data: {
          tours,
        },
      });
    }
  );
};

module.exports = createNewTour;
