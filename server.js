const mongoose = require('mongoose');
const dotEnv = require('dotenv');
dotEnv.config({ path: './config.env' });

const app = require('./app.js');
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
  .then((con) => {
    console.log('DB Connection is Successful');
  })
  .catch((rej) => {
    console.log('DB Connection is Failed');
  });

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('I Am Listening Now');
});
