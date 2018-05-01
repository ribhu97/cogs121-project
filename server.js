const express = require('express');
const app = express();

app.use(express.static('views'));


const fakeDatabase = {
  'Model1': {attribute1: 'GPA', attribute2: 'Major', attribute3: 'Internships'}
};


app.get('/fakeDatabase/Model1', (req, res) => {
  const model = fakeDatabase['Model1'];
  console.log('Got data from fakeDatabase');
  res.send(model);
});

// start the server at URL: http://localhost:3000/
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});