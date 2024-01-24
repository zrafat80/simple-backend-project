const fs = require('fs');

const express = require('express');

const router = express.Router();
const curDir = process.cwd();
const getAllTours = require(`${curDir}/Controllers/tourControllers/getAllTours.js`);
const deleteTour = require(`${curDir}/Controllers/tourControllers/deleteTour.js`);
const getTour = require(`${curDir}/Controllers/tourControllers/getTour.js`);
const createNewTour = require(`${curDir}/Controllers/tourControllers/createTour.js`);
const updateTour = require(`${curDir}/Controllers/tourControllers/updateTour.js`);

const checkId = require(`${curDir}/Controllers/tourControllers/checkId.js`);
const checkBody = require(`${curDir}/Controllers/tourControllers/checkBody.js`);

router.param('id', checkId);

router.route('/').get(getAllTours).post(checkBody, createNewTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
