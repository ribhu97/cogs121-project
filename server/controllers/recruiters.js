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
        recruiter.name = req.body.name;
        recruiter.email = req.body.email;
        recruiter.company = req.body.company;
        recruiter.password = req.body.password;
        //Saving the model
        Recruiter.save(function(err, savedRecruiter) {
          if (err) {
            console.log(err);
            return res.status(500).send(err);
          } 
          else {
            return res.status(200).json({
              message: 'Successfully added new recruiter'
            });
          }
        });
      },
  
      // Function to edit/update
      edit: function(req, res) {
        // Assignment. Learn how to do this
        let id = req.body.id;
        console.log(req.body);
        let attributes = req.body.attr;
        console.log(attributes);
        Recruiter.findByIdAndUpdate( id , {$set : {"attr":attributes}} ,function(err, Recruiter) {
          if (err) {
            console.log(err);
            return res.status(500).send(err);
          }
          else {
            return res.status(200).json({
              message: 'Successfully added attributes'
            });
            }
          });
        },
  
      delete: function(req, res) {
        //TODO
      },
      
      find: function(req, res) {
        Recruiter.find(function(err, recruiter) {
          if (err) {
            return res.status(500).json({
              err: err || err.errmessage
            });
          } else {
            return res.status(200).json({
              recruiters: recruiter
            });
          }
        });
      }
    };
  })();