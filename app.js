const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://ribhu:pass2905@ds014648.mlab.com:14648/persistent', (err, database) => {
    if (err) return console.log(err)
  const db = database;
  console.log('database connected')
});

app.use(express.static(__dirname + '/views'));
app.get('/', (req, res) => res.sendFile('/view/index.html'));

app.listen(3000, () => console.log('Example app listening on port 3000!'))