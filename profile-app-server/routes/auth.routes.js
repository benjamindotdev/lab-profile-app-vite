const router = require('express').Router();

import User from '../models/User.model';

router.post('/signup', (req, res, next) => {
  try {
    const { username, password, campus, course } = req.body;
    if (!username || !password || !campus || !course) {
      res.status(400).json({ message: 'Please fill in all fields' });
      return;
    }
    const user = User.create({ username, password, campus, course });
    res.json(user);
  } catch (error) {
    res.json(error);
  }
});

router.post('/login', (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({ message: 'Please fill in all fields' });
      return;
    }
    const user = User.findOne({ username });
    if (!user) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }
    res.json(user);
  } catch (error) {
    res.json(error);
  }
});

router.get('/verify', (req, res, next) => {
  try {
    const { _id } = req.user;
    const user = User.findById(_id);
    res.json(user);
  } catch (error) {
    res.json(error);
  }
});
