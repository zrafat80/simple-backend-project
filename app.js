const fs = require('fs');

const express = require('express');

const morgan = require('morgan');
const app = express();
const tours = require('./tours.js');
// const { get } = require('http');

// MIDDLE WARES
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`)); // that middleware become serving the public folder that mean no need for rounting it. and to get it with url you should write just"/filename"and iterate over all middlewares until found that foldre that this static file in it and response with it.

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// app.get('/', (req, res) => {
//   res.status(200).json({'message' : 'Hello From the Server', 'app' : 'Natours'});
// });

// app.post('/', (req, res)=>{
//   res.send("YOU CAN POST ANYTHING");
// });

// app.get('/api/V1/tours', getAllTours)
// app.get('/api/V1/tours/:id', getTour);
// app.post('/api/V1/tours', createNewTour)
// app.patch('/api/V1/tours/:id', updateTour);
// app.delete('/api/V1/tours/:id', deleteTour);

// ROUTE HANDLERS

const exp = require('constants');

/// ROUTE

const tourRouter = require('./Routes/tourRoutes/tourRoute.js');
const userRouter = require('./Routes/userRoutes/userRoute.js');
app.use('/api/V1/tours', tourRouter); // i need to know is searching about middle ware with prefix or what?
app.use('/api/V1/users', userRouter);

module.exports = app;
