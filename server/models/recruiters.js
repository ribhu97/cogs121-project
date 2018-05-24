(function() {
    'use strict';
  
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
  
    var RecruiterSchema = new Schema({
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
      attr: [String]
    });
  
    //Export the model
    module.exports = mongoose.model('Recruiter', RecruiterSchema);
  })();