const router = require('express').Router();

import User from '../models/User.model';

router.get('/users', (req, res, next) => {
  try {
    const users = User.find();
    res.json(users);
  } catch (error) {
    res.json(error);
  }
});

router.put('/users', (req, res, next) => {
  try {
    const { image } = req.body;
    const updatedUser = User.findByIdAndUpdate(
      req.user._id,
      { image },
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    res.json(error);
  }
  res.json(updatedUser);
});

router.post('/upload', (req, res, next) => {
  try {
    const { secure_url } = req.file;
    res.json({ secure_url });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
