const express = require('express');
const router = express.Router();
// const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const Plant = require('../models/Plant');

// @route   GET api/plants/all
// @desc    Get all plants
// @access  Public
router.get('/all', (req, res) => {
  Plant.find()
    .then(plants => res.json(plants))
    .catch(err => res.status(404).json({ error: 'Where all my pants go?' }));
});

module.exports = router;