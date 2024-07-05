const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

const bookRoutes = require('./routes/books');
app.use('/books', bookRoutes);

// Connect to DB
mongoose.connect(
  'mongodb+srv://lpirnraoj:Albania1964@cluster0.7x17gf9.mongodb.net/mydatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected to DB!')
);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

