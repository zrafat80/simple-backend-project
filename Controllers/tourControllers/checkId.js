module.exports = (req, res, next, Id) => {
    const id = Id * 1;
    if (id >= tours.length) {
      return res.status(404).json({
        status: 'fail',
        Message: 'Invaild Id',
      });
    }
    next();
  }