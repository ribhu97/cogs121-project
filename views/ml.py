import numpy 
import pandas as pd
from sklearn import linear_model
import sys

df = pd.read_csv("../training_data.csv",usecols=['gpa','num_internships','resume_score','github_score'])
df2 = pd.read_csv("../test.csv",usecols=['gpa','num_internships','resume_score','github_score'])

train_x = df.values
train_y = numpy.zeros(1000)
test_x = df2.values
gpa = df["gpa"].values
ni = df["num_internships"].values
r = df["resume_score"].values
g = df['github_score'].values
counter = 0
for i in range(0,1000):
	if(gpa[i] > 3.2 and r[i] > .75 and g[i] > .65 and ni[i] > 1):
		train_y[i] = 1
		counter+=1

clf = linear_model.LogisticRegression(C=1.0, penalty='l1')
clf.fit(train_x,train_y)
labels = clf.predict(test_x)
l = list(labels)
print l
