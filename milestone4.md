# Milestone 4 

![login](https://github.com/ribhu97/cogs121-project/blob/master/images/Login-Native.png)

![profile](https://github.com/ribhu97/cogs121-project/blob/master/images/profile-native.png)

![input](https://github.com/ribhu97/cogs121-project/blob/master/images/Screenshot%202018-05-02%2012.22.40.png)

![output](https://github.com/ribhu97/cogs121-project/blob/master/images/output-cards.png)


Since our application is dealing with tons of sensitive data, and performing some (albeit light) learning on the data, it is paramount to be transparent and secure with user data.

Users would have to understand how and why their data is being collected and analyzed. The data we are currently using is faked, but in the future the data would be collected from:
1. Job Applications
1. Internal Records of past candidates/employees

Job applicant would have to sign a consent form when they apply for the job - this would essentially allow companies to use necessary components of their academic/professional data in the applicaiton, such as GPA, University, Major etc. This allows for the most transparency with use of the application.

Specifically within the app, the job applicant data would be used as entries within the Test data set, the model would perform classification to see if the candidates meet the criteria set by the recruiter (user).

Past employees/candidates would serve as training data - the model will "learn" what quantatiatively an ideal candidate would be for this company.

It is important to note that solely looking at quantitive data has enormous potential for bias, and could potentially harm efforts for diversity and inclusion - the model will look for candiates who are *similar to the employees who currently work in company*.