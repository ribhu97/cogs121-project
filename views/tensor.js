const train_data = require("../train.json");
const test_data = require("../test.json");

var ml = require('machine_learning');

console.log(train_data);

const x = [];
const test_x = [];
const y = [];

function formatData(data,i){
  let d  = [];
  d.push(data[i]["gpa"]);
  d.push(data[i]["github_score"]);
  d.push(data[i]["resume_score"]);
  d.push(data[i]["num_internships"]);
  return d;
}

for(let i =0; i < 1000; i++){
  x.push(formatData(train_data,i));
  if((train_data[i]["gpa"] > 3.2) && (train_data[i]["num_internships"] > 1) && (train_data[i]["resume_score"] > .75)  && (train_data[i]["github_score"] > .65)){
    y[i] = [1];
  }
  else {
    y[i] = [0];
  }
}

for(let i =0; i < 100; i++){
  test_x.push(formatData(test_data,i))
}

var classifier = new ml.LogisticRegression({
  'input' : x,
  'label' : y,
  'n_in' : 4,
  'n_out' : 1
});

classifier.set('log level',1);
 
var training_epochs = 1000, lr = 0.01;
 
classifier.train({
    'lr' : lr,
    'epochs' : training_epochs 
});
 

 
console.log("Result : ",classifier.predict(test_x));
