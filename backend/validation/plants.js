const Validator = require('validator');
const isEmpty = require('../helpers/is_empty');

module.exports = function validatePostComment(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : '';

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.postComment = 'Post must be between 10 and 300 characters';
  }

  if (Validator.isEmpty(data.text)) {
    errors.postComment = 'Text field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
