(function() {
    'use strict';
  
    var mongoose = require('mongoose'),
    Student = require('../models/students');
  
    // Export the methods
    module.exports = {
      // Function to create a new member
      create: function(req, res) {
        // Instance of the model Member
        //TODO
      },
  
      // Function to edit/update
      edit: function(req, res) {
        // Assignment. Learn how to do this
      },
  
      delete: function(req, res) {
        //TODO
      },
      
      find: function(req, res) {
        Student.find(function(err, students) {
          if (err) {
            return res.status(500).json({
              err: err || err.errmessage
            });
          } else {
            return res.status(200).json({
              students: students
            });
          }
        });
      },

      import: function(req,res) {
        //To import test and training data
        let exec = require('child_process').exec
        let command = 'mongoimport -d persistent -c students --file ./newdata_train.json'
        exec(command, (err, stdout, stderr) => {
          // check for errors or if it was succesfuly
          console.log(err.message);
        })
      }
    };
  })();