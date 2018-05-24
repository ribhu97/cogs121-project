(function() {
  'use strict';

  const mongoose = require('mongoose');
  const Group = require('./group')
  const Schema = mongoose.Schema;

  const RecruiterSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
        type: String,
        required:true
    },
    company: String,
    password: String,
    groups: [Group]
  });

  //Export the model
  module.exports = mongoose.model('Recruiter', RecruiterSchema);
})();