const fieldLimitation = (query, queryReq) => {
  if (queryReq.fields) {
    fields = queryReq.fields.split(',').join(' ');
    query = query.select(fields);
  } else {
    query.select('-__v'); //
  }
};

module.exports = fieldLimitation;
