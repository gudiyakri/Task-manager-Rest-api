const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
//Connect to DB
mongoose.connect(  
   process.env.DB_CONNECTION ,
    {useNewUrlParser: true},
    ()=>{
    console.log('Connected to DB!')
})
const app = express();
app.use(bodyParser.json());
//Import Routes
const userRoute = require('./routes/users');
app.use('/users',userRoute);

const taskRoute = require('./routes/task');
app.use('/task',taskRoute);


app.get('/',(req,res)=>{
    res.send('We are on home');
})

//app listen
app.listen(3005,console.log('server running on port 3005'));