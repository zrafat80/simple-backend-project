const fs = require('fs');

module.exports = tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));
