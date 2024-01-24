module.exports = (req, res, next) => {
  
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing in name or price',
    });
  }
  next();
};
