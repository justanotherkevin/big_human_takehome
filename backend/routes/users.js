const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

// Load User model
const User = require('../models/User');

// @route   GET api/users/all
// @desc    Get all users
// @access  Public
router.get('/all', (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ nousersfound: 'No posts found' }));
});

module.exports = router;