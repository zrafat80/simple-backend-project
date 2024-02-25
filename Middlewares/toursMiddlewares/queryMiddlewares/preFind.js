module.exports = function (next) {
    this.find({ secretTour: { $ne: true } });
    this.start = Date.now();
    next();
}