const express = require('express');
const app = express();

app.use(express.static('views'));


const fakeDatabase = {
  'Model1': {attribute1: 'GPA', attribute2: 'Major', attribute3: 'Internships'}
};


<<<<<<< HEAD
app.get('/output', (req, res) => {
  const model = fakeDatabase['Model1'];
  console.log('Got data from fakeDatabase');
=======
app.get('/models', (req, res) => {
  const model = fakeDatabase['Model1'];
  console.log('Got data from fakeDatabase');
  res.send(model);

>>>>>>> 309719123187be2aa6579c53a7bb6e95ddeeb431
});

// start the server at URL: http://localhost:3000/
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});

