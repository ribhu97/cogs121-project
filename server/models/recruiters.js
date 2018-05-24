(function() {
    'use strict';
  
    const mongoose = require('mongoose');
    const Model = require('./model')
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
      models: [Model]
    });
  
    //Export the model
    module.exports = mongoose.model('Recruiter', RecruiterSchema);
  })();