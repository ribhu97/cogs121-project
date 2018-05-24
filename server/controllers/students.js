(function() {
    'use strict';
  
    const mongoose = require('mongoose');
    const Student = require('../models/students');
    const csv = require('fast-csv');
  
    // Export the methods
    module.exports = {
      // Function to create a new member
      create: function(req, res) {
        // Instance of the model Member
        if(!req.files)
          return res.status(400).send('No files were uploaded.');

        const studFile = req.files.Training;
        const testFile = req.files.Test;
        const students = [];

        csv.fromString(studFile.data.toString(), {
          headers: true,
          ignoreEmpty: true
        })
        .on("data", function(data){
          students.push(data);
        })
        .on("end", function(){
          Student.create(students, function(err, documents) {
           if (err) throw err;
          });
        });

        csv.fromString(testFile.data.toString(), {
          headers: true,
          ignoreEmpty: true
        })
        .on("data", function(data){
          students.push(data);
        })
        .on("end", function(){
          Student.create(students, function(err, documents) {
           if (err) throw err;
           res.redirect('/output.html');
          });
        });

        
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

    };
  })();