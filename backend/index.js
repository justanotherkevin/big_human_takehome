const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// basic express setup
const app = express();
const port = process.env.PORT || 5000;
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// db config
const { mongoURI } = require('./config/secrets');
// import routes
const users = require('./routes/users');
const plants = require('./routes/plants');
// Connect to MongoDB
mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('mongodb connected!!'))
  .catch(err => console.log(err));

app.use('/api/users', users);
app.use('/api/plants', plants);

app.listen(port, () =>
  console.log(`server running on http://localhost:${port}/`)
);
