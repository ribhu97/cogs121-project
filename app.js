//IMPORTS
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const fileUpload = require('express-fileupload');
const multer = require('multer');

//CONFIG
// Require the config file
const config = require('./config/config')
app.use(bodyParser.urlencoded({extended: false}));


//set up ejs for rendering
app.set('view engine', 'ejs');
app.use(express.static('public'));


//add database connection
mongoose.connect(config.db);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {console.log("database connected")});

const Student = require('./server/controllers/students');
const Recruiter = require('./server/controllers/recruiters');
const Group = require('./server/controllers/group');
//ROUTES
let index = require('./routes/index');

app.use(fileUpload());
const upload = multer({dest:'uploads/'});

app.get('/api/student/view', Student.find);
app.get('/api/recruiter/view', Recruiter.find);
app.get('/api/group/view', Group.find);
app.post('/api/student/add', Student.create);
app.post('/api/recruiter/add', Recruiter.create);
app.post('/api/group/add', Group.create);
app.put('/api/recruiter/edit', Recruiter.edit);

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/images'));


app.get('/', (req, res) => {
    res.sendFile('/view/index.html');
});
app.get('/output', (req, res) => {
    res.sendFile('/view/output.html');
});
app.post('/', (req,res) => {
    let stuff = res.body;
})
app.listen(3000, () => console.log('Example app listening on port 3000!'));