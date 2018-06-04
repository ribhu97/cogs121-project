(function() {
    'use strict';
  
    const mongoose = require('mongoose');
    const Group = require('../models/group');
    const csv = require('fast-csv');
  
    // Export the methods
    module.exports = {
      // Function to create a new member
      create: function(req, res) {
        let group = new Group();
        group.name = req.body.name;
        group.save(function(err, savedGroup) {
          if (err) {
            console.log(err);
            return res.status(500).send(err);
          } 
          else {
            return res.status(200).json({
              message: 'Successfully added new group'
            });
          }
        });
        //TODO
      },
  
      edit: function(req, res) {
        // TODO
      },
  
      delete: function(req, res) {
        //TODO
      },
      
      find: function(req, res) {
        //TODO
      },

    };
  })();