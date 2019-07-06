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

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
