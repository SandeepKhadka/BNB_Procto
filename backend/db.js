const mongoose = require('mongoose');

const uri = 'mongodb+srv://sandeepkhadka49356:sandeep123@cluster0.5gabacp.mongodb.net/';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

connection.on('error', err => {
  console.error('Error connecting to MongoDB Atlas:', err);
});
