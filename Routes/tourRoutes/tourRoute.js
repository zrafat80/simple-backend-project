const fs = require('fs');

const express = require('express');
const { get } = require('http');

const router = express.Router();
const curDir = process.cwd();
const getAllTours = require(`${curDir}/Controllers/tourControllers/getAllTours.js`);
const deleteTour = require(`${curDir}/Controllers/tourControllers/deleteTour.js`);
const getTour = require(`${curDir}/Controllers/tourControllers/getTour.js`);
const createNewTour = require(`${curDir}/Controllers/tourControllers/createTour.js`);
const updateTour = require(`${curDir}/Controllers/tourControllers/updateTour.js`);
const getTourStats = require(`${curDir}/Controllers/tourControllers/getTourStats.js`);


const aliasTopTours = require(`${curDir}/Middlewares/toursMiddlewares/requestMiddlewares/aliasTopTours.js`);
const checkBody = require(`${curDir}/Controllers/tourControllers/checkBody.js`);
router.route('/tour-stats').get(getTourStats);
router.route('/top-5-cheap').get(aliasTopTours, getAllTours);
router.route('/').get(getAllTours).post(createNewTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
