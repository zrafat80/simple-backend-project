const curDir = process.cwd();
const Tour = require(`${curDir}\\models\\tourModel.js`);

const deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      tour: 'null',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

module.exports = deleteTour;
