module.exports = function (docs, next) {
  console.log('Query took about ', Date.now() - this.start, 'milli seconds');
  next();
};
