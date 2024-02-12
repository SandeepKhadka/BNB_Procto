const mongoose = require('mongoose');
//goru maile yo change office bata gareko ho. taile const uri ma dbname rakh hai tyo narakhera error aako raixa jasto lagyo. dbname chai last ma mongodb.net/dbname teha hunxa hai
const uri = 'mongodb+srv://sandeepkhadka49356:Sandeep@123@cluster0.5gabacp.mongodb.net/';
console.log(uri,"uri");

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

connection.on('error', err => {
  console.error('Error connecting to MongoDB Atlas:', err);
});
