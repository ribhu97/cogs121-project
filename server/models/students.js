(function() {
    'use strict';
  
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
  
    var StudentSchema = new Schema({
      fname: {
        type: String,
        required: true
      },
      lname: {
        type: String,
        required: true
      },
      email: {
          type: String,
          required:true
      },
      univ: String,
      num_intern: Number,
      hired: Number,
      github_score: Number,
      resume_score: Number,
      online_code_score: Number,
      gpa: Number
    });
  
    //Export the model
    module.exports = mongoose.model('Student', StudentSchema);
  })();