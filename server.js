const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Serve static files from the public directory
app.use(express.static('public'));

// Import Routes
const userRoutes = require('./routes/user');
const itemRoutes = require('./routes/items');

// Use Routes
app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);

// Database Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/crud', (req, res) => {
  res.sendFile(__dirname + '/public/crud.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html');
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


