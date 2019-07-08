const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const keys = require('./config/keys');

const app = express();

// {useCreateIndex: true} is for a depraction warning for using 'unique' in the schema. They will include it in later version
mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useCreateIndex: true});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

// Routes
require('./routes/productRoutes')(app);

// Handle production
//process.env.NODE_ENV === 'production' checks to see if in production. As soon as you are deployed to heroku it is set to true. The public file in this server folder is what heroku will serve when in production.
if(process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'))
  // Handle SPA single page application
  //for any routes /.*/ send to built file public/index.html
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
