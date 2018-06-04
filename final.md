# Final Project Milestone

### Group Members + Contributions
Nikhil Bose: Developed and contributed to the UI + Design, the recommender, JS to transfer information and backend/database, video

Ribhu Lahiri: Developed the ML algorithm for the candidate recommender, built the REST API and designed the data schema of the database

Alvin Vanegas: Developed the UI and primarily wrote HTML and Javascript code to link the web pages together

### Source Code Files
- index.html: landing page of our webpage, contains front end code of our login page.
- index.js: javascript code for our login page, handles user input for entering out web page and sends it to the database.
- profile.html: front-end code for the user's profile which contains past models they have created
- profile.js: javascript code for the user's profile, sends the model's name to database.
- input.hmtl: front-end code for the input page, contains the necessary inputs to create the model.
- input.js: javascript code that handles the user's inputs and sends it to the database and to the script to run the recommendor.
- output.html: front-end code to display the data visualizations and the results of the recommendor base on the users input.
- output.js: contains the javascript code to pull the necessary data from the database to create the data visualizations and to output the results of the model.
- model (in server/model/): contains the data schema for the required data models for student, recruiters and groups.
- controllers (in server/controller/: contains the queries to serve data from the database through a REST API
- perceptron: a simple 2-layer perceptron, with an input layer of 10 units. Trained on given company data for binary classification of potential hires
- test_data.csv - test data file
- train_data.csv - train data file
### Demo Video
https://youtu.be/S3X9qhw-OTY
