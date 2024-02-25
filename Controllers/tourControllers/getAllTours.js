const curDir = process.cwd();
const Tour = require(`${curDir}\\models\\tourModel.js`);

const filter = require(`${curDir}/API_Features/filter.js`);
const sort = require(`${curDir}/API_Features/sort.js`);
const fieldLimitation = require(`${curDir}/API_Features/fieldsLimit.js`);
const pagination = require(`${curDir}/API_Features/paginate.js`);

const getAllTours = async (req, res) => {
  try {
    let query = Tour.find();
    // BUILD QUERY
    filter(query, req.query);
    sort(query, req.query);
    fieldLimitation(query, req.query);
    pagination(query, req.query);
    // Execute query
    const tours = await query;

    // SEND RESPONSE
    res.json({
      status: 'success',
      result: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

module.exports = getAllTours;
