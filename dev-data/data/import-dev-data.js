const fs = require('fs');
const mongoose = require('mongoose');
const dotEnv = require('dotenv');
dotEnv.config({ path: './config.env' });
const curDir = process.cwd();
const Tour = require(`${curDir}\\models\\tourModel.js`);

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connection is Successful'));

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

const importData = async function () {
  try {
    await Tour.create(tours);
    console.log('Data Successfuly imported');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
// DELETE ALL DOCS FROM TOUR COLLECTION

const deleteData = async function () {
  try {
    await Tour.deleteMany();
    console.log('Data Successfuly Deleted');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] == '--delete') {
  deleteData();
}
