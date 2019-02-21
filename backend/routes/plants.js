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
// @route   GET api/plants/:id
// @desc    Get plant by id
// @access  Public
router.get('/:id', (req, res) => {
  Plant.findById(req.params.id)
    .then(plant => res.json(plant))
    .catch(err =>
      res.status(404).json({ err: 'No plant found with that ID' })
    );
});
module.exports = router;