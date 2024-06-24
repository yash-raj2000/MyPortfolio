// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

const FormSchema = new mongoose.Schema({
  fName: String,
  lName: String,
  email: String,
  phone: String,
  subject: String,
  message: String
});

const formModel = mongoose.model('formquery', FormSchema)

// MongoDB connection
const uri=process.env.MONGO_URI;
console.log(uri);
if (!uri) {
  throw new Error('MONGO_URI is not defined in .env file');
}

mongoose.connect(uri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


app.get('/', (req, res) => {
  res.send('Server running')
})

// Define API endpoint
app.post('/addMessage', async (req, res) => {
  try {
  const data = await formModel.create(req.body);
  res.json(data);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
