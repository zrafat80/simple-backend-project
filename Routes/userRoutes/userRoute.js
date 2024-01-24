const fs = require('fs');

const express = require('express');
const curDir = process.cwd();
const getAllUsers = require(`${curDir}/Controllers/userControllers/getAllUsers.js`);
const deleteUser = require(`${curDir}/Controllers/userControllers/deleteUser.js`);
const getUser = require(`${curDir}/Controllers/userControllers/getUser.js`);
const createNewUser = require(`${curDir}/Controllers/userControllers/createUser.js`);
const updateUser = require(`${curDir}/Controllers/userControllers/updateUser.js`);



const router = express.Router();
router.route('/').get(getAllUsers).post(createNewUser);
router
  .route('/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;