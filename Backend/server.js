const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const authRoutes = require('./Routes/auth');
const stripeRoutes = require('./Routes/stripeRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/payments', stripeRoutes);

// Optional: Root route so you don’t see "Cannot GET /"
app.get('/', (req, res) => {
  res.send('Backend API is running 🚀');
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// ⚡ Vercel expects a function
module.exports = app;
