const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');
const authenticateUser = require('../Middleware/authmiddleware');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error registering user', details: err.message });
    }
});

router.post('/login', async (req, res) => {
  try {
    console.log("Login request received:", req.body);

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      console.log("User not found");
      return res.status(404).json({ error: 'User not found' });
    }

    console.log("User found:", user);

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordValid) {
      console.log("Invalid credentials");
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const JWT_SECRET = "123";

    console.log("Generating JWT...");
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

    console.log("Login successful, token generated:", token);
    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    console.error("Error logging in:", err);
    res.status(500).json({ error: 'Error logging in', details: err.message });
  }
});

/*process.env.JWT_SECRET*/

router.post('/logout', (req, res) => {
    res.status(200).json({ message: 'Logged out successfully' });
});

module.exports = router;
