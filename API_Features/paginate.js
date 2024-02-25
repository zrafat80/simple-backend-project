const pagination =   (query, queryReq) => {
    const page = queryReq.page * 1 || 1;
    const limit = queryReq.limit * 1 || 100;
    const skip = (page - 1) * limit;
    console.log(queryReq.limit * 1);
    query = query.skip(skip).limit(limit);
};

module.exports = pagination;
