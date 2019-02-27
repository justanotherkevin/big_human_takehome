const express = require('express');
const router = express.Router();
// const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const Plant = require('../models/Plant');
const validatePostComment = require('../validation/plants');

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

// @route   POST api/plants/comment/:id
// @desc    Add comment to plant
// @access  Private
router.post(
  '/comment/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostComment(req.body);
    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    console.log(req.user.id)
    Plant.findById(req.params.id)
      .then(plant => {
        const newComment = {
          text: req.body.text,
          name: req.body.name,
          avatar: req.body.avatar,
          user: req.user.id
        };
        plant.comments.push(newComment);
        plant.save().then(plant => res.json(plant));
      })
      .catch(err => res.status(404).json({ err: 'No plant found' }));
  }
);










module.exports = router;