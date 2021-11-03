const express = require('express');
const app = express();

const contactUsFormRoute = require('./routes/contactus');
const loveFormRoute = require('./routes/lovercalc');


const adminModel = require('./routes/admin');
const {
  dbuserpassword
} = require('./key');

const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://pathway:${dbuserpassword}@cluster0.gc8xj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)

mongoose.connection.on('error', function (error) {
  console.error('Database connection error:', error);
});

mongoose.connection.once('open', function () {
  console.log('Database connected');
});


const path = require('path');
const bodyParser = require('body-parser');


app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})



app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`)
  //res.send('')
  next()

});


app.use('/api', contactUsFormRoute);
app.use('/api', loveFormRoute);

// app.use('/api', customerRoute);
app.use(express.static('public'));

//Handler for 404 - Page not found

app.use((req, res, next) => {
  res.sendStatus(404).send("we lost you")
});

//Handler for 500 - Internal server error 

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.sendFile(path.join(__dirname, '../public/500.html'))
});



const PORT = process.env.PORT || 3500;
app.listen(PORT, () => console.info(`Server has started on port ${PORT}`));
