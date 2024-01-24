const dotEnv = require('dotenv');
dotEnv.config({path: './config.env'});




const app = require('./app.js');

 
   const x= 3 ;   
 
const port = process.env.PORT||4000;
app.listen(port, () => {
    console.log('I Am Listening Now');
  });