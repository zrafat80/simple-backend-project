const sort = (query, queryReq) => {
  if (queryReq.sort) {
    const sortBy = queryReq.sort.split(',').join(' ');
    console.log(sortBy);
    query.sort(sortBy); // query modified and chained with sort
  } else {
    query.sort('-createdAt');
  }
};

module.exports = sort;
