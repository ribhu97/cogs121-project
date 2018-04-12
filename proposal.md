# Project Proposal

**Team Name**: Persistent

**Group Members**: Nikhil Bose, Alvin Vanegas, Ribhu Lahiri

**Project ideas**
1. A recommender system based on the Yelp API. Often when people are choosing where they want to eat next, they have a cuisine or type of food in mind, but not a specific option that satisfies their preferences. Moreoever, when they consult apps such as Yelp, they are flooded with too many options. Here we wanted to build a recommender system that takes into account personal preferences and favorites (through user input), and gives a recommendation based on a model trained on data taken from the yelp API. There will be a dynamic UI layer on top of the recommender system to take in User Input, show the system status and display the output once the model has finished running. A simplified flow would be like this:
First time users display their favorite resteraunts (model 2 training data) --> User inputs type of food they want to eat -->
App pulls top 20 resteraunts from yelp API that fall under the input category --> those top 20 models go through the recommender system (trained on huge yelp dataset) to find the "best" resteraunts, top 5 are selected --> out of the top 5, the top 2 recommendeded based on the original user said they liked. The UX would be streamlined and will signify this computation running in the background.
2. A data visualization app: Who are in my school's network at x company? The user would be able to select what school (eg. UCSD) they attend, and select a company that would like to know more about (eg. Facebook). Then the application would display a graph and show which are some alums you can possibly reach out to for networking purposes. Here the main problem would be displaying all the connections in a way that is usable. The data would be scraped off LinkedIn and other professional websites. Conversely, we could use personal LinkedIn data and solely built graphs off of that.
