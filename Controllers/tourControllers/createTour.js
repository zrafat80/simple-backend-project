const curDir = process.cwd();
const Tour = require(`${curDir}\\models\\tourModel.js`);

const createNewTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      data: {
        err,
      },
    });
  }
};

module.exports = createNewTour;
