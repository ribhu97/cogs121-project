(function() {
    'use strict';
  
    const mongoose = require('mongoose');
    const Recruiter = require('../models/recruiters');
    const csv = require('fast-csv');
  
    // Export the methods
    module.exports = {
      // Function to create a new recruiter
      create: function(req, res) {
        let recruiter = new Recruiter(); //new model instance
        //Adding data from called page
        recruiter.name = req.body.recName;
        recruiter.email = req.body.recEmail;
        recruiter.company = req.body.recComp;
        recruiter.password = req.body.recPwd;
        //Saving the model
        Recruiter.save(function(err, savedRecruiter) {
          if (err) {
            console.log(err);
            return res.status(500).send(err);
          } else {
            return res.status(200).json({
              message: 'Successfully added new recruiter'
            });
          }
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
        Recruiter.find(function(err, recruiters) {
          if (err) {
            return res.status(500).json({
              err: err || err.errmessage
            });
          } else {
            return res.status(200).json({
              recruiters: recruiters
            });
          }
        });
      }
    };
  })();