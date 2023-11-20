//routes ..auth.js

const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const crypto = require('crypto');




// Register a new user

router.post("/register", async (req, res) => {
  try {
    // Validate request body
    if (!req.body.username || !req.body.email || !req.body.password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check for existing user with the same username
    const existingUser = await User.findOne({ username: req.body.username });

    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // Save user and return response
    const user = await newUser.save();
    res.status(200).json({ userId: user._id, username: user.username });
  } catch (err) {
    console.error(err); // Log the error
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// LOGIN

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json("User not found");
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!validPassword) {
      return res.status(404).json("Wrong password");
    }

    // Only reach this point if user is found and password is valid
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//FORGOT PASSWORD
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;

    // Find the user with the provided email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Generate a unique token
    const token = crypto.randomBytes(20).toString('hex');

    // Save the token and associate it with the user's email (you can use a database or in-memory storage)
    // In a production environment, consider using a more secure and persistent storage solution for tokens
    resetTokens.set(email, token);
   
    // Send password reset email
    const resetLink = `http://your-app.com/reset-password?token=${token}`;
    const mailOptions = {
      from: 'your_email@gmail.com',
      to: email,
      subject: 'Password Reset',
      text: `Click on the following link to reset your password: ${resetLink}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Password reset email sent. Check your inbox.' });
  } catch (err) {
    res.status(500).json(err);
  }
});

//RESET PASSWORD

router.post('/reset-password', async (req, res) => {
  try {
    const { email, token, newPassword } = req.body;

    // Check if the token is valid
    if (resetTokens.get(email) !== token) {
      return res.status(400).json({ error: 'Invalid or expired token' });
    }

    // Update the user's password in the database (you should hash and salt the password)
    const user = await User.findOne({ email });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
    await user.save();

    
    resetTokens.delete(email);

    res.status(200).json({ message: 'Password reset successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});


module.exports = router;


