const filter = (query, queryString) => {
  let queryObj = { ...queryString }; // make a new object and fill it with attributes that found in req.query cause the usual assignign not make a copy it is just make a reference to assigned ojcect and that mean if we change thing inside new object then will change in original object also but here make a new obj that mean anohter address with a new object
  const execludedField = ['page', 'sort', 'limit', 'fields'];
  execludedField.forEach((el) => delete queryObj[el]);
  let queryStr = JSON.stringify(queryObj);

  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
  queryObj = JSON.parse(queryStr);

  query.find(queryObj);
};

module.exports = filter;
