const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

const userSchema = new mongoose.Schema({
  admin: String,
  password: String
});
const User = mongoose.model('User', userSchema);

const slotSchema = new mongoose.Schema({
  date: Date,
  time: String,
  mode: String,
  isBooked: {
    type: Boolean,
    default: false
  }
});

const Slot = mongoose.model('Slot', slotSchema);

const formSubmissionSchema = new mongoose.Schema({
  email: String,
  name: String,
  phone: String,
  date: Date,
  time: String,
  mode: String,
});

const FormSubmission = mongoose.model('FormSubmission', formSubmissionSchema);

app.post('/api/submit-form', async (req, res) => {
  const { email, name, phone, date, time, mode } = req.body;
  try {
    // Save the form data in the database
    const newFormSubmission = new FormSubmission({
      email,
      name,
      phone,
      date,
      time,
      mode
    });
    await newFormSubmission.save();

    // Mark the slot as booked
    await Slot.updateOne({ date, time, mode }, { isBooked: true });

    res.status(201).json({ message: 'Form submitted and slot booked successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/register', async (req, res) => {
  const { admin, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      admin,
      password: hashedPassword
    });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/login', async (req, res) => {
  const { admin, password } = req.body;
  try {
    const user = await User.findOne({admin});
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isPasswordValid = bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/slots', async (req, res) => {
  const { date, time, mode } = req.body;

  try {
    const newSlot = new Slot({
      date,
      time,
      mode
    });
    await newSlot.save();
    res.status(201).json({ message: 'Slot added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/slots', async (req, res) => {
  try {
    const { date } = req.query;
    const slots = await Slot.find({ date: { $gte: new Date(`${date}T00:00:00`), $lt: new Date(`${date}T23:59:59`) } });
    res.status(200).json(slots);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
