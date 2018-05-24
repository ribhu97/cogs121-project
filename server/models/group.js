(function() {
    'use strict';
  
    const mongoose = require('mongoose');
    const Recruiter = require('./recruiters');
    const Student = require('./students');
    const Schema = mongoose.Schema;
  
    const GroupSchema = new Schema({
      name: {
        type: String,
      },
      attr: [String],
      recruiter: Recruiter,
      test: [Student],
      train: [Student]
    });
  
    //Export the model
    module.exports = mongoose.model('Group', GroupSchema);
  })();