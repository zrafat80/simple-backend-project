const curDir = process.cwd();
const Tour = require(`${curDir}\\models\\tourModel.js`);

const getTour = async (req, res) => {
  try {
   
    const tour = await Tour.findById(req.params.id);
    console.log(tour);
    res.json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

module.exports = getTour;
