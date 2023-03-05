const express = require('express');
const app = express();

const dotenv = require('dotenv');

//setting up config.env file variables
dotenv.config({path : './config/config.env'});


//importing routes
const jobsapi = require('./routes/jobsapi');

app.use('/api/v1', jobsapi);

const PORT = process.env.PORT;
app.listen(PORT, ()=> {
    console.log(`Server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});