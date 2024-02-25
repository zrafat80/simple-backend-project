module.exports = function (next) {
  console.log('dd');
  this.pipline().unshift({
    $match: {
      secretTour: {
        $ne: true,
      },
    },
  });
  console.log(next);
};
