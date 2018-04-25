//IMPORTS
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');

//CONFIG
app.use(bodyParser.urlencoded({extended: false}));

//set up ejs for rendering
app.set('view engine', 'ejs');
app.use(express.static('public'));

//add database connection
mongoose.connect('mongodb://ribhu:pass2905@ds014648.mlab.com:14648/persistent');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {console.log("database connected")});

//ROUTES
let index = require('./routes/index');

//MODEL - TO BE ADDED TO SEPARATE FILE
const recSchema = mongoose.Schema({
    modelChoices: {type : [String]}
}, {collection:'recruiter'});

const Recruiter = mongoose.model('recruiter', recSchema);//the actual model


app.use(express.static(__dirname + '/views'));
app.get('/', (req, res) => {
    res.sendFile('/view/index.html');
});

app.get('/recruiter', (req,res) => {
    Recruiter.find(function(err, recruiter) {
        if (err) return console.error(err);
        console.log("existing recruiter are: ", recruiter);
    });
});
app.listen(3000, () => console.log('Example app listening on port 3000!'));